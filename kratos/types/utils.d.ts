/**
 * @file utils type define
 * @author jiayizhen <jiayizhen@qiniu.com>
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type DistributiveOmit<T, K extends keyof T> = T extends any
  ? Omit<T, K>
  : never

type DistributivePick<T, K extends keyof T> = T extends any
  ? Pick<T, K>
  : never

type IndexSignature = { [key in keyof any]: any }

type Enum<E> = Record<keyof E, number | string> & { [k: number]: string }
