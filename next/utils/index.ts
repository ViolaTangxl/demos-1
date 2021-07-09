import { stringify } from 'query-string'
import { host } from 'constants/env'

/** 判断当前是否在浏览器中执行，与之对应的是在 Node.js 环境执行（生成静态页面时） */
export function isBrowser() {
  // https://github.com/zeit/next.js/issues/5354#issuecomment-520305040
  return typeof window !== 'undefined'
}

export type UrlParams = {
  [key: string]: string | number | null | undefined
}

export function urlFor(url: string, params: UrlParams = {}) {
  const querystring = stringify(params, { skipNull: true })
  const sep = url.indexOf('?') >= 0 ? '&' : '?'
  if (querystring) {
    url += sep + querystring
  }
  return url
}

/** 判断当前代码是否嵌入在外部站点运行（以 external 的方式） */
export function isExternal() {
  return isBrowser() && new URL(host, window.location.href).host !== window.location.host
}
