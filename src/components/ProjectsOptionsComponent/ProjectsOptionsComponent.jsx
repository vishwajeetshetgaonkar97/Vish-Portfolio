import React, { useEffect, useState } from "react";
import ProjectListComponent from '../ProjectListComponent/ProjectListComponent';
import projectsList from "../../utilityFunctions/utilityFunctions"; // Adjust the import if necessary
import styles from "./styles.module.css";

const ProjectsOptionsComponent = ({ currentPage }) => {
  const [nextProjects, setNextProjects] = useState([]);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const currentProject = currentPath.split('/').pop(); 

    const currentIndex = projectsList.findIndex(
      (projectObj) => currentProject === projectObj.link.split('/').pop()
    );

    const prevProject = projectsList[currentIndex - 1] || projectsList[projectsList.length - 1]; // If first, go to the last project
    const nextProject = projectsList[currentIndex + 1] || projectsList[0]; // If last, go to the first project

    setNextProjects([prevProject, nextProject]);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>More Projects</div>
      <div className={styles.cardsContainer}>
        {nextProjects.map((projectObj) => (
          <ProjectListComponent
            key={projectObj.id}
            projectName={projectObj.name}
            description={projectObj.description}
            projectLink={projectObj.link}
            imgUrl={projectObj.image}
            tags={projectObj.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsOptionsComponent;
