import React, { Component } from "react";
import Comment from "./Comment/Comment";
import FeedMenu from "./FeedMenu/FeedMenu";
import "./Content.scss";

class Content extends Component {
  render() {
    return (
      <>
        <FeedMenu />
        <Comment />
      </>
    );
  }
}

export default Content;
