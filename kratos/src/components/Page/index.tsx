/**
 * @file: component Page
 * @author: jiayizhen <jiayizhen@qiniu.com>
 */

import React, { PropsWithChildren, ReactNode } from 'react'
import { observer } from 'mobx-react'
import cls from 'classnames'

import PageTitle from 'components/PageTitle'

import styles from './style.m.less'

export type Props = PropsWithChildren<{}> & {
  title: string | ReactNode
  className?: string
}

export default observer(function Page({
  title,
  className,
  children
}: Props) {
  return (
    <div className={styles.main}>
      <PageTitle title={title} />
      <div
        className={cls(
          styles.content,
          className
        )}
      >
        {children}
      </div>
    </div>
  )
})
