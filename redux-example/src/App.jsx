import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";

import LayoutPage from "./layout/LayoutPage";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/" component={(props) => {
                    return <LayoutPage {...props} />;
                }} />
            </BrowserRouter>
        );
    }
}
export default App;
