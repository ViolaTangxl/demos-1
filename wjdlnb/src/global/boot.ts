/**
 * @file basic boot behavior
 * @author jiayizhen <jiayizhen@qiniu.com>
 */

import { configure } from 'mobx'
import 'animate.css'

import fetchStore from 'portal-base/common/stores/fetch'
import storageStore from 'portal-base/common/stores/storage'
import routerStore from 'portal-base/common/stores/router'

import proxyFetchStore from 'stores/fetch/proxy'

import history from './history'

import './style.less'

export default function boot() {
  configure({ enforceActions: 'observed' })

  fetchStore.bindRealFetch(window.fetch)
  proxyFetchStore.bindRealFetch(window.fetch)

  storageStore.bindRealStorage(window.localStorage)

  routerStore.fetchBasenameMap()
  routerStore.bindHistory(history)
  routerStore.bindRealLocation(window.location)
  routerStore.bindDocument(window.document)
}
