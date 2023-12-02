import React from "react";
import Card from "../card/Card.jsx";
import styles from "./ImgCard.module.css";
import Image from "../image/Image.jsx";
import Heading from "../heading/Heading.jsx";
import { RiExternalLinkFill, RiGithubFill } from "react-icons/ri";

function ImgCard({ src, title, alt, className, liveUrl, githubUrl }) {
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
      <Heading size={1.3}>{title}</Heading>
    </Card>
  );
}

export default ImgCard;
