/**
 * @file common proxy store
 * @author jiayizhen <jiayizhen@qiniu.com>
 * @description copy from https://github.com/qbox/portal-base/blob/master/common/stores/fetch/proxy.ts
 */

import { injectable } from 'qn-fe-core/di'
import { Exception } from 'qn-fe-core/exception'

import {
  BaseFetchStore,
  ExceptionName,
  makeApiException
} from 'portal-base/common/stores/fetch/base'

export * from 'portal-base/common/stores/fetch/base'

export interface IReponseBody {
  code: number
  message: string
  data: any
}

@injectable()
export class CommonProxyFetchStore extends BaseFetchStore {
  async produceResult(statusCode: number, body: string) {
    this.ensure2xx(statusCode, body)

    if (body === '' || body == null) {
      return
    }

    let result: IReponseBody
    try {
      result = JSON.parse(body)
    } catch {
      throw new Exception(ExceptionName.InvalidResponse, '接口响应有误', body)
    }

    if (result.code !== 200) {
      const code = result.code !== 200 ? result.code : statusCode
      throw makeApiException({ code, body }, result.message)
    }

    return result.data
  }
}

const proxyFetchStore = new CommonProxyFetchStore()

export default proxyFetchStore

export const fetch = proxyFetchStore.fetch

export const get = proxyFetchStore.get

export const postJSON = proxyFetchStore.postJSON
export const putJSON = proxyFetchStore.putJSON
export const patchJSON = proxyFetchStore.patchJSON
export const deleteJSON = proxyFetchStore.deleteJSON
