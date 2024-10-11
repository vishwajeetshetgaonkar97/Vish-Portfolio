import React, { useState, useEffect, Suspense, useCallback } from "react";
import styles from "./styles.module.css";
import ProjectListComponent from "../ProjectListComponent/ProjectListComponent";
import projectsList from "@/utilityFunctions/utilityFunctions";

const Work = (props) => {
  const [tabSelected, setTabSelected] = useState("D");

  const handleOnClick = (click) => {
    setTabSelected(click);
  };

  return (
    <div className={`flex flex-col w-full content-center items-center pb-6`}>
      <h1 className={`${styles.heading} font-bold uppercase`}>Work</h1>
      <h3 className={`${styles.subheading} uppercase`}>
      A Showcase of My Design, Development, and Various Creative Endeavors
      </h3>
      <div className={`${styles.buttonContainer}`}>
        <button
          className={`${styles.button} ${tabSelected==="D" && styles.buttonActive}`}
          onClick={() => handleOnClick("D")}
        >
          Design
        </button>{" "}
        <button
          className={`${styles.button}  ${tabSelected==="Dev" && styles.buttonActive}`}
          onClick={() => handleOnClick("Dev")}
        >
          Development
        </button>{" "}
        <button
          className={`${styles.button}  ${tabSelected==="O" && styles.buttonActive}`}
          onClick={() => handleOnClick("O")}
        >
          Others
        </button>
      </div>

      <div className={`${styles.container}`}>
  {projectsList
    .filter((projectObj) => projectObj.category === tabSelected)
    .map((projectObj) => (
      <ProjectListComponent
        key={projectObj.id}
        projectName={projectObj.name}
        description={projectObj.description}
        projectLink={projectObj.link}
        imgUrl={projectObj.image}
        tab={tabSelected}
        tags={projectObj.tags}
      />
    ))}
</div>

    </div>
  );
};

export default Work;
