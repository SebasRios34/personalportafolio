import React from "react";
import Typist from "react-text-typist";

import ScrollService from "../../../utilities/scroll-service.utilities";

import "./profile.styles.scss";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/srluna1/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/sebas.rios_/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://github.com/SebasRios34">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/sebasti%C3%A1n-rios-2bb579197/">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello I'm <span className="highlighted-text">Sebastián Rios</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typist
                  sentences={[
                    "Ethusiastic Leader",
                    "Fullstack Developer 🧑🏾‍💻",
                    "Software Engineer 💻",
                    "Scrum Master Certified 😎",
                    "AWS Certified 💻",
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building efficient solutions.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="glow-on-hover"
              type="button"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Hire Me
            </button>
            <a href="SebasRiosCV.pdf" download="SebasRiosCV.pdf">
              <button className="btn highlighted-btn">Get CV!</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
