import React from "react";
import Card from "../card/Card";
import styles from "./Socials.module.css";
import { RiLinkedinBoxFill, RiGithubFill, RiTwitterFill } from "react-icons/ri";

function Socials() {
  return (
    <div className={styles.socialContainer}>
      <Card className={styles.socialCard}>
        <a
          href="https://www.linkedin.com/in/wakar-malik/"
          className={styles.socialIcon}
          target="_blank"
        >
          <RiLinkedinBoxFill />
        </a>
      </Card>
      <Card className={styles.socialCard}>
        <a
          href="https://github.com/wakar-malik"
          className={styles.socialIcon}
          target="_blank"
        >
          <RiGithubFill className={styles.socialIcon} />
        </a>
      </Card>
      <Card className={styles.socialCard}>
        <a
          href="https://twitter.com/WakarMalik12"
          className={styles.socialIcon}
          target="_blank"
        >
          <RiTwitterFill className={styles.socialIcon} />
        </a>
      </Card>
    </div>
  );
}

export default Socials;
