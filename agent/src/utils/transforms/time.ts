/**
 * @file transforms time content
 * @author jiayizhen <jiayizhen@qiniu.com>
 */

import moment from 'moment'

// 计算传入的 compareTime 和当前时间之间所间隔的天数
// 返回的天数包含 compareTime 所在的那一天和当前天
export function getDiffDays(compareTime: string) {
  if (!compareTime) return 0

  const start = moment(compareTime).startOf('day')
  const end = moment().add(1, 'day').startOf('day')
  const diffDays = end.diff(start, 'day')

  return Math.abs(diffDays)
}
