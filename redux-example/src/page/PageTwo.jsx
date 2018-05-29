import React, { Component } from "react";
import { connect } from "react-redux";

import * as twoAction from "../actions/twoAction";
import PropTypes from "prop-types";

import "./PageTwo.css";
import { Button } from "antd";

const mapStateToProps = (state) => {
    return {
        count: state.twoReducer.count
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addOne: () => {
            dispatch(twoAction.addOne());
        },
        reduceOne: () => {
            dispatch(twoAction.reduceOne());
        }
    };
}

class PageTwo extends Component {
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
        return (
            <div className="page-two animated zoomIn">
                <div className="num-container">总数：{count}</div>
                <div className="btn-container">
                    <Button type="primary" onClick={addOne}>加一（同步）</Button>
                    <Button type="danger" style={{ left: "10px" }} onClick={reduceOne}>减一（同步）</Button>
                </div>
            </div>
        );
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(PageTwo);