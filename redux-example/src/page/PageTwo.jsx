import React, { Component } from "react";
import { connect } from "react-redux";

import * as twoAction from "../actions/twoAction";
import PropTypes from "prop-types";

import "./PageTwo.css";
import { Button, Spin } from "antd";

const mapStateToProps = (state) => {
  return {
    count: state.twoReducer.count,
    loading: state.twoReducer.loading
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addOne: () => {
      dispatch(twoAction.loadingChange(true));
      const timeOut = setTimeout(() => {
        dispatch(twoAction.addOne());
        dispatch(twoAction.loadingChange(false));
        clearTimeout(timeOut);
      }, 1000);
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
    const { count, loading, addOne, reduceOne } = this.props;
    return (
      <div className="page-two animated zoomIn">
        <Spin tip="载入中..." spinning={loading}>
          <div className="num-container">总数：{count}</div>
          <div className="btn-container">
            <Button type="primary" onClick={addOne}>加一（一秒后）</Button>
            <Button type="danger" style={{ left: "10px" }} onClick={reduceOne}>减一（同步）</Button>
          </div>
        </Spin>
      </div>
    );
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PageTwo);