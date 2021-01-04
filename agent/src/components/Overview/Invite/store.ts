/**
 * @file component Overview Invite store
 * @author jiayizhen <jiayizhen@qiniu.com>
 */

import { observable, action, computed, reaction } from 'mobx'
import autobind from 'autobind-decorator'
import { FormState, FieldState } from 'formstate-x'

import copy from 'copy-to-clipboard'

import { injectable } from 'qn-fe-core/di'
import Disposable from 'qn-fe-core/disposable'

import { Toaster } from 'portal-base/common/stores/toaster'
import { Loadings } from 'portal-base/common/stores/loadings'
import { formatURL } from 'portal-base/common/utils/url'

import { allowDomains } from 'constants/env'

import { textNotEmpty, textOfPattern } from 'utils/form'
import { getTopLevelDomain } from 'utils/url'

const validateUrlNotEmpty = textNotEmpty('不能为空')
const validateUrl = textOfPattern(/^https?:\/\//, 'URL 需要以 http:// 或 https:// 开头')

// TODO
// 联调完成后移除
const MOCK_URL_PREFIX = 'http://index-portal-v4-env-dev.qa.qiniu.io/signup?code='
// TODO
// 文案修改
const QQ_SHARE_CONTENT = '[连接数据 重塑价值]七牛云合作伙伴推荐'

export function createFormState(url: string) {
  return new FormState({
    url: new FieldState(url).validators(validateUrlNotEmpty, validateUrl, value => {
      const domain = getTopLevelDomain(value)

      // 目前测试环境允许地址为 qiniu.io 域名
      // 线上允许地址为 qiniu.com 域名
      if (allowDomains.indexOf(domain) === -1) {
        return '当前 URL 不属于七牛云的页面'
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

  @observable.ref url = ''
  @observable.ref formState = createFormState(this.url)

  @action
  updateUrl(url: string) {
    this.url = url || ''
  }

  @action
  copyShortUrl(url: string) {
    if (!url) return

    if (copy(url)) {
      this.toasterStore.success('短链复制成功！')
    }
  }

  @action.bound onCopy(isSuccess: boolean) {
    if (isSuccess) {
      this.toasterStore.success('复制成功！')
      return
    }

    this.toasterStore.warning('复制失败，请手动选择复制')
  }

  @computed get qqZoneShareLink() {
    const params = {
      to: 'qzone',
      url: this.url,
      desc: QQ_SHARE_CONTENT,
      title: QQ_SHARE_CONTENT
    }

    return formatURL('https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey', params)
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
    // 短链生成成功后直接复制到剪贴板
    this.copyShortUrl(`${MOCK_URL_PREFIX}short`)
  }

  @autobind
  @Toaster.handle(undefined, '邀请链接获取失败')
  @Loadings.handle(LoadingType.Fetch)
  fetch() {
    // TODO
    // 接口联调
    const promise = new Promise(resolve => {
      const timeout = setTimeout(() => {
        this.updateUrl(`${MOCK_URL_PREFIX}origin`)

        clearTimeout(timeout)
        resolve()
      }, 1000)
    })

    return promise
  }

  init() {
    this.addDisposer(this.formState.dispose)

    this.addDisposer(reaction(
      () => this.url,
      url => {
        if (!url) return

        this.formState = createFormState(url)
      }
    ))

    this.fetch()
  }
}
