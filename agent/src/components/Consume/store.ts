/**
 * @file component Consume store
 * @author jiayizhen <jiayizhen@qiniu.com>
 */

import { observable, action, computed, autorun } from 'mobx'
import autobind from 'autobind-decorator'
import moment, { Moment } from 'moment'
import { FormState, FieldState } from 'formstate-x'

import { injectable } from 'qn-fe-core/di'
import Disposable from 'qn-fe-core/disposable'

import { Toaster } from 'portal-base/common/stores/toaster'
import { Loadings } from 'portal-base/common/stores/loadings'

import { getMockData } from './mock'

const DEFAULT_PAGE = 1
const DEFAULT_PAGE_SIZE = 10

enum LoadingType {
  Fetch = 'fetch'
}

export function createFormState() {
  // 默认查询上个月的数据
  return new FormState({
    startMonth: new FieldState<Moment>(moment().subtract(1, 'month')),
    endMonth: new FieldState<Moment>(moment().subtract(1, 'month'))
  })
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

  @observable.ref total = 0
  @observable.ref page = DEFAULT_PAGE
  @observable.ref pageSize = DEFAULT_PAGE_SIZE

  @observable.ref tableData: any[] = []

  @action.bound updateTableData(data: any[]) {
    this.tableData = data || []
  }

  @action
  updateTotal(total: number) {
    this.total = total || 0
  }

  @action.bound updatePage(page: number) {
    this.page = page || DEFAULT_PAGE
  }

  @action.bound updatePageSize(pageSize: number) {
    this.pageSize = pageSize || DEFAULT_PAGE_SIZE
  }

  @computed get isLoading() {
    return this.loadings.isLoading(LoadingType.Fetch)
  }

  // TODO
  // fetch options 类型
  @computed get fetchOptions(): any {
    const fields = this.formState.$

    // 前端页面时间展示遵循左闭右闭的原则
    // 传递到后端的时间参数遵循左闭右开的原则
    const start = moment(fields.startMonth.value).startOf('month').toISOString()
    const end = moment(fields.endMonth.value).add(1, 'month').startOf('month').toISOString()

    return {
      date_from: start,
      date_to: end,
      page: this.page,
      page_size: this.pageSize
    }
  }

  @autobind
  @Toaster.handle(undefined, '消费历史数据获取失败')
  @Loadings.handle(LoadingType.Fetch)
  fetch() {
    // TODO
    // 接口联调
    const promise = new Promise(resolve => {
      const timeout = setTimeout(() => {
        const mockData = getMockData()

        this.updateTotal(mockData.length)
        this.updateTableData(mockData)

        clearTimeout(timeout)
        resolve()
      }, 1000)
    })

    return promise
  }

  init() {
    this.addDisposer(this.formState.dispose)

    this.addDisposer(autorun(() => this.fetch()))
  }
}
