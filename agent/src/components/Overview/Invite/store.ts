/**
 * @file component Overview Invite store
 * @author jiayizhen <jiayizhen@qiniu.com>
 */

import { observable, action, computed } from 'mobx'
import autobind from 'autobind-decorator'
import { FormState, FieldState } from 'formstate-x'

import copy from 'copy-to-clipboard'

import { injectable } from 'qn-fe-core/di'
import Disposable from 'qn-fe-core/disposable'

import { Toaster } from 'portal-base/common/stores/toaster'
import { Loadings } from 'portal-base/common/stores/loadings'

import { allowDomains } from 'constants/env'

import { textNotEmpty, textOfPattern } from 'utils/form'
import { getTopLevelDomain } from 'utils/url'

const validateUrlNotEmpty = textNotEmpty('不能为空')
const validateUrl = textOfPattern(/^https?:\/\//, 'URL 需要以 http:// 或 https:// 开头')

// TODO
// 联调完成后移除
const MOCK_URL = 'http://index-portal-v4-env-dev.qa.qiniu.io/signup?code=test'

export function createFormState() {
  return new FormState({
    url: new FieldState('').validators(validateUrlNotEmpty, validateUrl, value => {
      const domain = getTopLevelDomain(value)

      // 目前测试环境允许地址为 qiniu.io 域名
      // 线上允许地址为 qiniu.com 域名
      if (allowDomains.indexOf(domain) === -1) {
        return 'URL 不属于七牛云的页面'
      }

      return null
    })
  })
}

enum LoadingType {
  Fetch = 'fetch',
  MakeUrlShort = 'makeUrlShort'
}

@injectable()
export default class LocalStore extends Disposable {
  constructor(
    private toasterStore: Toaster
  ) {
    super()
    Toaster.bind(this, this.toasterStore)
  }

  loadings = Loadings.collectFrom(this, LoadingType)

  @observable.ref formState = createFormState()

  @action
  copyShortUrl(url: string) {
    if (!url) return

    if (copy(url)) {
      this.toasterStore.success('复制成功！')
    }
  }

  @action.bound onCopy(isSuccess: boolean) {
    if (isSuccess) {
      this.toasterStore.success('复制成功！')
      return
    }

    this.toasterStore.warning('复制失败，请手动选择复制')
  }

  @computed get isFetching() {
    return this.loadings.isLoading(LoadingType.Fetch)
  }

  @computed get isMakingUrlShort() {
    return this.loadings.isLoading(LoadingType.MakeUrlShort)
  }

  // TODO
  // options 类型
  @computed get makeUrlShortOptions(): any {
    const fields = this.formState.$

    return {
      url: fields.url.value
    }
  }

  @autobind
  @Toaster.handle(undefined, '短链生成失败')
  @Loadings.handle(LoadingType.MakeUrlShort)
  async makeUrlShort() {
    const result = await this.formState.validate()

    if (result.hasError) return

    // TODO
    // 接口联调
    const fields = this.formState.$
    fields.url.set(MOCK_URL)
    // 短链生成成功后直接复制到剪贴板
    this.copyShortUrl(MOCK_URL)
  }

  @autobind
  @Toaster.handle(undefined, '邀请链接获取失败')
  @Loadings.handle(LoadingType.Fetch)
  fetch() {
    // TODO
    // 接口联调
    const promise = new Promise(resolve => {
      const timeout = setTimeout(() => {
        const fields = this.formState.$
        fields.url.set(MOCK_URL)

        clearTimeout(timeout)
        resolve()
      }, 1000)
    })

    return promise
  }

  init() {
    this.addDisposer(this.formState.dispose)

    this.fetch()
  }
}
