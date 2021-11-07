/**
 * @file component BirthdayCountdown
 * @author jiayizhen <jiayizhen@qiniu.com>
 */

import React from 'react'
import { observer } from 'mobx-react'

import Page from 'components/Page'

import styles from './style.m.less'

export default observer(function BirthdayCountdown() {
  return (
    <Page
      className={styles.main}
      title="生日倒计时"
    >
      生日倒计时
    </Page>
  )
})
