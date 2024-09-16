import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Comment from "./Comment";
import "./Main.scss";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      comment: "",
      commentArr: [{ str: "" }],
      isActiveBtn: false,
    };
  }

  //   <input
  //   onChange={this.handleChange}
  //   onKeyUp={this.clickBtn}
  //   onKeyDown={this.checkComment}
  //   type="text"
  //   class="feed__content__chat-input"
  //   placeholder="댓글 달기..."
  // />
  // <button
  //   onClick={this.addComment}
  //   className={this.state.isActiveBtn ? "feed__content__chat-button" : "feed__content__chat-button-change-btn"}
  // >

  handleChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  addComment = () => {
    const comment = { str: this.state.comment };
    this.setState({
      commentArr: this.state.commentArr.concat(comment),
      comment: "",
    });
  };

  clickBtn = (e) => {
    if (e.key === "Backspace" || this.state.comment.length === 0) {
      return;
    } else if (e.key === "Enter") {
      this.addComment();
    }
  };

  checkComment = () => {
    this.state.comment.length > 0 ? this.setState({ isActiveBtn: true }) : this.setState({ isActiveBtn: false });
  };
  render() {
    return (
      <>
        <nav id="navbar">
          <div class="navbar__container">
            <div class="navbar__wrapper">
              <span class="navbar__title">Westagram</span>
              <form class="navbar__search">
                <input class="navbar__search__input" type="text" />
                <i class="navbar__search__icon fas fa-search"></i>
                <span class="navbar__search__text">검색</span>
              </form>
              <ul class="navbar__menu">
                <li class="navbar__menu__item">
                  <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" alt="탐색 아이콘 입니다." />
                </li>
                <li class="navbar__menu__item">
                  <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="하트 아이콘입니다." />
                </li>
                <li class="navbar__menu__item">
                  <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" alt="마이페이지 아이콘입니다." />
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main id="main">
          <div class="main__container">
            <div class="main__wrapper">
              <section id="feeds">
                <article class="feeds__container">
                  <div class="feeds__wrapper">
                    <ul class="feeds__list">
                      <li class="feeds__list__item">
                        <div class="feeds__list__item-border-active">
                          <img
                            class="feeds__list__item-img"
                            src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/95898509_528325404737365_8466554780179759104_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=ecMCg5FJqyYAX-xlDym&ccb=7-4&oh=c210e334bc7e6e4c7c9df8549a9257e1&oe=60896AC7&_nc_sid=48a2a6"
                          />
                        </div>
                        <span class="feeds__list__item-text-active">haejun_kim</span>
                      </li>
                      <li class="feeds__list__item">
                        <div class="feeds__list__item-border-active">
                          <img
                            class="feeds__list__item-img"
                            src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/47581322_331313240788424_7580673034705436672_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=siebsZtcCf4AX-P5ljv&ccb=7-4&oh=b8ea9f43f5d40bc18b08e4d107123c18&oe=608A6036&_nc_sid=48a2a6"
                          />
                        </div>
                        <span class="feeds__list__item-text">han_ye_seul_</span>
                      </li>
                      <li class="feeds__list__item">
                        <div class="feeds__list__item-border">
                          <img
                            class="feeds__list__item-img"
                            src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/95382934_253563445794897_5565488101842747392_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=PbMxG28z9oAAX9EETKe&ccb=7-4&oh=1fa154c9f1976c091c7b941d6962e7db&oe=6089DE8E&_nc_sid=276363"
                          />
                        </div>
                        <span class="feeds__list__item-text">for10_in</span>
                      </li>
                      <li class="feeds__list__item">
                        <div class="feeds__list__item-border-active">
                          <img
                            class="feeds__list__item-img"
                            src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/13381296_1775871565982833_979887760_a.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=1oNhrNugUV0AX_DPYSu&ccb=7-4&oh=9016d48f87dc53ddd320f71988c2c612&oe=6088AEA0&_nc_sid=7bff83"
                          />
                        </div>
                        <span class="feeds__list__item-text">ryu_focus</span>
                      </li>
                      <li class="feeds__list__item">
                        <div class="feeds__list__item-border-active">
                          <img
                            class="feeds__list__item-img"
                            src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/68654150_388821821824230_6510542380553207808_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=Cnry9Lsr2BYAX9AmurX&ccb=7-4&oh=cb2dbed8ddc0f026443adc187809c746&oe=60887B1D&_nc_sid=7bff83"
                          />
                        </div>
                        <span class="feeds__list__item-text">parkssun</span>
                      </li>
                      <li class="feeds__list__item">
                        <div class="feeds__list__item-border">
                          <img
                            class="feeds__list__item-img"
                            src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/135264055_755955731772974_7670810148149419680_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=_5Pvq5Tx6XsAX83wRuQ&ccb=7-4&oh=4a2d7e79ee6b83c9335c123373228be6&oe=6088972E&_nc_sid=7bff83"
                          />
                        </div>
                        <span class="feeds__list__item-text">heodak81</span>
                      </li>
                      <li class="feeds__list__item">
                        <div class="feeds__list__item-border-active">
                          <img
                            class="feeds__list__item-img"
                            src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/131898777_2805821883039596_3219330807167296502_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=sLH0l4zvH_EAX8h_z8h&ccb=7-4&oh=28f83f1f1ca550b855e8d2a62ef2f74e&oe=6089214E&_nc_sid=7bff83"
                          />
                        </div>
                        <span class="feeds__list__item-text">pkalbum</span>
                      </li>
                      <li class="feeds__list__item">
                        <div class="feeds__list__item-border">
                          <img
                            class="feeds__list__item-img"
                            src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/149732392_846911982556510_6697391372424355186_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=csoOAh5Z-GYAX9uruIS&ccb=7-4&oh=54ec160ba20735d226bbb9c81385d395&oe=608AAEDD&_nc_sid=7bff83"
                          />
                        </div>
                        <span class="feeds__list__item-text">minse0_96</span>
                      </li>
                    </ul>
                  </div>
                </article>
                <article class="feed__container">
                  <div class="feed__wrapper">
                    <header class="feed__header">
                      <div class="feed__header__container">
                        <div class="feed__header__wrapper">
                          <div class="feed__header__logo">
                            <img
                              class="feed__header__logo-img"
                              src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/158176911_941264666683660_5787569050369574428_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=G3VAzXPmOHoAX8o_8OO&ccb=7-4&oh=269f355c5ed4f4e513d4bd0b80302756&oe=608A1B24&_nc_sid=7bff83"
                              alt="nelebuschard"
                            />
                          </div>
                          <div class="feed__header__text">
                            <a href="#">
                              <span class="feed__header__text-title">nelebuschard</span>
                            </a>
                            <a href="#">
                              <span class="feed__header__text-subtitle">Nele || 넬레</span>
                            </a>
                          </div>
                          <button class="feed__header__ellipsis">
                            <i class="feed__header__ellipsis-icon fas fa-ellipsis-h"></i>
                          </button>
                        </div>
                      </div>
                    </header>
                    <img
                      class="feed__img"
                      src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/163551120_1204210813369375_7695781743787339868_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=wSSg7Eyokh8AX85TnM7&ccb=7-4&oh=5268a1531c23481c3e303fde35ada070&oe=608A44AE&_nc_sid=4f375e"
                      alt="피드 이미지입니다."
                    />
                    <div class="feed__menu">
                      <div class="feed__menu__container">
                        <div class="feed__menu__wrapper">
                          <ul class="feed__menu__list">
                            <li class="feed__menu__list-item">
                              <svg aria-label="좋아요 버튼" class="like-btn" fill="#ed4956" height="24" viewBox="0 0 48 48" width="24">
                                <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                              </svg>
                            </li>
                            <li class="feed__menu__list-item">
                              <svg aria-label="댓글" class="_8-yf5" fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                                <path
                                  clip-rule="evenodd"
                                  d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                                  fill-rule="evenodd"
                                ></path>
                              </svg>
                            </li>
                            <li class="feed__menu__list-item">
                              <svg aria-label="게시물 공유" class="_8-yf5" fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                                <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                              </svg>
                            </li>
                          </ul>
                          <button class="feed__menu__ellipsis">
                            <i class="feed__menu__ellipsis-icon fas fa-ellipsis-h"></i>
                          </button>
                          <div class="feed__menu__bookmark">
                            <svg aria-label="북마크" class="icon-storage" fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                              <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="feed__content">
                      <div class="feed__content-comment">
                        <span>
                          <strong>harrydKim</strong>님 <strong>외 80명</strong>이 좋아합니다
                        </span>
                        <span>
                          <strong>nelebuschard</strong> My favorite sky is spring sky ☁️☀️💙
                        </span>
                        <a href="#">
                          <span>#fashion#ootd#daily#독일여자#유럽여자#위국인여자#얼스타그램#일상#대학생#98년생 </span>
                        </a>
                        <span>댓글 10개 모두 보기</span>
                        <span>
                          <strong>myoun__da</strong> 너무 예뻐요
                        </span>
                        <ul class="add-comment">
                          <li class="add-comment-lists">
                            <span>
                              <strong class="add-comment-list">lin_dk2</strong>😍😍😍
                            </span>
                            <Comment commentInput={this.state.commentArr} />
                            <span class="add-comment-list-active"></span>
                          </li>
                        </ul>
                        <span class="feed__content-comment-ago">3일 전</span>
                        <div class="feed__content__chat">
                          <input
                            onChange={this.handleCommentInput}
                            onKeyUp={this.clickBtn}
                            onKeyDown={this.checkComment}
                            type="text"
                            class="feed__content__chat-input"
                            placeholder="댓글 달기..."
                          />
                          <button
                            onClick={this.addCommentList}
                            className={this.state.isActiveBtn ? "feed__content__chat-button" : "feed__content__chat-button-change-btn"}
                          >
                            게시
                          </button>
                          <div class="feed__content__chat__line"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </section>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default withRouter(Main);
