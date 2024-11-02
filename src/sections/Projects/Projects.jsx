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



function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
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
          h3="Tic Tac Toe Game (C)"
          p="A console-based Tic Tac Toe game with single-player and two-player modes. The single-player mode features a simple AI that randomly selects its moves."
        />
        <ProjectCard
          src={sort}
          link="https://github.com/QuangThuanNGUYEN/Sorting-Algo-Visualizer.git"
          h3="Sorting Algo Visualizer (Python)"
          p="Implementing sorting algorithms like Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, and Heap Sort and visualize the sorting process in real-time, with threading ensuring a responsive interface."
        />
        <ProjectCard
          src={calculator}
          link="https://github.com/QuangThuanNGUYEN/WaterNetwork.git"
          h3="Calculator (Python)"
          p="Using Python and Tkinter, supporting basic arithmetic and advanced functions like logarithms and square roots. Implemented input validation and dynamic display adjustments for enhanced usability.
"
        />
        <ProjectCard
          src={headwater}
          link="https://github.com/QuangThuanNGUYEN/WaterNetwork.git"
          h3="Headwater Network Connectivity and Analysis (Python)"
          p="This project enhances water networks using graph algorithms to detect cycles, connect key points, and identify potential sources. It also organizes information about water sources and river names effectively."
        />
        <ProjectCard
          src={distinguish_parkinson}
          link="https://github.com/QuangThuanNGUYEN/Parkinson-Disease-Diagnose-.git"
          h3="Identify Parkinson’s Disease vs Healthy Individuals (Python)"
          p="Distinguish people with Parkinson’s disease from ones that are healthy based on a dataset of Parkinson's patients and healthy people and the application of statistics."
        />
        <ProjectCard
          src={predict}
          link="https://github.com/QuangThuanNGUYEN/ProjectOutcomePrediction.git"
          h3="Predict the Outcome of an IT Project (Python)"
          p="A machine learning program with data collected from nearly 50 IT projects helps predict the outcome of an IT project with an accuracy level of over 80%."
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
