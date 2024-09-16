import React, { Component } from "react";
import FeedsList from "./FeedsList";
import Feed from "./Feed";
import "./Feeds.scss";

class Feeds extends Component {
  render() {
    return (
      <section className="Feeds">
        <article className="FeedsContainer">
          <ul>
            {FeedsData.map((feed, idx) => (
              <FeedsList key={idx} data={feed} />
            ))}
          </ul>
        </article>
        <article className="Feed">
          {FeedsData.map((feed, idx) => (
            <Feed key={idx} data={feed} />
          ))}
        </article>
      </section>
    );
  }
}

export default Feeds;

const FeedsData = [
  {
    url:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/47581322_331313240788424_7580673034705436672_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=pFaHBT1kkVoAX_Rzovw&edm=ABfd0MgBAAAA&ccb=7-4&oh=98a1f5ab7d36d03a320ea86ab198db51&oe=60C9B8C6&_nc_sid=7bff83",
    name: "han_ye_seul_",
  },
  {
    url:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/95898509_528325404737365_8466554780179759104_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=oJvRP-1yTDAAX_MK_QQ&edm=ANg5bX4BAAAA&ccb=7-4&oh=9832e096c87e4c47a6e354e1428c60f2&oe=60C97D47&_nc_sid=55937d",
    name: "haejun_kim_",
  },
  {
    url:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/165624425_157218146270973_7029745587477918295_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=2xeipBl_RV0AX9Dwrui&edm=AHG7ALcBAAAA&ccb=7-4&oh=8ad81b5b62913ebee034d46ee92c46e4&oe=60C97065&_nc_sid=5cbaad",
    name: "yj_loves",
  },
  {
    url:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/158176911_941264666683660_5787569050369574428_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=7W7CgfIcUVwAX-K1Hr5&edm=AHG7ALcBAAAA&ccb=7-4&oh=559588b6c04cbfb45e87a41e65fa3a1e&oe=60CACB9C&_nc_sid=5cbaad",
    name: "nelebuschard",
  },
  {
    url:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/180798174_210412550619266_266447314227580444_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=6FDiu-S_iAIAX_p99CB&edm=AHG7ALcBAAAA&ccb=7-4&oh=22a8e0e05232cc9ef33e5f06f3d46a03&oe=60C93613&_nc_sid=5cbaad",
    name: "jeeyou___",
  },
  {
    url:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/162919460_462524861847257_5258550243561512139_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=Wcje2hv1sZUAX8oFlJm&edm=AHG7ALcBAAAA&ccb=7-4&oh=17c7c01ef2df8525aebed2706276d9e0&oe=60C96338&_nc_sid=5cbaad",
    name: "itssweetrain",
  },
  {
    url:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/106555016_897543590727195_4848380808049075653_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=3FeHea1DPN8AX_Ifk8w&edm=AHG7ALcBAAAA&ccb=7-4&oh=d133083bf10b026a77285e91be751240&oe=60CB8CA9&_nc_sid=5cbaad",
    name: "blackrock",
  },
];
