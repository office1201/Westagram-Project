import React, { Component } from "react";
import "./Friend.scss";

class Friend extends Component {
  render() {
    const { name, url, des } = this.props.data;
    return (
      <li class="Friend">
        <div>
          <div>
            <img src={`${url}`} alt="" />
          </div>
          <div class="FriendText">
            <span>
              <strong>{name}</strong>
            </span>
            <br />
            <span className="FriendDes">{des}</span>
          </div>
        </div>
        <span>팔로우</span>
      </li>
    );
  }
}

export default Friend;
