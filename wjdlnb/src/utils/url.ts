/**
 * @file url-related utils
 */

// 获取一级域名
// 例如传入 https://www.qiniu.com 返回 qiniu.com
export function getTopLevelDomain(url: string): string {
  let parsedUrl: URL

  try {
    parsedUrl = new URL(url)
  } catch (e) {
    return ''
  }

  const { hostname } = parsedUrl
  const domain = hostname.split('.').slice(-2).join('.')
  return domain
}

export function getFileName(url: string): string {
  if (!url) return ''

  const list = url.split('/')
  if (!list.length) return ''

  return list[list.length - 1] || ''
}
