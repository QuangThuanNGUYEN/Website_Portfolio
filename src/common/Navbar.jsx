import React from "react";
import styles from "./NavbarStyles.module.css";
import { useTheme } from "./ThemeContext"; // same context as Hero

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}><a href="#hero">Vincent Bytes</a></div>

      <ul className={styles.navLinks}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
