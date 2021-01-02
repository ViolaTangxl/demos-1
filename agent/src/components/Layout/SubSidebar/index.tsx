/**
 * @file: component SubSidebar
 * @author: jiayizhen <jiayizhen@qiniu.com>
 */

import React from 'react'

import BaseSubSidebar, { LinkItem } from 'portal-base/common/components/SubSidebar'

import { basename } from 'constants/route'

export default function SubSidebar() {
  return (
    <BaseSubSidebar title="合作伙伴">
      <LinkItem to={`${basename}/overview`}>推广概览</LinkItem>
      <LinkItem to={`${basename}/customer`}>客户管理</LinkItem>
      <LinkItem to={`${basename}/consume`}>消费历史</LinkItem>
    </BaseSubSidebar>
  )
}
