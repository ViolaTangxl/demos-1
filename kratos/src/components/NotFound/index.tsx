/**
 * @file 404 page
 * @author jiayizhen <jiayizhen@qiniu.com>
 */

import React from 'react'

import Page from 'components/Page'

import ImgNotFound from './images/img-not-found.svg'

import styles from './style.m.less'

export default function NotFound() {
  return (
    <Page
      className={styles.main}
      title="404"
    >
      <div className={styles.container}>
        <img
          className={styles.img}
          src={ImgNotFound}
          title="页面不存在"
          alt="页面不存在"
        />
        <h1 className={styles.title}>
          页面不存在
        </h1>
        <p className={styles.desc}>
          代码君搭乘 404 航班去寻找诗和远方了~
        </p>
      </div>
    </Page>
  )
}
