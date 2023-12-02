import React from "react";
import styles from "./Card.module.css";

function Card({ children, className, bw = 1 }) {
  const classes = `${styles.card} ${className}`;

  return (
    <div className={classes} style={{ borderWidth: bw }}>
      {children}
    </div>
  );
}

export default Card;
