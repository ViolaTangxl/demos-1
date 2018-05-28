import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// 引入animate.css样式
import "animate.css/animate.min.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
    <App />,
    document.getElementById("root"));
registerServiceWorker();
