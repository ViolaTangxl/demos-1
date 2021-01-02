/**
 * @file api constants
 * @author jiayizhen <jiayizhen@qiniu.com>
 */

import { janusHost } from 'constants/env'

export const proxyPrefix = '/api/proxy'

export const apiPrefix = '/agent'

// TODO
// 联调先走 janus
// 等后面 portal proxy 支持后再改为 portal proxy
export const baseApi = `${janusHost}${proxyPrefix}${apiPrefix}`
