import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {

  const { theme, toggleTheme } = useTheme();
  const checkMarkIcon = theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Python (Pandas, NumPy)" />
        <SkillList src={checkMarkIcon} skill="SQL (BigQuery, PostgreSQL)" />
        <SkillList src={checkMarkIcon} skill="Data Modeling & ETL Pipelines" />
        <SkillList src={checkMarkIcon} skill="Apache Airflow (Workflow Orchestration)" />
      </div>
      <hr />

      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Google Cloud Platform (BigQuery, Cloud Storage, Pub/Sub)" />
        <SkillList src={checkMarkIcon} skill="Data Warehousing & Analytics" />
        <SkillList src={checkMarkIcon} skill="Streaming Data Processing" />
        <SkillList src={checkMarkIcon} skill="APIs & Data Ingestion" />
        <SkillList src={checkMarkIcon} skill="Data Visualization (Tableau, Power BI)" />
      </div>
      <hr />
    </section>
  );
}

export default Skills;
