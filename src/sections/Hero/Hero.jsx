import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/profile_photo.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Vincent Nguyen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Vincent
          <br />
          Nguyen
        </h1>
        <h2>Data Engineer</h2>
        <span>
          <a 
            href="https://linkedin.com/in/quang-thuan-nguyen" 
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a
            href="https://github.com/QuangThuanNGUYEN?tab=repositories"
            target="_blank"
          >
            <img src={githubIcon} alt="Github icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a focus on backend development and machine learning, I am
          dedicated to building advanced, data-centric solutions that deliver
          real-world results.
        </p>
        <a href={CV} target="_blank">
          <button className="hover">Résumé</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
