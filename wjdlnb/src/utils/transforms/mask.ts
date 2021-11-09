/**
 * @file transforms money content
 * @author jiayizhen <jiayizhen@qiniu.com>
 */

// 隐藏 orderHash（订单号）后面的部分
// 只显示前 8 个字符
export function makeOrderHashMask(orderHash: string) {
  return `${orderHash.slice(0, 8)}...`
}

export function makeEmailMask(email: string) {
  if (!email) return ''

  const list = email.split('@')
  const prefix = list[0] || ''
  const suffix = list[1] || ''
  return `${prefix.slice(0, 1)}***@${suffix}`
}
