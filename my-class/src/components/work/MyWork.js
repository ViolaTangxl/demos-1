/**
 * @authors jiayzh
 * @date    2018/03/26
 * @description 我的作业
 */

import React from 'react'
import $ from 'jquery'
import { Icon } from 'antd'
import './style.css'

// 我的作业组件
export default class MyWork extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    closeMyWork = () => {
        this.props.changeOpenState(false)
        $('.my-work-node').removeClass('animated slideInRight').addClass('animated slideOutRight')
    }
    render() {
        return (
            <div className="my-work">
                <div className="title" onClick={this.closeMyWork}>
                    <Icon type="edit" />&nbsp;&nbsp;我的作业（2/6）&nbsp;>
        </div>
                <div className="content">
                    <div className="content-item">
                        <h2 className="item-title">第二章：XXXXX</h2>
                        <div className="item-content">
                            <Icon className="active-icon" type="check-circle" />&nbsp;&nbsp;&nbsp;XXXXX
            </div>
                    </div>
                    <div className="content-item">
                        <h2 className="item-title">第三章：XXXXX</h2>
                        <div className="item-content">
                            <Icon className="invisible-icon" type="check-circle" />&nbsp;&nbsp;&nbsp;XXXXX
            </div>
                    </div>
                    <div className="content-item">
                        <h2 className="item-title">第四章：XXXXX</h2>
                        <div className="item-content">
                            <Icon type="lock" />&nbsp;&nbsp;&nbsp;XXXXX
            </div>
                    </div>
                    <div className="content-item">
                        <h2 className="item-title">第五章：XXXXX</h2>
                        <div className="item-content">
                            <Icon type="lock" />&nbsp;&nbsp;&nbsp;XXXXX
            </div>
                    </div>
                    <div className="content-item">
                        <h2 className="item-title">第六章：XXXXX</h2>
                        <div className="item-content">
                            <Icon type="lock" />&nbsp;&nbsp;&nbsp;XXXXX
            </div>
                    </div>
                </div>
            </div>
        )
    }
}