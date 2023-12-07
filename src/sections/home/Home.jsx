import React, { useRef, useEffect, useState } from "react";
import Section from "../../components/section/Section";
import styles from "./Home.module.css";
import Heading from "../../components/heading/Heading";
import Text from "../../components/text/Text";
import Socials from "../../components/socials/Socials";
import Profile from "../../components/profile/Profile";
import ScrollDown from "../../components/scroll-down/ScrollDown";
import Navbar from "../navbar/Navbar";

function Home() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const homeRef = useRef(null);

  const navIntersectHandler = (entries) => {
    const [entry] = entries;
    setIsIntersecting(entry.isIntersecting ? false : true);
  };

  const navIntersectOption = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      navIntersectHandler,
      navIntersectOption
    );
    observer.observe(homeRef.current);
    return () => {
      if (homeRef.current) observer.unobserve(homeRef.current);
    };
  }, []);

  return (
    <Section
      home={true}
      className={styles.homeSection}
      homeRef={homeRef}
      id="home_section"
    >
      <Navbar isIntersecting={isIntersecting} />

      <div className={styles.homeContainer}>
        <Profile />

        <Heading className={styles.homeHeading} size={3}>
          Hi! I'm <span>Wakar Malik</span>
        </Heading>

        <Text className={styles.homeDescription} size={1.4}>
          Welcome! Step into the world of a Full Stack Developer, where
          creativity meets logic, and ideas transform into dynamic web
          experiences.
        </Text>
        <Socials />
      </div>
      <ScrollDown />
    </Section>
  );
}

export default Home;
