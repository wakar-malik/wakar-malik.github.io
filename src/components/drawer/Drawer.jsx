import { createPortal } from "react-dom";
import styles from "./Drawer.module.css";
import Text from "../text/Text";
import { RiCloseFill } from "react-icons/ri";

function DrawerPanel({ drawer, setDrawer }) {
  return (
    <aside
      className={`${styles.drawerPanel} ${
        drawer ? styles.drawerActive : styles.drawerNotActive
      }`}
    >
      <div
        className={styles.closeIconContainer}
        onClick={() => setDrawer((prev) => !prev)}
      >
        <RiCloseFill />
      </div>

      <ul className={styles.drawerItemsList}>
        <li
          className={styles.drawerItem}
          onClick={() => setDrawer((prev) => !prev)}
        >
          <a href="#home_section">
            <Text size={1.1}>Home</Text>
          </a>
        </li>
        <li
          className={styles.drawerItem}
          onClick={() => setDrawer((prev) => !prev)}
        >
          <a href="#about_section">
            <Text size={1.1}>About</Text>
          </a>
        </li>
        <li
          className={styles.drawerItem}
          onClick={() => setDrawer((prev) => !prev)}
        >
          <a href="#skills_section">
            <Text size={1.1}>Skills</Text>
          </a>
        </li>
        <li
          className={styles.drawerItem}
          onClick={() => setDrawer((prev) => !prev)}
        >
          <a href="#works_section">
            <Text size={1.1}>Works</Text>
          </a>
        </li>
        <li
          className={styles.drawerItem}
          onClick={() => setDrawer((prev) => !prev)}
        >
          <a href="#contact_section">
            <Text size={1.1}>Contact</Text>
          </a>
        </li>
      </ul>
    </aside>
  );
}

function DrawerShadow({ setDrawer, drawer }) {
  if (drawer) {
    return (
      <div
        className={styles.drawerShadow}
        onClick={() => setDrawer((prev) => !prev)}
      />
    );
  }
}

function Drawer({ drawer, setDrawer }) {
  return (
    <>
      {createPortal(
        <DrawerPanel drawer={drawer} setDrawer={setDrawer} />,
        document.getElementById("root")
      )}
      {createPortal(
        <DrawerShadow drawer={drawer} setDrawer={setDrawer} />,
        document.getElementById("root")
      )}
    </>
  );
}

export default Drawer;
