/**
 * @file BlogViewer 组件
 * @description 用于将 html string 转换为 dom && 定义基本样式
 */

import React, { CSSProperties } from 'react'
import cls from 'classnames'

import styles from './style.less'

export type Props = {
  className?: string
  style?: CSSProperties
  content: string
}

export default function BlogViewer({
  className,
  style,
  content
}: Props) {

  style = style || {}

  return (
    <div
      className={cls(
        styles.main,
        className
      )}
      style={style}
      dangerouslySetInnerHTML={{ __html: content }} // eslint-disable-line react/no-danger
    ></div>
  )
}
