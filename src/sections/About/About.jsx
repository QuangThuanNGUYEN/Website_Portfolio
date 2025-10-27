// src/sections/About/About.jsx
import styles from "./AboutStyles.module.css";
import govhack from "../../assets/govhack.jpg";
import itCodeFair from "../../assets/itcodefair.jpeg";
import newVoices from "../../assets/newvoices.jpg";

function About() {
  const items = [
    {
      src: govhack,
      title: "MC — GovHack NT 2025",
      caption: "Hosted the award night with my team and led a Kahoot segment with 50+ attendees.",
    },
    {
      src: itCodeFair,
      title: "Presenter — IT Code Fair 2025",
      caption: "Presented my data science project analysing NT tourism reviews.",
    },
    {
      src: newVoices,
      title: "Finalist — New Voices 2025",
      caption: "Shared a personal storytelling journey about growth and communication and came in third place.",
    },
  ];

  return (
    <section id="about" className={styles.container}>
      <h1 className="sectionTitle">About Me</h1>

      <p className={styles.intro}>
        I’m passionate about combining AI, IoT, and data storytelling — and also
        enjoy sharing ideas on stage. From hackathons to university showcases, I
        like bringing energy to technical topics and helping others learn from
        them.
      </p>

      <div className={styles.grid}>
        {items.map((item, i) => (
          <figure key={i} className={styles.card}>
            <img src={item.src} alt={item.title} className={styles.image} />
            <figcaption className={styles.caption}>
              <h3>{item.title}</h3>
              <p>{item.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default About;
