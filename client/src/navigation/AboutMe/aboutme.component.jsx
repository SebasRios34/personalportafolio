import React from "react";

import Heading from "../../utilities/Heading/heading.component";
import ScrollService from "../../utilities/scroll-service.utilities";
import Animations from "../../utilities/animations.utilities";

import "./aboutme.styles.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONST = {
    description:
      "Experienced Full-Stack Developer with expertise in front-end technologies such as React.js, Next.js, and TypeScript, and back-end development using Java, Node.js, and Python. Skilled in managing and developing SaaS solutions, including requirement gathering, sprint planning, and conducting thorough code reviews. Adept at mentoring team members and ensuring robust solution architecture, while overseeing cloud infrastructure management utilizing AWS services. Demonstrates strong leadership capabilities, effective communication, and collaboration skills. Certified Scrum Master with a strong motivation for software development and project management, excelling in both technical and soft skills to drive team success and deliver high-quality software solutions.",
    highlights: {
      bullets: [
        "Front End experience with ReactJS and NextJS",
        "Proficient in back-end development using Java, Node.js, and Python",
        "AWS Cloud Practicioner Certified",
        "Scrum Master Certified",
        "Knowledge with SQL and NoSQL Databases",
        "Expertise in building REST APIs",
        "Proficient in ensuring robust solution architecture using AWS/Azure services",
        "Experience with Adaptive Forms and Workflow(Logic Apps) in AEM",
      ],
      heading: "My Highlights include:",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONST.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <Heading title={"About Me"} subHeading={"My qualitfications"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONST.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONST.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Hire Me{" "}
              </button>
              <a
                href="SebastianRiosResume.pdf"
                download="SebastianRiosResume.pdf"
              >
                <button className="btn highlighted-btn">Get CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
