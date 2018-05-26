import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// 引入animate.css样式
import "animate.css/animate.min.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";


// 测试
// console.log("initial state: ", store.getState());

// let unsubscribe = store.subscribe(() =>
//     console.log(store.getState())
// );

// store.dispatch(addToCart("Coffee 500gm", 1, 250));
// store.dispatch(addToCart("Flour 1kg", 2, 110));
// store.dispatch(addToCart("Juice 2L", 1, 250));

// store.dispatch(updateCart("Flour 1kg", 5, 110));

// store.dispatch(deleteFromCart("Coffee 500gm"));

// unsubscribe();

ReactDOM.render(
    <App />,
    document.getElementById("root"));
registerServiceWorker();
