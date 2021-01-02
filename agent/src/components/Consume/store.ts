/**
 * @file component Consume store
 * @author jiayizhen <jiayizhen@qiniu.com>
 */

import { observable, action, computed, autorun } from 'mobx'
import autobind from 'autobind-decorator'

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

@injectable()
export default class LocalStore extends Disposable {
  constructor(
    private toasterStore: Toaster
  ) {
    super()
    Toaster.bind(this, this.toasterStore)
  }

  loadings = Loadings.collectFrom(this, LoadingType)

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
    return {
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
    this.addDisposer(autorun(() => this.fetch()))
  }
}
