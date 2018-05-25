/**
 * @authors jiayzh
 * @date    2018/03/26
 * @description 结尾组件
 */

import React from 'react'
import './style.css'

// 结尾组件
export default class myAnimate extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="ani-box">
                <img src="./src/assets/images/image.jpg" width="100" className="animated fadeInUp last-pic" />
                <span className="animated flipInX ege">我的头像</span>
            </div>
        )
    }
}