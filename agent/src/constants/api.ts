/**
 * @file api constants
 * @author jiayizhen <jiayizhen@qiniu.com>
 */

import { janusHost } from 'constants/env'

export const proxyPrefix = '/api/proxy'

export const apiPrefix = '/agent'

export const baseApi = `${janusHost}${proxyPrefix}${apiPrefix}`
