import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { observer, inject } from "mobx-react";

import "./PageTwo.css";

import { Button } from "antd";

export type PageTwoProps = RouteComponentProps<any> & {
    store: any,
};

@inject("store")
@observer
class PageTwo extends React.Component<PageTwoProps> {
    public constructor(props: PageTwoProps) {
        super(props);
        this.state = {
        };
    }
    public componentWillMount(): void {
    }

    public render(): JSX.Element {
        const { store: { storeTwo } } = this.props;
        return (
            <div className="page-two animated zoomIn">
                <div className="num-container">总数: {storeTwo.number}</div>
                <div className="btn-container">
                    <Button type="primary" onClick={() => {
                        this.addOne();
                    }}>加一</Button>
                    <Button type="danger" style={{ left: "10px" }} onClick={() => {
                        this.reduceOne();
                    }}>减一</Button>
                </div>
            </div>
        );
    }

    private addOne(): void {
        const { store: { storeTwo } } = this.props;
        storeTwo.addOne();
    }

    private reduceOne(): void {
        const { store: { storeTwo } } = this.props;
        storeTwo.reduceOne();
    }
}
export default PageTwo;