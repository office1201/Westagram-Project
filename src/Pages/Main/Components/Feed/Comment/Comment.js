import React, { Component } from "react";
import "./Comment.scss";

class Comment extends Component {
  state = {
    comment: "",
    commentArr: [],
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ comment: value });
  };

  handleKeyUp = (e) => {
    if (e.key === "Enter") return this.addComment();
    if (e.key === "Backspace" || this.state.comment.length === 0) return;
  };

  addComment = () => {
    const comment = this.state.comment;
    this.setState({
      commentArr: this.state.commentArr.concat(comment),
      comment: "",
    });
  };

  render() {
    const { commentArr } = this.state;
    return (
      <article className="FeedComment">
        <div className="FeedCommentContainer">
          <CommentList />
          <ul className="addComment">
            <li>
              <span>{commentArr}</span>
            </li>
          </ul>
          <span className="Ago">3일 전</span>
          <div className="Chat">
            <input type="text" placeholder="댓글 달기..." onChange={this.handleChange} onKeyUp={this.handleKeyUp} />
            <button onClick={this.addComment}>게시</button>
            <div className="ChatLine"></div>
          </div>
        </div>
      </article>
    );
  }
}

export default Comment;

const CommentList = () => (
  <>
    <span>
      <strong>harrydKim</strong>님 <strong>외 80명</strong>이 좋아합니다
    </span>
    <span>
      <strong>nelebuschard</strong> My favorite sky is spring sky ☁️☀️💙
    </span>
    <span>#fashion#ootd#daily#독일여자#유럽여자#위국인여자#얼스타그램#일상#대학생#98년생 </span>
    <span>댓글 10개 모두 보기</span>
    <span>
      <strong>myoun__da</strong> 너무 예뻐요
    </span>
  </>
);
