import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

import "./PageOne.css";

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
            <div className="page-one animated zoomIn">This is Page One</div>
        );
    }
}
export default PageOne;