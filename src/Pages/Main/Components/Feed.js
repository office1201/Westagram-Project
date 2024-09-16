import React, { Component } from "react";
import "./Feed.scss";
import Header from "./Feed/Header";
import Img from "./Feed/Img";
import Content from "./Feed/Content";

class Feed extends Component {
  render() {
    return (
      <div className="FeedContainer">
        <Header />
        <Img />
        <Content />
      </div>
    );
  }
}

export default Feed;
