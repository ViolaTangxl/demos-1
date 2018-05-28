import React, { Component } from "react";
import { connect } from "react-redux";
// import { addToCart } from "../actions/oneAction";
import * as oneAction from "../actions/oneAction";
import PropTypes from "prop-types";

import "./PageOne.css";
import { Button } from "antd";

// const mapStateToProps = (state) => {
//     return {
//         thisCart: state.oneReducer.cart
//     };
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         testClick: () => {
//             dispatch(addToCart("Coffee 500gm", 1, 250));
//         }
//     };
// }

const mapStateToProps = (state) => {
    return {
        count: state.oneReducer.count
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addOne: () => {
            dispatch(oneAction.addOne());
        },
        reduceOne: () => {
            dispatch(oneAction.reduceOne());
        }
    };
}

class PageOne extends Component {
    static contextTypes = {
        store: PropTypes.object,
    };
    constructor(props, context) {
        super(props, context);
        this.state = {

        };
    }
    render() {
        const { count, addOne, reduceOne } = this.props;
        // const { store } = this.context;
        return (
            <div className="page-one animated zoomIn">
                <div>总数：{count}</div>
                {/* {
                    thisCart.map((item, index) => {
                        return (
                            <div key={index}>{"product:" + item.product}</div>
                        )
                    })
                } */}
                <Button type="primary" onClick={addOne}>加一</Button>
                <Button type="danger" onClick={reduceOne}>减一</Button>
            </div>
        );
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(PageOne);