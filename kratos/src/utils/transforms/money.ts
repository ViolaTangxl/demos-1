/**
 * @file transforms money content
 * @author jiayizhen <jiayizhen@qiniu.com>
 */

// 将后端返回的金额转换为以元为单位的格式（后端存的金额会 * 10000）
export function asYuan(money: number) {
  // 避免出现 10000 转换为 1.00 的情况
  return Math.round(money / 100) / 100
}

// 以千位分隔符分隔金额
export function splitMoneyByComma(money: string | number) {
  const moneyStr = `${money}`
  // 处理金额带小数的情况
  const splitArr = moneyStr.split('.')
  splitArr[0] = splitArr[0].replace(/(?=(\B\d{3})+$)/g, ',')
  return splitArr.join('.')
}
