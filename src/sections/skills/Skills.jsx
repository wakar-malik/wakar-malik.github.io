import React from "react";
import styles from "./Skills.module.css";
import Section from "../../components/section/Section";
import Main from "../../components/main/Main";
import SkillBar from "../../components/skill-bar/SkillBar";
import {
  RiJavascriptFill,
  RiReactjsFill,
  RiCss3Fill,
  RiLeafFill,
  RiHtml5Fill,
  RiStackLine,
} from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";
import Heading from "../../components/heading/Heading";
import Progress from "../../components/progress/Progress";

const skills = [
  { heading: "HTML", percent: 90, icon: <RiHtml5Fill size={70} /> },
  { heading: "CSS", percent: 90, icon: <RiCss3Fill size={70} /> },
  { heading: "Javascript", percent: 80, icon: <RiJavascriptFill size={70} /> },
  { heading: "ReactJs", percent: 85, icon: <RiReactjsFill size={70} /> },
  { heading: "React Native", percent: 70, icon: <RiReactjsFill size={70} /> },
  { heading: "NodeJs", percent: 50, icon: <FaNodeJs size={70} /> },
  { heading: "MongoDB", percent: 50, icon: <RiLeafFill size={70} /> },
  { heading: "DSA", percent: 50, icon: <RiStackLine size={70} /> },
];

function Skills() {
  return (
    <Section className={styles.skillsSection} id="skills_section">
      <Heading size={2.5} className={styles.skillsHeading}>
        MY SKILLS
      </Heading>
      <Progress />

      <Main>
        <div className={styles.skillsBarContainer}>
          {skills.map((skill, index) => (
            <SkillBar
              key={index}
              heading={skill.heading}
              percent={skill.percent}
              icon={skill.icon}
            />
          ))}
        </div>
      </Main>
    </Section>
  );
}

export default Skills;
