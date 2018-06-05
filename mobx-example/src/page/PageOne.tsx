import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { observer, inject } from "mobx-react";

import "./PageOne.css";

import { Button, Spin } from "antd";

export type PageOneProps = RouteComponentProps<any> & {
    store: any,
};

@inject("store")
@observer
class PageOne extends React.Component<PageOneProps> {
    public constructor(props: PageOneProps) {
        super(props);
        this.state = {
        };
    }
    public componentWillMount(): void {
    }

    public render(): JSX.Element {
        const { store: { storeOne } } = this.props;
        return (
            <div className="page-one animated zoomIn">
                <Spin tip="载入中..." spinning={false}>
                    <div className="num-container">总数: {storeOne.number}</div>
                    <div className="btn-container">
                        <Button type="primary" onClick={() => {
                            this.addOne();
                        }}>加一</Button>
                        <Button type="danger" style={{ left: "10px" }} onClick={() => {
                            this.reduceOne();
                        }}>减一</Button>
                    </div>
                </Spin>
            </div>
        );
    }

    private addOne(): void {
        const { store: { storeOne } } = this.props;
        storeOne.addOne();
    }

    private reduceOne(): void {
        const { store: { storeOne } } = this.props;
        storeOne.reduceOne();
    }
}
export default PageOne;