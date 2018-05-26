import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/oneAction";
import PropTypes from "prop-types";

import "./PageOne.css";
import { Button } from "antd";

const mapStateToProps = (state) => {
    return {
        thisCart: state.oneReducer.cart
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        testClick: () => {
            dispatch(addToCart("Coffee 500gm", 1, 250));
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
        const { thisCart, testClick } = this.props;
        const { store } = this.context;
        return (
            <div className="page-one animated zoomIn">
                {
                    thisCart.map((item, index) => {
                        return (
                            <div key={index}>{"product:" + item.product}</div>
                        )
                    })
                }
                <Button onClick={testClick}>添加</Button>
            </div>
        );
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(PageOne);