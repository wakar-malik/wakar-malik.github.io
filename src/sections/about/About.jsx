import React from "react";
import Section from "../../components/section/Section.jsx";
import styles from "./About.module.css";
import Main from "../../components/main/Main.jsx";
import Card from "../../components/card/Card.jsx";
import IMAGES from "../../utils/images.js";
import Image from "../../components/image/Image.jsx";
import Heading from "../../components/heading/Heading.jsx";
import Progress from "../../components/progress/Progress.jsx";

function About() {
  return (
    <Section className={styles.aboutSection} id="about_section">
      <Heading size={2.5} className={styles.aboutHeading}>
        ABOUT ME
      </Heading>
      <Progress />
      <Main className={styles.aboutMain}>
        <div className={styles.aboutLeft}>
          <Card bw={8} className={styles.aboutCard}>
            <Image
              src={IMAGES.aboutImg}
              alt="about-image"
              className={styles.aboutImg}
            />
          </Card>
        </div>
        <div className={styles.aboutRight}>
          <Heading size={1.6} color={true}>
            Hi, I am <span>Wakar Malik</span>
          </Heading>
          <ul className={styles.profileDetailsList}>
            <li>
              <span>Age</span> : 23 years
            </li>
            <li>
              <span>Nationality</span> : Indian
            </li>
            <li>
              <span>Languages</span> : Hindi, English
            </li>
            <li>
              <span>Address</span> : Delhi NCR
            </li>
          </ul>
        </div>
      </Main>
    </Section>
  );
}

export default About;
