import React, { Component } from "react";

class Comment extends Component {
  render() {
    return (
      <>
        {this.props.commentInput.map((element) => (
          <li>
            <span>
              <strong class="add-comment-list">nakiaathome</strong>
              {element.str}
            </span>
          </li>
        ))}
      </>
    );
  }
}

export default Comment;
