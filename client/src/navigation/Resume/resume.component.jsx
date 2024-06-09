import React, { useState, useEffect } from "react";

import Heading from "../../utilities/Heading/heading.component";
import ScrollService from "../../utilities/scroll-service.utilities";
import Animations from "../../utilities/animations.utilities";

import "./resume.styles.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
        <div className="resume-sub-heading">
          <a href={props.url}>{props.url ? props.url : ""}</a>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "More Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "More Projects", logoSrc: "projects.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "C#", ratingPercentage: 80 },
    { skill: "JavaScript", ratingPercentage: 80 },
    { skill: "React JS", ratingPercentage: 80 },
    { skill: "Typescript", ratingPercentage: 80 },
    { skill: "Node JS", ratingPercentage: 85 },
    { skill: "Java", ratingPercentage: 90 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2022", toDate: "present" },
      description:
        "A web Portfolio that allows me to describe and demostrate my resume and qulifications.",
      subHeading: "Technologies Used: React JS, Bootsrap, Node JS, SCSS",
    },
    {
      title: "E-commerce Website",
      duration: { fromDate: "2021", toDate: "present" },
      description:
        "An ecommerce application designed to sell products online wth payment system integration",
      subHeading:
        "Technologies Used:  React JS, Google Firebase,Redux, Stripe. GraphQL",
      url: "https://magnificent-alfajores-d15aa1.netlify.app",
    },
    {
      title: "Recognized Voice App ",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "With Voice Reco Web App you can place your words into the screen. Very useful to dictate large sentences into your text.",
      subHeading: "Technologies Used: JavaScript, CSS, HTML",
      url: "https://velvety-trifle-6b6925.netlify.app/",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of Science and Technology, Costa Rica"}
        subHeading={
          "System Engineering Baccalaureate and Computer Engineering with an Emphasis on Software Development"
        }
        fromDate={"2018"}
        toDate={"2022"}
      />

      <ResumeHeading
        heading={"Centro de Idiomas Intercultura"}
        subHeading={"Portuguese: Level C1"}
        fromDate={"2019"}
        toDate={"2020"}
      />

      <ResumeHeading
        heading={"Universidad Nacional de Costa Rica"}
        subHeading={"SCRUM Master Certification Course"}
        fromDate={"2022"}
        toDate={"2022"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"TekExperts"}
          subHeading={
            "Web Developer / Azure Cloud Support Engineer L2 - App Service PaaS"
          }
          fromDate={"January 2020"}
          toDate={"Febraury 2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Helped developed and integrated web tools for the App Service Team
            for the Azure Cloud. As well, provided support for the App Service
            resource at the Azure Cloud. Helped Azure clients deliver, develop
            and integrate App Services into their enviornment. Used
            technologies: Angular, JS, CSS, HTML, Azure App Service, Azure,
            NodeJS
          </span>
        </div>

        <ResumeHeading
          heading={"Source 360 Group"}
          subHeading={"Software Engineer"}
          fromDate={"March 2021"}
          toDate={"Feb 2023"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Helped developing, implementing and mainting web interfaces for
            various clients such as Subaru and Centerpoint Energy. Used
            technologies: AEM Workflow, AEM Adaptive Forms, JavaScript, MSSQL,
            .NET
          </span>
        </div>
      </div>
    </div>,
    <div className="resume-screen-container" key="work-experience-2">
      <div className="experience-container">
        <ResumeHeading
          heading={"JLL / Amazon GREF"}
          subHeading={"Lead Fullstack Developer"}
          fromDate={"March 2023"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            As a Full-Stack Developer, I excel in front-end development using
            React.js, Next.js, and TypeScript, and back- end development with
            Java, Node.js, and Python. I manage and develop SaaS solutions on
            Amazon GREF, gathering requirements, conducting sprint planning,
            performing rigorous code reviews, and mentoring team members. I am
            responsible for ensuring robust solution architecture and leading
            architectural design, as well as managing our cloud infrastructure
            utilizing AWS services.
          </span>
        </div>
      </div>
    </div>,
    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
          url={projectsDetails.url}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Time Tracking Dashboard"
        description="Desktop and Mobile UI for an Time Tracking Web App. Applied Mobile First and used SCSS"
        url="https://ornate-narwhal-e1e309.netlify.app"
      />
      <ResumeHeading
        heading="Tip Calculator App"
        description="Web App Tip Calculator used to divide fee between a certain number of people. Mobile, Tablet and Desktop UI and built using JS/SCSS/HTML"
        url="https://glowing-creponne-34dbd1.netlify.app"
      />
      <ResumeHeading
        heading="Custom Pokemon Game BETA"
        description="Decided to built one of my favorite games with my own personalization using HTML Canvas, pure JavaScript and other libraries."
        url="https://jazzy-naiad-e9d08b.netlify.app"
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <Heading title={"Resume"} subHeading={"Biography Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
