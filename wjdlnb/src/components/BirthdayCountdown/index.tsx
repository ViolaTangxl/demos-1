/**
 * @file component BirthdayCountdown
 * @author jiayizhen <jiayizhen@qiniu.com>
 */

import React from 'react'
import { observer } from 'mobx-react'

import Collapse from 'antd/lib/collapse'

import Page from 'components/Page'
import FlipDown from 'components/FlipDown'

import {
  MemberName,
  MemberNameTextMap,
  MemberNameList
} from 'constants/member'
import { BirthdayMap } from 'constants/birthday'

import styles from './style.m.less'

const { Panel } = Collapse

export default observer(function BirthdayCountdown() {
  const panelView = MemberNameList.map(
    (name: string) => {
      const matchBirthday = BirthdayMap[name]
      const { month, date } = matchBirthday

      return (
        <Panel
          className={styles.panel}
          key={name}
          header={MemberNameTextMap[name]}
          forceRender
        >
          <div className={styles.tip}>
            距离{MemberNameTextMap[name]}的生日还有
          </div>
          <FlipDown
            className={styles.flipDown}
            month={month}
            date={date}
          />
        </Panel>
      )
    }
  )

  function renderCollapse() {
    return (
      <Collapse
        defaultActiveKey={[MemberName.SheWeiJun]}
        accordion
      >
        {panelView}
      </Collapse>
    )
  }

  return (
    <Page title="生日倒计时">
      {renderCollapse()}
    </Page>
  )
})
