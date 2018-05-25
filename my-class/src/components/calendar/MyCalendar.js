/**
 * @authors jiayzh
 * @date    2018/03/26
 * @description 日历组件
 */

import React from 'react'
import { Calendar } from 'antd'

// 日历组件
export default class myCalendar extends React.Component {
    dateCellRender = (value) => {
        return <div>自定义日数据 {value.getDayOfMonth()}</div>
    }

    monthCellRender = (value) => {
        return <div>自定义月数据 {value.getMonth()}</div>
    }

    render() {
        return (
            <Calendar defaultValue={new Date('2018-03-27')}
                dateCellRender={this.dateCellRender} monthCellRender={this.monthCellRender} />
        )
    }
}