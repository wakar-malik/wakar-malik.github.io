import React from "react";
import styles from "./Main.module.css";

function Main({ children, className = "" }) {
  const classes = `${styles.main} ${className}`;
  return <main className={classes}>{children}</main>;
}

export default Main;
