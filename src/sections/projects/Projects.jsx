import React, { useState } from "react";
import styles from "./Projects.module.css";
import Section from "../../components/section/Section";
import Main from "../../components/main/Main";
import Heading from "../../components/heading/Heading";
import Progress from "../../components/progress/Progress";
import Button from "../../components/button/Button";
import ImgCard from "../../components/img-card/ImgCard";
import IMAGES from "../../utils/images";

const btnArr = ["FRONT-END"]; //"BACK-END", "FULL-STACK"
const projects = [
  {
    title: "MailChimp",
    img: IMAGES.mailchimp,
    liveUrl: "https://mailchimp001.netlify.app/",
    description:
      "Exact replica of Mailchimp's website, demonstrating precision in front-end development and design prowess.",
    stack: ["Javascript", "React", "Redux"],
    githubUrl: "https://github.com/wakar-malik/mailchimp",
  },
  {
    title: "Donto",
    img: IMAGES.donto,
    description:
      "Crafted a polished dentist website, seamlessly blending functionality with an aesthetic design to enhance the online presence of dental services.",
    stack: ["Javascript", "React"],
    liveUrl: "https://react-dentist.netlify.app/",
    githubUrl: "https://github.com/wakar-malik/dentist-website",
  },
  {
    title: "Homyz",
    img: IMAGES.homyz,
    description:
      "Designed an intuitive real estate platform, simplifying property searches and enhancing user engagement.",
    stack: ["Javascript", "React"],
    liveUrl: "https://website-realestate.netlify.app/",
    githubUrl: "https://github.com/wakar-malik/react-real-estate",
  },
  {
    title: "Far Away",
    img: IMAGES.faraway,
    description:
      "Developed a user-friendly app allowing travelers to effortlessly track their luggage during tours, ensuring a stress-free journey.",
    stack: ["Javascript", "React"],
    liveUrl: "https://react-far-away.netlify.app/",
    githubUrl: "https://github.com/wakar-malik/react-far-away",
  },
  {
    title: "Split Bill",
    img: IMAGES.splitbill,
    description:
      "Crafted an intuitive split-bill app to simplify sharing expenses among friends, making financial management a breeze during group outings.",
    stack: ["Javascript", "React"],
    liveUrl: "https://react-split-bill.netlify.app/",
    githubUrl: "https://github.com/wakar-malik/react-split-bill",
  },
];

function Projects() {
  const [tab, setTab] = useState("FRONT-END");

  return (
    <Section className={styles.projectsSection} id="projects_section">
      <Heading className={styles.projectsHeading} size={2.5}>
        PROJECTS
      </Heading>
      <Progress />

      <Main>
        <div className={styles.tabContainer}>
          {btnArr.map((btnTxt) => (
            <Button
              text={btnTxt}
              btnActive={btnTxt === tab}
              key={btnTxt}
              onChangeTab={() => setTab(btnTxt)}
            />
          ))}
        </div>

        <div className={styles.tabContentContainer}>
          {tab === "FRONT-END" && (
            <div className={styles.tabCardsContainer}>
              {projects.map((project, index) => (
                <ImgCard
                  key={index}
                  title={project.title}
                  alt={project.alt}
                  src={project.img}
                  description={project.description}
                  stack={project.stack}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                />
              ))}
            </div>
          )}
          {/* {tab === "BACK-END" && (
            <div className={styles.tabCardsContainer}>
              <ImgCard />
              <ImgCard />
              <ImgCard />
            </div>
          )}
          {tab === "FULL-STACK" && (
            <div className={styles.tabCardsContainer}>
              <ImgCard />
              <ImgCard />
              <ImgCard />
            </div>
          )} */}
        </div>
      </Main>
    </Section>
  );
}

export default Projects;
