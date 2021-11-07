/**
 * @file component BirthdayCountdown
 * @author jiayizhen <jiayizhen@qiniu.com>
 */

import React from 'react'
import { observer } from 'mobx-react'

import Page from 'components/Page'
import FlipDown from 'components/FlipDown'

import styles from './style.m.less'

export default observer(function BirthdayCountdown() {
  return (
    <Page
      className={styles.main}
      title="生日倒计时"
    >
      <FlipDown />
    </Page>
  )
})
