import React from "react";
import Image from "../image/Image";
import styles from "./Profile.module.css";
import IMAGES from "../../utils/images";

function Profile() {
  return (
    <div className={styles.profileContainer}>
      <Image
        src={IMAGES.profileImg}
        alt="profile-img"
        className={styles.profileImg}
      />
    </div>
  );
}

export default Profile;
