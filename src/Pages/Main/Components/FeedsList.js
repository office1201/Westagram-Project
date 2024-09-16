import React, { Component } from "react";
import "./FeedsList.scss";

class FeedsList extends Component {
  render() {
    const { url, name } = this.props.data;
    return (
      <li className="FeedsList">
        <div className="FeedLine">
          <img src={url} alt={name} />
        </div>
        <span>{name}</span>
      </li>
    );
  }
}

export default FeedsList;
