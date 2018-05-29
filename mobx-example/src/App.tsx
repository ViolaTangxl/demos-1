import * as React from "react";
import { RouteComponentProps, Route, BrowserRouter } from "react-router-dom";

import LayoutPage from "./layout/LayoutPage";

class App extends React.Component {
    public render(): JSX.Element {
        return (
            <BrowserRouter>
                <Route path="/" component={(props: RouteComponentProps<any>) => {
                    return <LayoutPage {...props} />;
                }} />
            </BrowserRouter>
        );
    }
}

export default App;
