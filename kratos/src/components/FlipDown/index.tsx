/**
 * @file component FlipDown
 * @author jiayizhen <jiayizhen@qiniu.com>
 */

import React, { useEffect, useRef } from 'react'
import { observer } from 'mobx-react'
import cls from 'classnames'
import moment from 'moment'

import Tick from '@pqina/flip'

import styles from './style.m.less'

export default observer(function FlipDown() {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mainRef || !mainRef.current) {
      return
    }

    const towDaysAfter = moment().add(2, 'days').format()
    Tick.DOM.create(mainRef.current, {
      didInit: (tick: any) => {
        const counter = Tick.count.down(towDaysAfter, {
          format: ['d', 'h', 'm', 's'],
          interval: 1000
        })

        counter.onupdate = (value: any) => {
          tick.value = value
        }
      }
    })

    const current = mainRef.current

    return () => Tick.DOM.destroy(current)
  }, [mainRef])

  return (
    <div className={styles.main}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerItem}>天</div>
        <div className={styles.headerItem}>小时</div>
        <div className={styles.headerItem}>分</div>
        <div className={styles.headerItem}>秒</div>
      </div>

      <div
        className={cls(
          styles.tickWrapper,
          'tick'
        )}
        ref={mainRef}
      >
        <div
          data-repeat="true"
          aria-hidden="true"
        >
          <span data-view="flip"></span>
        </div>
      </div>
    </div>
  )
})
