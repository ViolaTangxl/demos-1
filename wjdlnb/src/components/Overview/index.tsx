/**
 * @file component Overview
 * @author jiayizhen <jiayizhen@qiniu.com>
 */

import React from 'react'
import cls from 'classnames'
import { observer } from 'mobx-react'

import Page from 'components/Page'

import IconWJDLNB from './images/icon-wjdlnb.jpg'

import styles from './style.m.less'

export default observer(function Overview() {
  return (
    <Page
      className={styles.main}
      title="概览"
    >
      <div className={styles.info}>
        <img
          className={cls(
            styles.img,
            'animate__animated animate__tada'
          )}
          src={IconWJDLNB}
          title="维军大佬牛逼"
          alt="维军大佬牛逼"
        />

        <h1 className="animate__animated animate__fadeInUp">
          维军大佬（佘维军）
        </h1>
        <p className="animate__animated animate__fadeInUp animate__delay-1s">
          公元 1991 年 5 月 20 日（农历四月初七）生
        </p>
        <p className="animate__animated animate__fadeInUp animate__delay-1s">
          四川人
        </p>
        <p className="animate__animated animate__fadeInUp animate__delay-2s">
          硕士研究生学历
        </p>
        <p className="animate__animated animate__fadeInUp animate__delay-2s">
          毕业于重庆大学计算机学院
        </p>
        <p className="animate__animated animate__fadeInUp animate__delay-3s">
          读研期间曾发表
          <a
            href="http://61.181.120.82:8080/kcms/detail/detail.aspx?filename=JYXH201611001&dbcode=CJFD&dbname=CJFD2016"
            title="《基于改进 LDA 主题模型的产品特征抽取》"
            rel="noopener noreferrer"
            target="_blank"
          >
            《基于改进 LDA 主题模型的产品特征抽取》
          </a>
          及
          <a
            href="http://61.181.120.82:8080/kcms/detail/detail.aspx?filename=JSJY201610024&dbcode=CJFD&dbname=CJFD2016"
            title="《基于用户回复内容观点支持度的评论有用性计算》"
            rel="noopener noreferrer"
            target="_blank"
          >
            《基于用户回复内容观点支持度的评论有用性计算》
          </a>
          等学术著作
        </p>
        <p className="animate__animated animate__fadeInUp animate__delay-4s">
          现任上海七牛信息技术有限公司 CRM 团队研发 Leader，资深研发工程师
        </p>
        <p className="animate__animated animate__fadeInUp animate__delay-4s">
          其名声享誉团队内外，被誉为「老许背后的男人」
        </p>
      </div>
    </Page>
  )
})
