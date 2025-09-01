import React from "react";
import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
// import viberr from "../../assets/viberr.png";
// import freshBurger from "../../assets/fresh-burger.png";
// import hipsster from "../../assets/hipsster.png";
import revenue_ad from "../../assets/revenue-advertising.jpeg";
import voice_parkinson from "../../assets/voice-parkinson.png";
import tic_tac_toe from "../../assets/tic-tac-toe.png";
import sort from "../../assets/sorting.jpeg";
import calculator from "../../assets/calculator.png";
import headwater from "../../assets/headwater.jpeg";
import distinguish_parkinson from "../../assets/distinguish-parkinson.png";
import predict from "../../assets/it-project-predict.jpg";
import goods from "../../assets/goods-management.jpeg/";
import govhack from "../../assets/govhack.png/";
import book from "../../assets/bookwormia.png/";
import mango from "../../assets/mango.png/";



function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
                <ProjectCard
          src={book}
          link="https://github.com/Four-Musketeers-E-Commerce/mobile"
          h3="Book-Selling Platform"
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
          p="As Tech Lead at GovHack 2025, I built an FAQ chatbot using Dialogflow to help participants easily access rules, and event information, reduce confusion during the hackathon by providing quick, accurate answers in real time, creating a smoother experience for both newcomers and returning participants."
        />
        <ProjectCard
          src={revenue_ad}
          link="https://github.com/QuangThuanNGUYEN/Linear_regression_revenue_advertising_prediction.git"
          h3="Revenue Prediction (Python)"
          p="A custom multiple linear regression model to predict revenue based on investment in three advertising channels."
        />
        <ProjectCard
          src={voice_parkinson}
          link="https://github.com/QuangThuanNGUYEN/https://github.com/QuangThuanNGUYEN/Parkinson-Linear-Regression.git.git"
          h3="Diagnose the Severity of Parkinson’s Disease (Python)"
          p="Analyzed extensive patient voice data to predict Parkinson’s Disease severity."
        />
        <ProjectCard
          src={tic_tac_toe}
          link="https://github.com/QuangThuanNGUYEN/WaterNehttps://github.com/QuangThuanNGUYEN/Tic_Tac_Toe_C.gittwork.git"
          h3="BookWormia"
          p="An online marketplace for buying and selling books, built with React Native for the frontend and Appwrite as the backend. Features include user authentication, book listings, reviews, and a smooth checkout experience. Designed for scalability and a seamless user experience on mobile devices."
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
          link="https://github.com/QuangThuanNGUYEN/WaterNetwork.git"
          h3="Goods Management System (C)"
          p="A console-based goods management system in C, employing pointers for dynamic memory allocation. The application manages product information utilized file I/O for data persistence, showcasing proficiency in structures, file manipulation, and memory management.
"
        />
      </div>
    </section>
  );
}

export default Projects;
