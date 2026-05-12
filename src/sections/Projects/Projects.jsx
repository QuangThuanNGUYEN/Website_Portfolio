import React from "react";
import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import revenue_ad from "../../assets/revenue-advertising.jpeg";
import voice_parkinson from "../../assets/voice-parkinson.png";
import tic_tac_toe from "../../assets/tic-tac-toe.png";
import sort from "../../assets/sorting.jpeg";
import calculator from "../../assets/calculator.png";
import headwater from "../../assets/headwater.jpeg";
import distinguish_parkinson from "../../assets/distinguish-parkinson.png";
import predict from "../../assets/it-project-predict.jpg";
import goods from "../../assets/goods-management.jpeg";
import govhack from "../../assets/govhack.png";
import book from "../../assets/bookwormia.png";
import mango from "../../assets/mango.png";



function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        
        
        <ProjectCard
          src={book}
          link="https://quangthuannguyen.github.io/AgriNode-Pitching-Site/"
          h3="AgriNode"
          p="Built a low-cost ESP32 agriculture node with soil/climate sensors, on-device edge AI for plant-disease detection, cloud streaming, and smart irrigation—designed for real NT farm environments."
        />
{/* 
        <ProjectCard
          src={book}
          link="https://github.com/buudangfelix/mobile"
          h3="NT Tourism Review Analytics (Data Engineering | Python + BigQuery)"
          p="Analysed 56,000+ NT tourism reviews from Google Maps and TripAdvisor using Python scraping pipelines. Built sentiment analysis, topic modelling, and an interactive dashboard to help operators understand visitor feedback and improve services."
        />  */}

        <ProjectCard
          src={book}
          link="https://github.com/buudangfelix/mobile"
          h3="BookWormia"
          p="A full-stack book-selling app with authentication, catalog, and review system; designed UI in Figma, developed responsive frontend with React Native/Tailwind CSS, and integrated Appwrite backend for secure data management
"
        />

        <ProjectCard
          src={mango}
          link="https://quangthuan.pythonanywhere.com/"
          h3="Mango Surveillance Website"
          p="A Django web application designed to help growers calculate surveillance effort for pest and disease management, tailored to factors like plant type, location, number of plants, grower preferences, and historical data."
        />
        <ProjectCard
          src={govhack}
          link="https://quangthuannguyen.github.io/govhack_chatbot/"
          h3="GovHack Chatbot"
          p="As Tech Lead at GovHack NT 2025, I built a Dialogflow FAQ chatbot that delivered real-time answers on rules and event info, reducing confusion and improving the participant experience."
        />
        <ProjectCard
          src={revenue_ad}
          link="https://github.com/QuangThuanNGUYEN/Linear_regression_revenue_advertising_prediction.git"
          h3="Revenue Prediction (Python)"
          p="A custom multiple linear regression model to predict revenue based on investment in three advertising channels."
        />
        <ProjectCard
          src={voice_parkinson}
          link="https://github.com/QuangThuanNGUYEN/Parkinson-Linear-Regression.git.git"
          h3="Diagnose the Severity of Parkinson’s Disease (Python)"
          p="Analyzed extensive patient voice data to predict Parkinson’s Disease severity."
        />

        <ProjectCard
          src={sort}
          link="https://github.com/QuangThuanNGUYEN/Sorting-Algo-Visualizer.git"
          h3="Sorting Algo Visualizer (Python)"
          p="Implementing sorting algorithms like Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, and Heap Sort and visualize the sorting process in real-time, with threading ensuring a responsive interface."
        />

        <ProjectCard
          src={distinguish_parkinson}
          link="https://github.com/QuangThuanNGUYEN/Parkinson-Disease-Diagnose-.git"
          h3="Identify Parkinson’s Disease vs Healthy Individuals (Python)"
          p="Distinguish people with Parkinson’s disease from ones that are healthy based on a dataset of Parkinson's patients and healthy people and the application of statistics."
        />
        
        <ProjectCard
          src={goods}
          link="https://github.com/QuangThuanNGUYEN/Goods_Management_C"
          h3="Goods Management System (C)"
          p="A console-based goods management system in C, employing pointers for dynamic memory allocation. The application manages product information utilized file I/O for data persistence, showcasing proficiency in structures, file manipulation, and memory management.
"
        />
      </div>
    </section>
  );
}

export default Projects;
