import React from "react";
import Heading from "../heading/Heading";
import styles from "./SkillBar.module.css";

function SkillBar({ heading, percent, icon }) {
  return (
    <div className={styles.skillBarContainer}>
      {icon}

      <div className={styles.barSection}>
        <Heading size={1.5}>
          {heading} - ({`${percent}%`})
        </Heading>
        <div className={styles.barContainer}>
          <span className={styles.bar} style={{ width: `${percent}%` }} />
        </div>
      </div>
    </div>
  );
}

export default SkillBar;
