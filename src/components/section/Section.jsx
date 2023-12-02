import React from "react";
import styles from "./Section.module.css";

function Section({
  children,
  className = "",
  home = false,
  homeRef = null,
  id = "",
}) {
  const classes = `${home ? styles.homeSection : styles.section} ${className}`;

  return (
    <section
      className={`${classes} ${home && styles.homeSection}`}
      ref={homeRef}
      id={id}
    >
      {children}
      {home && (
        <>
          <span className={styles.span}></span>
          <span className={styles.span}></span>
          <span className={styles.span}></span>
          <span className={styles.span}></span>
          <span className={styles.span}></span>
        </>
      )}
    </section>
  );
}

export default Section;
