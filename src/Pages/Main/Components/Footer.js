import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer className="sidebar__footer">
        <ul className="sidebar__footer__menu">
          {FooterLinkData.map((link) => (
            <li className="sidebar__footer__menu-item">
              <span className="footer__link">{link}</span>
            </li>
          ))}
        </ul>
        <span className="footer__text">© 2021 INSTAGRAM FROM FACEBOOK</span>
      </footer>
    );
  }
}

export default Footer;

const FooterLinkData = ["소개", "도움말", "홍보센터", "API", "채용정보", "개인정보처리방침", "약관"];
