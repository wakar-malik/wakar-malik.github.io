import React from "react";
import GitHubCalendar from "react-github-calendar";
import styles from "./Github.module.css";
import Section from "../../components/section/Section";
import Main from "../../components/main/Main";
import Heading from "../../components/heading/Heading";
import Progress from "../../components/progress/Progress";

function Github() {
  return (
    <Section className={styles.githubSection}>
      <Heading size={2.5} className={styles.githubHeading}>
        Github
      </Heading>
      <Progress />

      <Main>
        <GitHubCalendar
          style={{
            margin: "auto",
            marginTop: "1rem",
            width: "100%",
          }}
          username="wakar-malik"
        />
        <img
          id="github-stats-card"
          style={{
            width: "100%",
          }}
          src="https://github-readme-stats.vercel.app/api?username=wakar-malik&theme=transparent&hide_border=true&show_icons=true&locale=en&title_color=72e2ae&text_color=white&icon_color=72e2ae"
        />
        <img
          id="github-streak-stats"
          width="100%"
          src="https://github-readme-streak-stats.herokuapp.com/?user=wakar-malik&theme=transparent&hide_border=true&title_color=white&text_color=white&sideNums=white&sideLabels=72e2ae&ring=72e2ae&fire=white&currStreakLabel=72e2ae&currStreakNum=white"
          alt=""
        />
      </Main>
    </Section>
  );
}

export default Github;
