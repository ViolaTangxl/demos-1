/**
 * @file: component App
 * @author: jiayizhen <jiayizhen@qiniu.com>
 */

import React from 'react'
import { observer } from 'mobx-react'

import { hot } from 'react-hot-loader/root'

import ConfigProvider from 'react-icecream/lib/config-provider'
import zhCN from 'react-icecream/lib/locale-provider/zh_CN'

import Toaster from 'portal-base/common/components/Toaster'
import BaseProvider from 'portal-base/common/components/Provider'
import { Route, Switch, Redirect } from 'portal-base/common/components/Router'

import NotFound from 'components/NotFound'

import { basename } from 'constants/route'

import Layout from '../Layout'

import styles from './style.m.less'

@hot
@observer
export default class App extends React.Component<any, any> {
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
              <Route relative exact title="概览" path="/overview">维军大佬牛逼</Route>
              <Route relative exact title="404" path="/404"><NotFound /></Route>
              <Route relative path="*">
                <Redirect to="/404" />
              </Route>
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
