import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

import "./PageTwo.css";

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
            <div className="page-two animated zoomIn">This is Page Two</div>
        );
    }
}
export default PageTwo;