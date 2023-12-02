import React from "react";
import styles from "./Blogs.module.css";
import Section from "../../components/section/Section";
import Main from "../../components/main/Main";
import Heading from "../../components/heading/Heading";
import Progress from "../../components/progress/Progress";
import ImgCard from "../../components/img-card/ImgCard";

function Blogs() {
  return (
    <Section className={styles.blogsSection} id="blogs_section">
      <Heading className={styles.blogsHeading} size={2.5}>
        LATEST BLOGS
      </Heading>
      <Progress />

      <Main className={styles.sliderContainer}>
        <ImgCard className={styles.blogsCard} title="one" />
        <ImgCard className={styles.blogsCard} />
        <ImgCard className={styles.blogsCard} />
        <ImgCard className={styles.blogsCard} />
        <ImgCard className={styles.blogsCard} />
        <ImgCard className={styles.blogsCard} />
      </Main>
    </Section>
  );
}

export default Blogs;
