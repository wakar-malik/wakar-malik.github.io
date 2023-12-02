import React from "react";
import styles from "./Contact.module.css";
import Section from "../../components/section/Section";
import Heading from "../../components/heading/Heading";
import Progress from "../../components/progress/Progress";
import Main from "../../components/main/Main";
import Text from "../../components/text/Text";
import Card from "../../components/card/Card";
import { RiMailLine } from "react-icons/ri";
import Label from "../../components/label/Label";
import Input from "../../components/input/Input";

function Contact() {
  return (
    <Section className={styles.contactSection} id="contact_section">
      <Heading size={2.5} className={styles.contactHeading}>
        CONTACT US
      </Heading>
      <Progress />

      <Main className={styles.contactMain}>
        <div className={styles.contactLeft}>
          <Text size={1.4}>
            Let's Connect! Excited to hear from you and explore the
            possibilities together!"
          </Text>

          <Card className={styles.emailCard}>
            <RiMailLine size={50} color="var(--bgGreen)" />

            <div className={styles.email}>
              <Heading>Contact on mail</Heading>
              <Text>wakarmalik9@gmail.com</Text>
            </div>
          </Card>
        </div>

        <Card className={styles.contactRight}>
          <form>
            <Label labelTxt="Name" />
            <br />
            <Input placeholder="Enter your name..." />
            <br />
            <Label labelTxt="Email" />
            <br />
            <Input placeholder="Enter your email..." />
            <br />
            <Label labelTxt="Submit" />
            <br />
            <Input placeholder="Enter subject..." />
            <br />
            <Label labelTxt="Message" />
            <br />
            <textarea
              name=""
              id=""
              rows="10"
              className={styles.textarea}
            ></textarea>
          </form>
        </Card>
      </Main>
    </Section>
  );
}

export default Contact;
