import React from "react";
import styles from "./Heading.module.css";

function Heading({ children, size = 1, className = "", color = false }) {
  const classes = `${styles.heading} ${color && styles.span} ${className}`;

  return (
    <h1 className={classes} style={{ fontSize: `${size}rem` }}>
      {children}
    </h1>
  );
}

export default Heading;
