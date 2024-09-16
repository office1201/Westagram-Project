import React, { Component } from "react";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div className="HeaderContainer">
          <div className="HeaderWrapper">
            <div className="Logo">
              <img
                src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/158176911_941264666683660_5787569050369574428_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=7W7CgfIcUVwAX-K1Hr5&edm=AHG7ALcBAAAA&ccb=7-4&oh=559588b6c04cbfb45e87a41e65fa3a1e&oe=60CACB9C&_nc_sid=5cbaad"
                alt="nelebuschard"
              />
            </div>
            <div className="Text">
              <span className="TextTitle">nelebuschard</span>
              <span className="TextSubTitle">Nele || 넬레</span>
            </div>
            <button>
              <i className="feed__header__ellipsis-icon fas fa-ellipsis-h"></i>
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
