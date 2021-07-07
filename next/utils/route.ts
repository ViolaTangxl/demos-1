export function checkInSite(href?: string) {
  if (!href) return { inSite: true, path: '' } as const

  const hasProtocolAndHost = /^[a-z]+:/.test(href) // href="foo://bar.com"
  const hasHostOnly = /\/\//.test(href) // href="//bar.com/..."

  if (hasProtocolAndHost || hasHostOnly) {
    // TODO: 后续可以考虑结合当前 host，进一步把 `https://www.qiniu.com/foo` 或
    // `//www.qiniu.com/foo` 转化为 /foo，并当成站内链接处理
    return { inSite: false } as const
  }

  return {
    inSite: true,
    path: href
  } as const
}
