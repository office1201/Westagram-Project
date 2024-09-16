import React, { Component } from "react";
import "./Icon.scss";

class Icon extends Component {
  render() {
    const { url, alt } = this.props;
    return (
      <li className="Icon">
        <img src={`${url}`} alt={`${alt}`} />
      </li>
    );
  }
}

export default Icon;
