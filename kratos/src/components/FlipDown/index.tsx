/**
 * @file component FlipDown
 * @author jiayizhen <jiayizhen@qiniu.com>
 */

import React, { useEffect, useRef } from 'react'
import { observer } from 'mobx-react'
import moment from 'moment'

import Flip from '@pqina/flip'

export default observer(function FlipDown() {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mainRef || !mainRef.current) {
      return
    }

    const towDaysAfter = moment().add(2, 'days').format()
    Flip.DOM.create(mainRef.current, {
      didInit: (tick: any) => {
        const counter = Flip.count.down(towDaysAfter, {
          format: ['d', 'h', 'm', 's'],
          interval: 1000
        })

        counter.onupdate = (value: any) => {
          tick.value = value
        }
      }
    })
  }, [mainRef])

  return (
    <div
      className="tick"
      ref={mainRef}
    >
      <div
        data-repeat="true"
        aria-hidden="true"
      >
        <span data-view="flip"></span>
      </div>
    </div>
  )
})
