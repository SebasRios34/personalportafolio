import React from "react";

import HomeHeader from "./Header/home-header.component";
import Profile from "./Profile/profile.component";
import HomeFooter from "./Footer/home-footer.component";

import "./home.styles.scss";

function Home() {
  return (
    <div className="home-container">
      <HomeHeader />
      <Profile />
      <HomeFooter />
    </div>
  );
}

export default Home;
