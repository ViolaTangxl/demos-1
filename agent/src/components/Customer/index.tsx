/**
 * @file: component Customer
 * @author: jiayizhen <jiayizhen@qiniu.com>
 */

import React from 'react'
import { observer } from 'mobx-react'
import moment from 'moment'

import { useLocalStore } from 'qn-fe-core/local-store'

import Table from 'react-icecream/lib/table'
import Pagination from 'react-icecream/lib/pagination'

import Page from 'components/Page'

import { asYuan } from 'utils/transforms/money'
import { Red } from 'utils/styles/colors'

import LocalStore from './store'

import styles from './style.m.less'

const TIME_FORMAT_LAYOUT = 'YYYY-MM-DD HH:mm:ss'

const COLUMNS = [{
  title: '客户名称',
  dataIndex: 'name',
  key: 'name',
  fixed: 'left' as const, // 直接传 'left' || 'right' 会报类型不兼容的问题，先这样临时解决一下
  width: 140,
  // 解决 width 无效，内容会被撑开的问题
  render: function renderName(v: string) {
    return (
      <div style={{ wordWrap: 'break-word', wordBreak: 'break-word' }}>
        {v}
      </div>
    )
  }
}, {
  title: '客户邮箱',
  dataIndex: 'email',
  key: 'email',
  fixed: 'left' as const,
  width: 180,
  // 解决 width 无效，内容会被撑开的问题
  render: function renderEmail(v: string) {
    return (
      <div style={{ wordWrap: 'break-word', wordBreak: 'break-word' }}>
        {v}
      </div>
    )
  }
}, {
  title: '认证类型',
  dataIndex: 'identity',
  key: 'identity'
}, {
  title: '是否欠费',
  dataIndex: 'owe',
  key: 'owe',
  render: function renderOwe(v: number) {
    if (v) {
      // 欠费
      return (
        <span style={{ color: Red.red6 }}>欠费</span>
      )
    }

    // 不欠费
    return '不欠费'
  }
}, {
  title: '本月预估消费（元）',
  dataIndex: 'current_expense',
  key: 'current_expense',
  render: (v: number) => asYuan(v)
}, {
  title: '上月消费（元）',
  dataIndex: 'last_expense',
  key: 'last_expense',
  render: (v: number) => asYuan(v)
}, {
  title: '累计消费金额（元）',
  dataIndex: 'total',
  key: 'total',
  render: (v: number) => asYuan(v)
}, {
  title: '绑定时间',
  dataIndex: 'time',
  key: 'time',
  fixed: 'right' as const,
  width: 180,
  render: (v: number) => moment(v).format(TIME_FORMAT_LAYOUT)
}]

export default observer(function Customer() {
  const store = useLocalStore(LocalStore)

  const {
    isLoading,
    tableData,
    total, page, pageSize, updatePage, updatePageSize
  } = store

  return (
    <Page
      className={styles.content}
      title="客户管理"
    >
      <div className={styles.tips}>
        <div className={styles.tip}>
          1、“本月预估消费”包含本月预估后付费金额，本月订单扣费金额和本月退款金额，因后付费金额尚未出账，数据仅供参考。
        </div>
        <div className={styles.tip}>
          2、因每月后付费账单于 5 号出账，建议 5 号后再查看“上月消费”。
        </div>
      </div>

      <div className={styles.table}>
        <Table
          loading={isLoading}
          columns={COLUMNS}
          dataSource={tableData}
          rowKey={(_, index: number) => `${index}`}
          scroll={{ x: 'max-content' }}
          pagination={false}
        />
      </div>

      <div className={styles.pagination}>
        <Pagination
          showSizeChanger
          showQuickJumper
          current={page}
          pageSize={pageSize}
          pageSizeOptions={['10', '20', '30', '40', '50']}
          total={total}
          disabled={isLoading}
          onShowSizeChange={(targetPage, targetPageSize) => {
            updatePage(targetPage)
            updatePageSize(targetPageSize)
          }}
          onChange={targetPage => updatePage(targetPage)}
        />
      </div>
    </Page>
  )
})
