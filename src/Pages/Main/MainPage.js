import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import MainPageLayout from "./Components/MainPageLayout";
import Feeds from "./Components/Feeds";
import Sidebar from "./Components/Sidebar";
import "../../Styles/reset.scss";
import "../../Styles/common.scss";
import "./MainPage.scss";

class MainPage extends Component {
  render() {
    return (
      <>
        <Navbar title="Westagram" />
        <MainPageLayout>
          <Feeds />
          <Sidebar />
        </MainPageLayout>
      </>
    );
  }
}

export default MainPage;
