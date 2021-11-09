/**
 * @file component Overview
 * @author jiayizhen <jiayizhen@qiniu.com>
 */

import React from 'react'
import { observer } from 'mobx-react'

import Page from 'components/Page'

import IconWJDLNB from './images/icon-wjdlnb.jpg'

import styles from './style.m.less'

export default observer(function Overview() {
  return (
    <Page
      className={styles.main}
      title="概览"
    >
      <img
        className={styles.img}
        src={IconWJDLNB}
        title="维军大佬牛逼"
        alt="维军大佬牛逼"
      />
    </Page>
  )
})
