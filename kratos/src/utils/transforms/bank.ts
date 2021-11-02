/**
 * @file transforms bank content
 * @author jiayizhen <jiayizhen@qiniu.com>
 */

// 以空格分隔银行卡号（每 4 位加一个空格）
export function splitBankCardByBlank(bankCard: string) {
  return bankCard.replace(/(\d{4})(?=\d)/g, '$1 ')
}
