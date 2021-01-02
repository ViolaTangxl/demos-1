/**
 * @file: component Layout
 * @author: jiayizhen <jiayizhen@qiniu.com>
 */

import React, { PropsWithChildren } from 'react'
import { observer } from 'mobx-react'

import IcecreamLayout from 'react-icecream/lib/layout'

import BaseLayout from 'portal-base/common/components/Layout'

import SubSidebar from './SubSidebar'

import styles from './style.m.less'

const IcecreamSider = IcecreamLayout.Sider
const IcecreamContent = IcecreamLayout.Content

export default observer(function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <BaseLayout>
      <IcecreamLayout className={styles.main} hasSider>
        <IcecreamSider>
          <SubSidebar />
        </IcecreamSider>
        <IcecreamContent className={styles.content}>
          {children}
        </IcecreamContent>
      </IcecreamLayout>
    </BaseLayout>
  )
})
