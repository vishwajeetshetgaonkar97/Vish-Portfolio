import React from "react";
import styles from "./styles.module.css";

const ProjectListComponent = ({
  projectName = "",
  description = "",
  projectLink = "/",
  imgUrl = "",
  tags=""
}) => {
  return (
    <div
      className={styles.cardWrapper}
      onClick={() => {
        location.href = projectLink;
      }}
    >
      <img src={imgUrl} alt="projectImage" />
      <div className={styles.cardContent}>
       
        <div className={styles.cardWrapperHeading}>{projectName}</div>
        <div className={styles.cardWrapperDescription}>{description}</div>
        <div className={styles.tagsInfo}>{tags}</div>
      </div>
    </div>
  );
};

export default ProjectListComponent;
