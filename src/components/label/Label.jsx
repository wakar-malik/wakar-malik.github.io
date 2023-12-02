import React from "react";
import styles from "./Label.module.css";

function Label({ label, labelTxt }) {
  return (
    <label htmlFor={label} className={styles.label}>
      {labelTxt}
    </label>
  );
}

export default Label;
