import React, { useState } from "react";
import styles from "./Works.module.css";
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
    githubUrl: "https://github.com/wakar-malik/mailchimp",
  },
  {
    title: "Donto",
    img: IMAGES.donto,
    liveUrl: "https://react-dentist.netlify.app/",
    githubUrl: "https://github.com/wakar-malik/dentist-website",
  },
  {
    title: "Homyz",
    img: IMAGES.homyz,
    liveUrl: "https://website-realestate.netlify.app/",
    githubUrl: "https://github.com/wakar-malik/react-real-estate",
  },
  {
    title: "Far Away",
    img: IMAGES.faraway,
    liveUrl: "https://react-far-away.netlify.app/",
    githubUrl: "https://github.com/wakar-malik/react-far-away",
  },
  {
    title: "Split Bill",
    img: IMAGES.splitbill,
    liveUrl: "https://react-split-bill.netlify.app/",
    githubUrl: "https://github.com/wakar-malik/react-split-bill",
  },
];

function Works() {
  const [tab, setTab] = useState("FRONT-END");

  return (
    <Section className={styles.worksSection} id="works_section">
      <Heading className={styles.worksHeading} size={2.5}>
        WORKS
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

export default Works;
