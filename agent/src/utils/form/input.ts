/**
 * @file input-related utils
 */

import { FieldState, bindInput } from 'formstate-x'
import { Moment } from 'moment'

import { MonthPickerProps } from 'react-icecream/lib/date-picker'

// 非 RangePicker 的情况
// 例如 DatePicker || WeekPicker || MonthPicker ...
// TODO: 后面应该移到 portal-base 中
export function bindSingleDatePicker(state: FieldState<undefined | Moment>): Pick<MonthPickerProps, 'value' | 'onChange'> {
  return bindInput(state)
}
