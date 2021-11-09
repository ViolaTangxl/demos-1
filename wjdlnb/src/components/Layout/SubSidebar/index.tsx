/**
 * @file: component SubSidebar
 * @author: jiayizhen <jiayizhen@qiniu.com>
 */

import React from 'react'

import BaseSubSidebar, { LinkItem } from 'portal-base/common/components/SubSidebar'

import { name } from 'constants/app'
import { basename } from 'constants/route'

export default function SubSidebar() {
  return (
    <BaseSubSidebar title={name}>
      <LinkItem to={`${basename}/overview`}>概览</LinkItem>
      <LinkItem to={`${basename}/birthday`}>生日倒计时</LinkItem>
    </BaseSubSidebar>
  )
}
