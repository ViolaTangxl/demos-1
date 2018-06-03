import * as React from "react";
import { RouteComponentProps, Switch, Route, Link } from "react-router-dom";

import "./LayoutPage.css";

import PageOne from "../page/PageOne";
import PageTwo from "../page/PageTwo";

import { Layout, Menu, Icon } from "antd";

const { Header, Sider, Content, Footer } = Layout;

export type LayoutPageProps = RouteComponentProps<any>;

export type NaviItem = {
    name: string,
    key: string,
    path: string,
    icon: string,
    component: any,
};

export type LayoutPageState = {
    collapsed: boolean,
    naviItemList: NaviItem[],
};

class LayoutPage extends React.Component<LayoutPageProps, LayoutPageState> {
    public constructor(props: LayoutPageProps) {
        super(props);
        this.getCurrentPath = this.getCurrentPath.bind(this);
        this.toggle = this.toggle.bind(this);
        this.createMenuItem = this.createMenuItem.bind(this);
        this.createRoutes = this.createRoutes.bind(this);
        this.state = {
            collapsed: false,
            naviItemList: [],
        };
    }
    public componentWillMount(): void {
        const naviItemList = this.createNaviItemList();
        this.setState({
            naviItemList: naviItemList,
        });
    }

    /**
     * 左侧面板收起和展开
     */
    private toggle(): void {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    public render(): JSX.Element {
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
                        Reat + Mobx Demo @2018 Created By Jiaiyizhen
                    </Footer>
                </Layout>
            </Layout>
        );
    }
    /**
     * 模拟生成导航项
     */
    private createNaviItemList(): NaviItem[] {
        const componentList = [PageOne, PageTwo];
        const naviItemList: NaviItem[] = [];
        componentList.map((item: any, index: number) => {
            return naviItemList.push({
                name: "导航" + (index + 1),
                key: "nav" + (index + 1),
                path: "nav" + (index + 1),
                icon: "bars",
                component: item,
            });
        });
        return naviItemList;
    }

    /**
     * 模拟生成菜单项
     */
    private createMenuItem(): JSX.Element[] {
        return this.state.naviItemList.map((item: NaviItem) => (
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
    private createRoutes(): JSX.Element[] {
        return this.state.naviItemList.map((item: NaviItem) => (
            <Route
                exact path={"/" + item.path}
                key={"/" + item.key}
                component={item.component} />
        ));
    }

    /**
     * 获取当前路径地址
     */
    private getCurrentPath(): string[] {
        return [this.props.location.pathname];
    }
}
export default LayoutPage;