import React, { Component } from "react";
import { connect } from "react-redux";
// import { addToCart } from "../actions/oneAction";
import * as oneAction from "../actions/oneAction";
import PropTypes from "prop-types";

import "./PageOne.css";
import { Button, Spin } from "antd";

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
        count: state.oneReducer.count,
        loading: state.oneReducer.loading
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addOne: () => {
            dispatch(oneAction.loadingChange(true));
            dispatch(oneAction.addOne()).then(() => {
                dispatch(oneAction.loadingChange(false));
            });
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
        const { count, loading, addOne, reduceOne } = this.props;
        // const { store } = this.context;
        return (
            <div className="page-one animated zoomIn">
                <Spin tip="载入中..." spinning={loading}>
                    <div className="num-container">总数：{count}</div>
                    {/* {
                        thisCart.map((item, index) => {
                            return (
                                <div key={index}>{"product:" + item.product}</div>
                            )
                        })
                    } */}
                    <div className="btn-container">
                        <Button type="primary" onClick={addOne}>加一（异步）</Button>
                        <Button type="danger" style={{ left: "10px" }} onClick={reduceOne}>减一（同步）</Button>
                    </div>
                </Spin>
            </div>
        );
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(PageOne);