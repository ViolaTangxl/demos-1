/**
 * @file component BirthdayCountdown
 * @author jiayizhen <jiayizhen@qiniu.com>
 */

import React from 'react'
import { observer } from 'mobx-react'

import Page from 'components/Page'
import FlipDown from 'components/FlipDown'

import {
  MemberNameTextMap,
  MemberNameList
} from 'constants/member'
import { BirthdayMap } from 'constants/birthday'

import styles from './style.m.less'

export default observer(function BirthdayCountdown() {
  function renderFlipDowns() {
    return MemberNameList.map(
      (name: string, index: number) => {
        const matchBirthday = BirthdayMap[name]
        const { month, date } = matchBirthday

        return (
          <div
            key={index}
            className={styles.flipDownWrapper}
          >
            <div className={styles.tip}>
              距离{MemberNameTextMap[name]}的生日还有
            </div>
            <FlipDown
              className={styles.flipDown}
              month={month}
              date={date}
            />
          </div>
        )
      }
    )
  }

  return (
    <Page
      className={styles.main}
      title="生日倒计时"
    >
      {renderFlipDowns()}
    </Page>
  )
})
