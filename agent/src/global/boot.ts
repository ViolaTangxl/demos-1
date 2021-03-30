/**
 * @file basic boot behavior
 * @author jiayizhen <jiayizhen@qiniu.com>
 */

import { configure } from 'mobx'
import sensors from 'sa-sdk-javascript'

import fetchStore from 'portal-base/common/stores/fetch'
import storageStore from 'portal-base/common/stores/storage'
import routerStore from 'portal-base/common/stores/router'
import financialErrorCodeMap from 'portal-base/financial/constants/error-code-messages'
import exceptionStore from 'portal-base/common/stores/exception'

import { isDev } from 'constants/env'

import proxyFetchStore from 'stores/fetch/proxy'

import history from './history'

import './style.less'

export default function boot() {
  configure({ enforceActions: 'observed' })

  exceptionStore.registerApiErrorCodeMessages(financialErrorCodeMap)

  fetchStore.bindRealFetch(window.fetch)
  proxyFetchStore.bindRealFetch(window.fetch)

  storageStore.bindRealStorage(window.localStorage)

  routerStore.fetchBasenameMap()
  routerStore.bindHistory(history)
  routerStore.bindRealLocation(window.location)
  routerStore.bindDocument(window.document)
  routerStore.bindGA('UA-78944316-1', {
    gaAddress: '//qiniu.staticfile.org/analytics.js',
    gaOptions: {
      cookieDomain: 'auto'
    }
  })

  sensors.init({
    heatmap_url: 'https://static.sensorsdata.cn/sdk/1.15.14/heatmap.min.js',
    // 本地研发环境展示埋点日志便于调试，测试和生产环境埋点日志隐藏
    show_log: isDev,
    name: 'sensors',
    server_url: 'https://sensors.qiniu.com/sa?project=default',
    heatmap: {
      // 是否开启点击图，默认 default 表示开启，自动采集 $WebClick 事件，可以设置 'not_collect' 表示关闭
      // 需要 Web JS SDK 版本号大于 1.7
      clickmap: 'default',
      // 是否开启触达注意力图，默认 not_collect 表示关闭，不会自动采集 $WebStay 事件，可以设置 'default' 表示开启
      // 需要 Web JS SDK 版本号大于 1.9.1
      scroll_notice_map: 'default',
      element_selector: 'not_use_id'
    },
    preset_properties: {
      latest_referrer_host: true,
      latest_landing_page: true
    }
  })
  sensors.quick('autoTrack')
}
