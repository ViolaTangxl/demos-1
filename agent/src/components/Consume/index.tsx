/**
 * @file: component Consume
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

import LocalStore from './store'

import styles from './style.m.less'

const MONTH_FORMAT_LAYOUT = 'YYYY-MM'

const COLUMNS = [{
  title: '客户名称',
  dataIndex: 'name',
  key: 'name'
}, {
  title: '客户邮箱',
  dataIndex: 'email',
  key: 'email'
}, {
  title: '月份',
  dataIndex: 'month',
  key: 'month',
  render: (v: number) => moment(v).format(MONTH_FORMAT_LAYOUT)
}, {
  title: '消费（元）',
  dataIndex: 'money',
  key: 'money',
  render: (v: number) => asYuan(v)
}]

export default observer(function Consume() {
  const store = useLocalStore(LocalStore)

  const {
    isLoading,
    tableData,
    total, page, pageSize, updatePage, updatePageSize
  } = store

  return (
    <Page
      className={styles.content}
      title="消费历史"
    >
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
