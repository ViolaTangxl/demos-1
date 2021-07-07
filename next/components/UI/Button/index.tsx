/**
 * @file 各种按钮
 * @description 各种按钮
 */

import React, { HTMLAttributes, ButtonHTMLAttributes, MouseEvent } from 'react'

import Link from 'components/Link'

import styles from './style.less'

export type Props = HTMLAttributes<HTMLElement> & {
  /** 按钮类型：白底蓝字 / 蓝底白字 / 透明底蓝字 / 透明底白字 / 白底黑字 */
  type?: 'default' | 'primary' | 'hollow' | 'primary-hollow' | 'default-grey'
  /** 按钮尺寸 */
  size?: 'default' | 'small'
  /** 是否有边框 */
  withBorder?: boolean
  /** 链接地址，如传该字段，按钮会被渲染为 <a> 标签 */
  href?: string
  target?: string
  htmlType?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  disabled?: boolean
}

const typeStyleMap = {
  default: null,
  primary: styles.typePrimary,
  hollow: styles.typeHollow,
  'primary-hollow': styles.typePrimaryHollow,
  'default-grey': styles.typeDefaultGrey
}

const sizeStyleMap = {
  default: null,
  small: styles.sizeSmall
}

function disabledClickHandler(e: MouseEvent) {
  e.preventDefault()
}

export default function Button({
  type, size, withBorder, className,
  htmlType, href, disabled, onClick, ...otherProps
}: Props) {

  type = type == null ? 'default' : type
  size = size == null ? 'default' : size

  onClick = disabled ? disabledClickHandler : onClick

  className = [
    className,
    styles.button,
    typeStyleMap[type],
    sizeStyleMap[size],
    withBorder && styles.withBorder,
    disabled && styles.disabled
  ].filter(Boolean).join(' ')

  // <button>
  if (href == null) {
    return (
      <button
        {...otherProps}
        className={className}
        // eslint-disable-next-line react/button-has-type
        type={htmlType}
        disabled={disabled}
        onClick={onClick}
      />
    )
  }

  // else <a>
  return (
    <Link
      href={href}
      {...otherProps}
      className={className}
      onClick={onClick}
    />
  )
}
