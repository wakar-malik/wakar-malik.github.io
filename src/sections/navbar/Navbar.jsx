import { useEffect } from "react";
import styles from "./Navbar.module.css";
import { IoMenuOutline } from "react-icons/io5";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import Drawer from "../../components/drawer/Drawer";
import Main from "../../components/main/Main";
import Text from "../../components/text/Text";
import { useThemeCtxProvider } from "../../context/ThemeContext";
import { useDrawerCtxProvider } from "../../context/DrawerContext";

function Navbar({ isIntersecting }) {
  const { theme, setTheme } = useThemeCtxProvider();
  const { drawer, setDrawer } = useDrawerCtxProvider();

  window.addEventListener("resize", function () {
    const bodyWidth = document.body.clientWidth;
    if (bodyWidth > 1024) setDrawer(false);
  });

  useEffect(() => {
    if (drawer) {
      document.body.style.overflowY = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [drawer]);

  return (
    <nav
      className={styles.navbarContainer}
      style={{
        position: isIntersecting ? "fixed" : "absolute",
        borderBottom: isIntersecting ? "2px solid var(--borderColor)" : "none",
        backgroundColor: isIntersecting ? "rgba(15,23,42,0.8)" : "transparent",
        backdropFilter: isIntersecting ? "blur(4px)" : "blur(0px)",
      }}
    >
      <Drawer drawer={drawer} setDrawer={setDrawer} />

      <Main className={styles.navbarActions}>
        <h1 className={styles.logo}>Wakar Malik</h1>

        <ul className={styles.navItemsList}>
          <li>
            <a
              style={{
                color: isIntersecting ? "#fff" : "var(--textColor)",
              }}
              href="#home_section"
            >
              <Text size={1.1}>Home</Text>
            </a>
          </li>
          <li>
            <a
              style={{
                color: isIntersecting ? "#fff" : "var(--textColor)",
              }}
              href="#about_section"
            >
              <Text size={1.1}>About</Text>
            </a>
          </li>
          <li>
            <a
              style={{
                color: isIntersecting ? "#fff" : "var(--textColor)",
              }}
              href="#skills_section"
            >
              <Text size={1.1}>Skills</Text>
            </a>
          </li>
          <li>
            <a
              style={{
                color: isIntersecting ? "#fff" : "var(--textColor)",
              }}
              href="#works_section"
            >
              <Text size={1.1}>Works</Text>
            </a>
          </li>
          <li>
            <a
              style={{
                color: isIntersecting ? "#fff" : "var(--textColor)",
              }}
              href="#contact_section"
            >
              <Text size={1.1}>Contact</Text>
            </a>
          </li>
        </ul>

        <div className={styles.navActionContainer}>
          <div onClick={() => setTheme((prev) => !prev)}>
            {theme ? (
              <RiSunFill
                style={{
                  fontSize: "2rem",
                  color: "var(--bgGreen",
                  fontWeight: "bolder",
                }}
              />
            ) : (
              <RiMoonFill style={{ fontSize: "2rem", fontWeight: 900 }} />
            )}
          </div>

          <IoMenuOutline
            className={styles.menuIcon}
            style={{
              zIndex: drawer ? 20 : 1,
            }}
            onClick={() => setDrawer((prev) => !prev)}
          />
        </div>
      </Main>
    </nav>
  );
}

export default Navbar;
