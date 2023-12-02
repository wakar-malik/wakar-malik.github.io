import React from "react";
import styles from "./Footer.module.css";
import Socials from "../../components/socials/Socials";
import Text from "../../components/text/Text";
import Main from "../../components/main/Main";
import Section from "../../components/section/Section";

function Footer() {
  return (
    <Section>
      <footer className={styles.footerSection}>
        <Main className={styles.footerMain}>
          <Socials />

          <Text>
            © 2023, All right reserved{" "}
            <span className={styles.copyrightTxt}>Wakar Malik</span>
          </Text>
        </Main>
      </footer>
    </Section>
  );
}

export default Footer;
