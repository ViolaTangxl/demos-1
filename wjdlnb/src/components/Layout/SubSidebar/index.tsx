/**
 * @file: component SubSidebar
 * @author: jiayizhen <jiayizhen@qiniu.com>
 */

import React, { CSSProperties } from 'react'

import BaseSubSidebar, { LinkItem } from 'portal-base/common/components/SubSidebar'

import { name } from 'constants/app'
import { basename } from 'constants/route'

export default function SubSidebar() {
  // Overview 组件页面中的 Fireworks 组件 z-index 为 0
  // 将左边栏导航项的 z-index 设置为 1 是为了保证导航栏能够点击
  const linkItemStyle: CSSProperties = {
    zIndex: 1
  }

  return (
    <BaseSubSidebar title={name}>
      <LinkItem
        style={linkItemStyle}
        to={`${basename}/overview`}
      >
        概览
      </LinkItem>
      <LinkItem
        style={linkItemStyle}
        to={`${basename}/birthday`}
      >
        生日倒计时
      </LinkItem>
    </BaseSubSidebar>
  )
}
