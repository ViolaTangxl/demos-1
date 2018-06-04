import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

import "./PageOne.css";

import { Button, Spin } from "antd";

export type PageOneProps = RouteComponentProps<any>;

class PageOne extends React.Component<PageOneProps> {
    public constructor(props: PageOneProps) {
        super(props);
        this.state = {
        };
    }
    public componentWillMount(): void {
    }

    public render(): JSX.Element {
        return (
            <div className="page-one animated zoomIn">
                <Spin tip="载入中..." spinning={false}>
                    <div className="num-container">总数: 0</div>
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
        console.log("add one.");
    }

    private reduceOne(): void {
        console.log("reduce one.");
    }
}
export default PageOne;