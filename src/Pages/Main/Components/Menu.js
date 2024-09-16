import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Menu.scss";

class Menu extends Component {
  handleLogOut = (clicked) => {
    if (clicked === "로그아웃")
      setTimeout(() => {
        alert("로그아웃 되었습니다..!");
        this.props.history.push("/");
      }, 2000);
    return;
  };

  render() {
    const { menu } = this.props;
    return (
      <li className="Menu" onClick={() => this.handleLogOut(menu)}>
        {this.props.menu}
      </li>
    );
  }
}

export default withRouter(Menu);
