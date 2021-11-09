/**
 * @file: component PageTitle
 * @author: jiayizhen <jiayizhen@qiniu.com>
 */

import React, { ReactNode } from 'react'
import { observer } from 'mobx-react'

import styles from './style.m.less'

export type Props = {
  title: string | ReactNode
}

export default observer(function PageTitle({
  title
}: Props) {
  return (
    <div className={styles.main}>{title}</div>
  )
})
