// // src/sections/About/About.jsx
// import styles from "./AboutStyles.module.css";
// import govhack from "../../assets/govhack.jpg";
// import itCodeFair from "../../assets/itcodefair.jpeg";
// import newVoices from "../../assets/newvoices.jpg";
// // import runnerUp from "../../assets/itcf-runnerup.jpg";
// // import techLead from "../../assets/govhack-techlead.jpg";
// // import bizInnovation from "../../assets/business-innovation.jpg";
// // import spirit from "../../assets/spirit-govhack.jpg";

// function About() {
//   const items = [
//     {
//       src: govhack,
//       title: "MC — GovHack NT 2025",
//       caption:
//         "Hosted the award night with my team and led a Kahoot segment with 50+ attendees.",
//     },
//     {
//       src: itCodeFair,
//       title: "Presenter — IT Code Fair 2025",
//       caption:
//         "Presented my data science project analysing NT tourism reviews.",
//     },
//     {
//       src: newVoices,
//       title: "Finalist — New Voices 2025",
//       caption:
//         "Shared a personal storytelling journey about growth and communication and came in third place.",
//     },
//     {
//       src: govhack,
//       title: "Runner-Up — IT Code Fair 2025 (Coding Competition)",
//       caption:
//         "Placed 2nd in the flagship coding competition, solving real engineering challenges under time pressure.",
//     },
//     {
//       src: govhack,
//       title: "Tech Lead — GovHack NT 2025",
//       caption:
//         "Built a Dialogflow FAQ chatbot and supported teams with mentoring, onboarding, and event operations.",
//     },
//     {
//       src: govhack,
//       title: "3rd Place — Business Innovation Challenge 2025",
//       caption:
//         "Developed a problem–solution pitch with strong viability, scoring a top-three placement.",
//     },
//     {
//       src: govhack,
//       title: "Spirit of GovHack NT — 2023",
//       caption:
//         "Awarded for teamwork, leadership, and supporting the GovHack community across the NT.",
//     },
//   ];

//   // Duplicate for seamless infinite scroll
//   const rollingItems = [...items, ...items];

//   return (
//     <section id="about" className={styles.container}>
//       <h1 className="sectionTitle">About Me</h1>

//       <p className={styles.intro}>
//         I’m passionate about combining AI, IoT, and data storytelling — and also
//         enjoy sharing ideas on stage. From hackathons to university showcases, I
//         like bringing energy to technical topics and helping others learn from
//         them. Right now I’m focused on building data engineering and IoT projects
//         that solve real problems in the Northern Territory.
//       </p>

//       {/* 🔥 Rolling cards carousel */}
//       <div className={styles.carousel}>
//         <div className={styles.track}>
//           {rollingItems.map((item, i) => (
//             <figure key={i} className={styles.card}>
//               <img src={item.src} alt={item.title} className={styles.image} />
//               <figcaption className={styles.caption}>
//                 <h3>{item.title}</h3>
//                 <p>{item.caption}</p>
//               </figcaption>
//             </figure>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;








// src/sections/About/About.jsx
import styles from "./AboutStyles.module.css";
import govhack from "../../assets/govhack.jpg";
import itCodeFair from "../../assets/itcodefair.jpeg";
import newVoices from "../../assets/newvoices.jpg";
// import runnerUp from "../../assets/itcf-runnerup.jpg";
// import techLead from "../../assets/govhack-techlead.jpg";
// import bizInnovation from "../../assets/business-innovation.jpg";
// import spirit from "../../assets/spirit-govhack.jpg";

function About() {
  const items = [
    {
      src: govhack,
      title: "MC — GovHack NT 2025",
      caption:
        "Hosted the award night with my team and led a Kahoot segment with 50+ attendees.",
    },
    {
      src: itCodeFair,
      title: "Presenter — IT Code Fair 2025",
      caption:
        "Presented my data science project analysing NT tourism reviews.",
    },
    {
      src: newVoices,
      title: "Finalist — New Voices 2025",
      caption:
        "Shared a personal storytelling journey about growth and communication and came in third place.",
    },
    {
      src: govhack,
      title: "Runner-Up — IT Code Fair 2025 (Coding Competition)",
      caption:
        "Placed 2nd in the flagship coding competition, solving real engineering challenges under time pressure.",
    },
    {
      src: govhack,
      title: "Tech Lead — GovHack NT 2025",
      caption:
        "Built a Dialogflow FAQ chatbot and supported teams with mentoring, onboarding, and event operations.",
    },
    {
      src: govhack,
      title: "3rd Place — Business Innovation Challenge 2025",
      caption:
        "Developed a problem–solution pitch with strong viability, scoring a top-three placement.",
    },
    {
      src: govhack,
      title: "Spirit of GovHack NT — 2023",
      caption:
        "Awarded for teamwork, leadership, and supporting the GovHack community across the NT.",
    },
  ];

  return (
    <section id="about" className={styles.container}>
      <h1 className="sectionTitle">About Me</h1>

      <p className={styles.intro}>
        I’m passionate about combining AI, IoT, and data storytelling — and also
        enjoy sharing ideas on stage. From hackathons to university showcases, I
        like bringing energy to technical topics and helping others learn from
        them. Right now I’m focused on building data engineering and IoT projects
        that solve real problems in the Northern Territory.
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
