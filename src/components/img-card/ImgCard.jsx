import React from "react";
import Card from "../card/Card.jsx";
import styles from "./ImgCard.module.css";
import Image from "../image/Image.jsx";
import Heading from "../heading/Heading.jsx";
import Text from "../../components/text/Text";
import { RiExternalLinkFill, RiGithubFill, RiStackLine } from "react-icons/ri";

function ImgCard({
  src,
  title,
  alt,
  className,
  liveUrl,
  githubUrl,
  description,
  stack = [],
}) {
  return (
    <Card className={`${styles.imgCard} ${className}`}>
      <div className={styles.imgCardImgContainer}>
        <div className={styles.imgCardOverlay}>
          <a href={githubUrl} target="_blank" title="Github">
            <RiGithubFill color="var(--bgGreen)" size={40} />
          </a>
          <a href={liveUrl} target="_blank" title="Live">
            <RiExternalLinkFill color="var(--bgGreen)" size={40} />
          </a>
        </div>
        <Image src={src} alt={alt} className={styles.imgCardImg} />
      </div>
      <Heading size={1.3} className={styles.projectHeading}>
        {title}
      </Heading>
      <Text className={styles.projectDes} size={1.2}>
        {description}
      </Text>

      <Heading className={styles.stackHeading}>Tech Stack</Heading>
      <Text size={1.2}>
        {stack.length > 0 &&
          stack.map((stackText, index) => (
            <>
              <span key={index}>
                {stackText}
                {index === stack.length - 1 ? "" : " | "}
              </span>
            </>
          ))}
      </Text>
    </Card>
  );
}

export default ImgCard;
