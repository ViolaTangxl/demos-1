import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
// 引入Provider
import { Provider } from 'react-redux';
// 引入store
import store from "./store/index";

import LayoutPage from "./layout/LayoutPage";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Route path="/" component={(props) => {
                        return <LayoutPage {...props} />;
                    }} />
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;


