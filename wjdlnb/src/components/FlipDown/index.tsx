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

export type Props = {
  month: number
  date: number
  className?: string
}

export default observer(function FlipDown({
  month = 1,
  date = 1,
  className
}: Props) {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mainRef || !mainRef.current) {
      return
    }

    const curTime = moment()
    const targetTime = moment().set({ month: month - 1, date }).startOf('day')

    if (curTime.isAfter(targetTime)) {
      targetTime.add(1, 'year')
    }

    Tick.DOM.create(mainRef.current, {
      didInit: (tick: any) => {
        const counter = Tick.count.down(targetTime.format(), {
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
  }, [mainRef, month, date])

  return (
    <div
      className={cls(
        styles.main,
        className
      )}
    >
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

      <div className={styles.footerWrapper}>
        <div className={styles.footerItem}>天</div>
        <div className={styles.footerItem}>小时</div>
        <div className={styles.footerItem}>分</div>
        <div className={styles.footerItem}>秒</div>
      </div>
    </div>
  )
})
