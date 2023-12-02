import React from "react";
import styles from "./Button.module.css";

function Button({ className, btnActive = true, text, onChangeTab = () => {} }) {
  const classes = `${className} ${btnActive && styles.activeBtn} ${styles.btn}`;

  return (
    <button
      className={classes}
      style={{ color: btnActive ? "#000" : "var(--bgGreen)" }}
      onClick={onChangeTab}
    >
      {text}
    </button>
  );
}

export default Button;
