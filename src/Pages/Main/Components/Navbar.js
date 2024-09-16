import React, { Component } from "react";
import Icon from "./Icon";
import Menu from "./Menu";
import "./Navbar.scss";

class Navbar extends Component {
  state = {
    isActive: "",
  };

  handleClick = (e) => {
    const { isActive } = this.state;
    !isActive ? this.setState({ isActive: "isActive" }) : this.setState({ isActive: "" });
  };

  render() {
    const { title } = this.props;
    const { isActive } = this.state;
    return (
      <div className="Navbar">
        <h1>{title}</h1>
        <form>
          <input type="text" placeholder="검색" />
          <i className="fas fa-search"></i>
        </form>
        <ul className="Icons">
          {IconsData.map((icon, idx) => (
            <Icon key={idx} url={icon.url} alt={icon.alt} />
          ))}
          <div className="User">
            <img
              onClick={this.handleClick}
              className={isActive}
              src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/164807560_952888125450516_7510156972160703983_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=szlVRQt3y3sAX9z5_h1&edm=AIQHJ4wBAAAA&ccb=7-4&oh=00de4288109e10d98e2df70d327bf827&oe=60C8D155&_nc_sid=7b02f1"
              alt="프로필 메뉴 사진입니다."
            />
            {isActive && (
              <ul className="Menus">
                {MenuData.map((menu, idx) => (
                  <Menu key={idx} menu={menu} />
                ))}
              </ul>
            )}
          </div>
        </ul>
      </div>
    );
  }
}

export default Navbar;

const IconsData = [
  { url: "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png", alt: "탐색 아이콘입니다." },
  { url: "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png", alt: "하트 아이콘입니다." },
  { url: "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png", alt: "마이페이지 아이콘입니다." },
];

const MenuData = ["프로필", "저장됨", "설정", "계정 전환", "로그아웃"];
