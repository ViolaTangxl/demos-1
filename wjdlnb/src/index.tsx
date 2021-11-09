/**
 * @file entry file
 * @author jiayizhen <jiayizhen@qiniu.com>
 */

import 'global/polyfill'
import 'react-hot-loader/patch'

import React from 'react'
import ReactDOM from 'react-dom'

import boot from 'global/boot'

import App from 'components/App'

// 初始化行为
boot()

// 渲染 APP
const rootEl = document.getElementById('main-view-wrapper')
ReactDOM.render(
  <App />,
  rootEl
)
