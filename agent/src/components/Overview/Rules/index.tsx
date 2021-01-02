/**
 * @file: component Overview Rules
 * @author: jiayizhen <jiayizhen@qiniu.com>
 */

import React from 'react'
import { observer } from 'mobx-react'

import styles from './style.m.less'

export default observer(function Rules() {
  return (
    <>
      <div className={styles.title}>奖励规则</div>

      <table
        className={styles.table}
        cellPadding="0"
        cellSpacing="0"
      >
        <thead>
          <tr>
            <th>奖励类型</th>
            <th>目标</th>
            <th>奖励</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>月度奖励</td>
            <td>每个月合作伙伴引入充值金 ≥20,000 元</td>
            <td>月度返佣 15%</td>
          </tr>

          <tr>
            <td>季度奖励</td>
            <td>每个季度合作伙伴引入充值金 ≥200,000 元</td>
            <td>季度返佣 10%</td>
          </tr>

          <tr>
            <td className={styles.verticalTop}>
              年度奖励
            </td>
            <td>在合同到期后（至少一年）所有名下客户所产生的订单消费达成签订合同时的目标任务，即可获得年度奖励</td>
            <td className={styles.verticalTop}>
              按照与渠道经理谈定的年度任务来定
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
})
