import React from "react";

import "./home-footer.styles.scss";

function HomeFooter() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img
          src={require("../../../assets/Home/shape-bg.png")}
          alt="No internet connection"
        />
      </div>
    </div>
  );
}

export default HomeFooter;
