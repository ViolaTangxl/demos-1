/**
 * @authors jiayzh
 * @date    2018/03/26
 * @description 主入口模块
 */

import React from 'react'
import { render } from 'react-dom'
import $ from 'jquery'

// 引入React-Router模块
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink } from 'react-router'

// 引入Antd的导航组件
import { Menu, Icon, Switch, Checkbox } from 'antd'
const SubMenu = Menu.SubMenu

// 引入Ant-Design样式 & Animate.CSS样式
import 'animate.css/animate.min.css'
import 'font-awesome/css/font-awesome.min.css'

// 引入主体样式文件
import './main.css'

// 引入单个页面（包括嵌套的子页面）
import MyTable from './components/table/MyTable.js'
import MyForm from './components/form/MyForm.js'
import MyAnimate from './components/animate/MyAnimate.js'
import MyCalendar from './components/calendar/MyCalendar.js'
import MyCard from './components/fetch/MyFetch.js'
import MyWork from './components/work/MyWork.js'

// 配置主页
class mainPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            collapsed: false,
            isMyWrokOpen: false
        }
    }

    componentDidMount() {
        this.getUser()
    }

    /**
     * 展开或隐藏左侧边栏
     */
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
        if (!this.state.collapsed) {
            $('.left-menu').animate({ left: -300 }, 500)
            $('.right-wrap').animate({ width: '100%', left: 0 }, 500)
        } else {
            let screenWidth = document.body.clientWidth
            $('.left-menu').animate({ left: 0 }, 500)
            $('.right-wrap').animate({ width: screenWidth - 300, left: 300 }, 500, null, function () {
                $('.right-wrap').css({ width: 'calc(100% - 300px)' })
            })
        }
    }

    /**
     * 获取用户
     */
    getUser = () => {
        this.setState({
            username: 'jiayzh'
        })
    }

    /**
     * 打开我的作业界面
     */
    openMyWork = () => {
        this.setState({
            isMyWrokOpen: !this.state.isMyWrokOpen
        })
        if (!this.state.isMyWrokOpen) {
            $('.my-work-node').css({ right: 0 }).removeClass('animated slideOutRight').addClass('animated slideInRight')
        }
    }

    /**
     * 改变右侧面板的开关状态
     * @param {} state 
     */
    changeOpenState(state) {
        this.setState({
            isMyWrokOpen: state
        })
    }

    /**
     * 渲染界面
     */
    render() {
        return (
            <div>
                <div className="left-menu">
                    <div className="title back-icon"><Icon type="rollback" />&nbsp;&nbsp;&nbsp;返回我的教室</div>
                    <div className="title">这是标题</div>
                    <Menu theme="dark"
                        style={{ width: '100%' }}
                        defaultOpenKeys={['sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'sub6']}
                        mode="inline"
                    >
                        <SubMenu key="sub1" title={<span>
                            <Icon className="icon" type="check-circle" />
                            课程导读</span>}>
                            <Menu.Item key="1"><Link to="/MyTable"><Icon className="icon" type="file-text" />本章导读</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/MyTable"><Icon className="icon" type="play-circle-o" />第一节：XXXXXX</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/MyTable"><Icon className="icon" type="play-circle-o" />第二节：XXXXXX</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span>第一章：XXXXXX</span>}>
                            <Menu.Item key="4"><Link to="/MyForm"><Icon className="icon" type="file-text" />本章导读</Link></Menu.Item>
                            <Menu.Item key="5"><Link to="/MyForm"><Icon className="icon" type="play-circle-o" />第一节：XXXXXX</Link></Menu.Item>
                            <Menu.Item key="6"><Link to="/MyForm"><Icon className="icon" type="play-circle-o" />第二节：XXXXXX</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title={<span>第二章：XXXXXX</span>}>
                            <Menu.Item key="7"><Link to="/MyCalendar"><Icon className="icon" type="file-text" />本章导读</Link></Menu.Item>
                            <Menu.Item key="8"><Link to="/MyCalendar"><Icon className="icon" type="play-circle-o" />第一节：XXXXXX</Link></Menu.Item>
                            <Menu.Item key="9"><Link to="/MyCalendar"><Icon className="icon" type="play-circle-o" />第二节：XXXXXX</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" title={<span>第三章：XXXXXX</span>}>
                            <Menu.Item key="10"><Link to="/MyAnimate"><Icon className="icon" type="file-text" />本章导读</Link></Menu.Item>
                            <Menu.Item key="11"><Link to="/MyAnimate"><Icon className="icon" type="play-circle-o" />第一节：XXXXXX</Link></Menu.Item>
                            <Menu.Item key="12"><Link to="/MyCard"><Icon className="icon" type="play-circle-o" />第二节：XXXXXX</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub5" disabled="true" title={<span><Icon className="icon" type="lock" />
                            第四章：XXXXXX</span>}>
                        </SubMenu>
                        <SubMenu key="sub6" disabled="true" title={<span><Icon className="icon" type="lock" />
                            第五章：XXXXXX</span>}>
                        </SubMenu>
                    </Menu>
                </div>
                <div className="right-wrap">
                    <div className="right-wrap-title">
                        <div className="collapsed-btn" onClick={this.toggleCollapsed}>{
                            this.state.collapsed ? '> 展开' : '< 收起'
                        }</div>
                        <div className="title-content">本章导读（第1页/共1页）</div>
                        <div className="my-work-btn" onClick={this.openMyWork}><Icon type="edit" />&nbsp;&nbsp;&nbsp;我的作业</div>
                        <Menu className="user-drop-list" mode="horizontal" theme="dark">
                            <SubMenu title={<span><Icon type="user" />{this.state.username}</span>}>
                                <Menu.Item key="setting:1">退出</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>
                    <div className="right-box">
                        {this.props.children}
                    </div>
                    <div className="my-work-node">
                        <MyWork changeOpenState={state => this.changeOpenState(state)} />
                    </div>
                </div>
            </div>
        )
    }
}


// 配置路由
render((
    <Router history={hashHistory} >
        <Route path="/" component={mainPage}>
            <IndexRoute path="MyCard" component={MyCard} />
            <Route path="MyTable" component={MyTable} />
            <Route path="MyForm" component={MyForm} />
            <Route path="MyCalendar" component={MyCalendar} />
            <Route path="MyAnimate" component={MyAnimate} />
            <Route path="MyCard" component={MyCard} />
        </Route>
    </Router>
), document.getElementById('app'))