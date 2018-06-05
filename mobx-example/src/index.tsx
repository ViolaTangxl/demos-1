import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
// 引入animate.css样式
import "animate.css/animate.min.css";
import registerServiceWorker from "./registerServiceWorker";


ReactDOM.render(
    <App />,
    document.getElementById("root") as HTMLElement,
);
registerServiceWorker();