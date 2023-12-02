import React from "react";
import styles from "./Text.module.css";

function Text({ children, size = 1, className = "" }) {
  const classes = `${styles.text} ${className}`;

  return (
    <p className={classes} style={{ fontSize: `${size}rem` }}>
      {children}
    </p>
  );
}

export default Text;
