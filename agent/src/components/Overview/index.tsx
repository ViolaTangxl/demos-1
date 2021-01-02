/**
 * @file: component Overview
 * @author: jiayizhen <jiayizhen@qiniu.com>
 */

import React from 'react'

import Page from 'components/Page'

import Rules from './Rules'
import Invite from './Invite'

export default function Overview() {
  return (
    <Page title="推广概览">
      <Rules />
      <Invite />
    </Page>
  )
}
