import React from "react";
import Section from "../../components/section/Section";
import styles from "./Tools.module.css";
import Heading from "../../components/heading/Heading";
import Progress from "../../components/progress/Progress";
import Main from "../../components/main/Main";
import Card from "../../components/card/Card";
import IMAGES from "../../utils/images";
import Image from "../../components/image/Image";

const tools = [
  { name: "npm", icon: IMAGES.npm },
  { name: "postman", icon: IMAGES.postman },
  { name: "git", icon: IMAGES.git },
  { name: "github", icon: IMAGES.github },
  { name: "netlify", icon: IMAGES.netlify },
];

function Tools() {
  return (
    <Section className={styles.toolsSection}>
      <Heading className={styles.toolsHeading} size={2.5}>
        TOOLS
      </Heading>
      <Progress />

      <Main className={styles.toolMain}>
        {tools.map((icon) => (
          // <Card>
          <Image
            src={icon.icon}
            alt={icon.name}
            className={styles.toolIcon}
            title={icon.name}
          />
          // </Card>
        ))}
      </Main>
    </Section>
  );
}

export default Tools;
