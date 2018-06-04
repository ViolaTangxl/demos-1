import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

import "./PageTwo.css";

import { Button } from "antd";

export type PageTwoProps = RouteComponentProps<any>;

class PageTwo extends React.Component<PageTwoProps> {
    public constructor(props: PageTwoProps) {
        super(props);
        this.state = {
        };
    }
    public componentWillMount(): void {
    }

    public render(): JSX.Element {
        return (
            <div className="page-two animated zoomIn">
                <div className="num-container">总数: 0</div>
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
        console.log("add one.");
    }

    private reduceOne(): void {
        console.log("reduce one.");
    }
}
export default PageTwo;