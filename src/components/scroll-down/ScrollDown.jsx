import React from "react";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import styles from "./ScrollDown.module.css";

function ScrollDown() {
  return (
    <a href="#about_section" className={styles.scrollDown}>
      <RiArrowDownDoubleFill className={styles.scrollIcon} />
      <span>SCROLL DOWN</span>
    </a>
  );
}

export default ScrollDown;
