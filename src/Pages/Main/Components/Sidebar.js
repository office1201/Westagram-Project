import React, { Component } from "react";
import Footer from "./Footer";
import Friend from "./Friend";
import MyTab from "./MyTab";
import "./Sidebar.scss";

class Sidebar extends Component {
  render() {
    return (
      <section className="Sidebar">
        <div className="SidebarContainer">
          <div className="SidebarWrapper">
            {MyTabData.map((data) => (
              <MyTab data={data} />
            ))}
            <div className="Friends">
              <div className="FriendsText">
                <strong>회원님을 위한 추천</strong>
              </div>
              <ul>
                {SidebarData.map((friend, idx) => (
                  <Friend key={idx} data={friend} />
                ))}
              </ul>
            </div>
            <Footer />
          </div>
        </div>
      </section>
    );
  }
}

export default Sidebar;

const MyTabData = [
  {
    name: "nakiaathome",
    url:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/164807560_952888125450516_7510156972160703983_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=szlVRQt3y3sAX9z5_h1&edm=AIQHJ4wBAAAA&ccb=7-4&oh=00de4288109e10d98e2df70d327bf827&oe=60C8D155&_nc_sid=7b02f1",
    alt: "내 프로필 사진입니다.",
    nickname: "태현",
    follow: "전환",
  },
];

const SidebarData = [
  {
    name: "harrykane",
    url:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/119070227_253327752502309_6511477056196546460_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=-PgpAVDjSy4AX8px72r&edm=ABfd0MgBAAAA&ccb=7-4&oh=536c9baa5762bb969183fd728454f68b&oe=60C8EF32&_nc_sid=7bff83",
    des: "인기",
  },
  {
    name: "kyliejenner",
    url:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/176018991_452915632660151_2452110499084252327_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=bMPkLbrP0_wAX9T8BR4&edm=ABfd0MgBAAAA&ccb=7-4&oh=3000ed88c5b906e574ffb825f81fa415&oe=60CA5786&_nc_sid=7bff83",
    des: "인기",
  },
  {
    name: "brunomars",
    url:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/65302424_346059889400191_5999870605850050560_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=Obhxu-GPgVAAX9ub-u9&edm=ABfd0MgBAAAA&ccb=7-4&oh=15aac670cdad78b76c74edce9856e012&oe=60C86A2C&_nc_sid=7bff83",
    des: "회원님을 위한 추천",
  },
  {
    name: "fairy___g2",
    url:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/180854813_514917376204495_8241282884640715047_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=q3id-9wJQ_MAX__SL4V&edm=ABfd0MgBAAAA&ccb=7-4&oh=d3c30e863d4b021c8246951d870ae055&oe=60CB95DB&_nc_sid=7bff83",
    des: "회원님을 위한 추천",
  },
  {
    name: "canon_mj",
    url:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/66802565_354441191910711_5735933316343791616_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=V727mSkKilkAX98jCRp&edm=ABfd0MgBAAAA&ccb=7-4&oh=5ca4c503e5859100d96216280fff183f&oe=60C93314&_nc_sid=7bff83",
    des: "회원님을 팔로우합니다",
  },
  {
    name: "2nyang",
    url:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/168687505_1151366418644193_3169814356183991403_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=UrgbbNYnKogAX9pw12P&tn=wCy_b7ge7QLLINoL&edm=ABfd0MgBAAAA&ccb=7-4&oh=893a4c79031cb32bc8cc29cc8417e334&oe=60CB0556&_nc_sid=7bff83",
    des: "회원님을 팔로우합니다",
  },
];
