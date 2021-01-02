/**
 * @file: component App
 * @author: jiayizhen <jiayizhen@qiniu.com>
 */

import React from 'react'
import { observer } from 'mobx-react'
import sensors from 'sa-sdk-javascript'

import { hot } from 'react-hot-loader/root'

import ConfigProvider from 'react-icecream/lib/config-provider'
import zhCN from 'react-icecream/lib/locale-provider/zh_CN'

import userInfoStore from 'portal-base/user/stores/user-info'
import notificationStore from 'portal-base/common/stores/notification'
import iamPermissionStore from 'portal-base/user/stores/iam-permission'
import featureConfigStore from 'portal-base/user/stores/feature-config'
import routerStore from 'portal-base/common/stores/router'
import NotFound from 'portal-base/common/components//NotFound'
import Toaster from 'portal-base/common/components/Toaster'
import { Route, Switch, Redirect } from 'portal-base/common/components/Router'
import BaseProvider from 'portal-base/common/components/Provider'

import Overview from 'components/Overview'
import Customer from 'components/Customer'

import { basename } from 'constants/route'

import Layout from '../Layout'

import styles from './style.m.less'

@hot
@observer
export default class App extends React.Component<any, any> {

  componentDidMount() {
    userInfoStore.fetch().then(
      () => {
        // 当用户处于登录状态
        if (userInfoStore.isLoaded) {
          // 绑定 uid 到 sensors login id
          if (typeof sensors.login === 'function') {
            sensors.login(userInfoStore.uid + '')
          }

          // TODO: 判断 && 重定向逻辑待定
          // 如果是 iam 子账号或 oem 账号
          // 直接返回首页，不允许访问 agent 分站
          if (userInfoStore.isIamUser || userInfoStore.isOem) {
            routerStore.replace('/')
            return
          }

          // TODO: 判断 && 重定向逻辑待定
          // 如果不是 agent 用户
          // 重定向到 invitation 页面
          // if (!userInfoStore.isAgent) {
          //   routerStore.replace('/invitation')
          //   return
          // }

          if (!userInfoStore.isIamUser) {
            notificationStore.init()
          }

          iamPermissionStore.fetchAvailableServices()
          iamPermissionStore.fetchActionsEffects()
        }
      }
    )
    featureConfigStore.fetch()
  }

  render() {
    const cnt = (
      <BaseProvider>
        <Toaster />
        <Route path={basename}>
          <Layout>
            <Switch>
              <Route relative exact path="/">
                <Redirect relative to="/overview" />
              </Route>
              <Route relative exact title="推广概览" path="/overview"><Overview /></Route>
              <Route relative exact title="客户管理" path="/customer"><Customer /></Route>
              <Route relative exact title="消费历史" path="/consume">消费历史</Route>
              <Route relative path="*"><NotFound /></Route>
            </Switch>
          </Layout>
        </Route>
      </BaseProvider>
    )

    return (
      <div className={styles.app}>
        <ConfigProvider locale={zhCN}>
          {cnt}
        </ConfigProvider>
      </div>
    )
  }
}
