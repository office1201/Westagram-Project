import React, { Component } from "react";

class MainPageLayout extends Component {
  render() {
    return <div className="Main">{this.props.children}</div>;
  }
}

export default MainPageLayout;
