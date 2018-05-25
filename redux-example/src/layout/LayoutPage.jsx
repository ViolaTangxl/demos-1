import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import "./LayoutPage.css";

import PageOne from "../page/PageOne";
import PageTwo from "../page/PageTwo";

import { Layout, Menu, Icon } from "antd";

const { Header, Sider, Content, Footer } = Layout;

class LayoutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            naviItemList: [],
        }
    };
    componentWillMount() {
        const naviItemList = this.createNaviItemList();
        this.setState({
            naviItemList: naviItemList
        });
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };
    render() {
        return (
            <Layout className="app-layout">
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="app-logo">
                        这里是LOGO
                    </div>
                    <Menu theme="dark" mode="inline" selectedKeys={this.getCurrentPath()}>
                        {this.createMenuItem()}
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="app-header">
                        <Icon
                            className="collapse-icon"
                            type={this.state.collapsed ? "right" : "left"}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content className="app-content">
                        <Switch>
                            {this.createRoutes()}
                        </Switch>
                    </Content>
                    <Footer className="app-footer">
                        Reat + Redus Demo @2018 Created By Jiaiyizhen
                    </Footer>
                </Layout>
            </Layout>
        );
    };
    /**
     * 模拟生成导航项
     */
    createNaviItemList() {
        const componentList = [PageOne, PageTwo];
        const naviItemList = [];
        componentList.map((item, index) => {
            return naviItemList.push({
                name: "导航" + (index + 1),
                key: "nav" + (index + 1),
                path: "nav" + (index + 1),
                icon: "bars",
                component: item
            });
        });
        return naviItemList;
    };

    /**
     * 模拟生成菜单项
     */
    createMenuItem = () => {
        return this.state.naviItemList.map((item) => (
            <Menu.Item key={"/" + item.key}>
                <Link to={"/" + item.path}>
                    <Icon type={item.icon} />
                    <span>{item.name}</span>
                </Link>
            </Menu.Item>
        ));
    }

    /**
     * 模拟生成路由
     */
    createRoutes = () => {
        return this.state.naviItemList.map((item) => (
            <Route
                exact path={"/" + item.path}
                key={"/" + item.key}
                component={item.component} />
        ));
    }

    /**
     * 获取当前路径地址
     */
    getCurrentPath = () => {
        return [this.props.location.pathname];
    }
}
export default LayoutPage;