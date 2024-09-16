import React, { Component } from "react";
import "./MyTab.scss";

class MyTab extends Component {
  render() {
    const { name, url, alt, nickname, follow } = this.props.data;
    return (
      <article className="MyTab">
        <div className="MyTabLogo">
          <img src={`${url}`} alt={`${alt}`} />
          <div>
            <span>
              <strong>{name}</strong>
            </span>
            <br />
            <span className="MyName">{nickname}</span>
          </div>
        </div>
        <button className="Follow">{follow}</button>
      </article>
    );
  }
}

export default MyTab;
