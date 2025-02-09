import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";
import ProjectListComponent from "../ProjectListComponent/ProjectListComponent";
import projectsList from "@/utilityFunctions/utilityFunctions";

const Work = (props) => {
  const [tabSelected, setTabSelected] = useState("Dev");
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const buttonContainerRef = useRef(null);
  const projectRefs = useRef([]); // To hold refs for each project

  const handleOnClick = (click) => {
    setTabSelected(click);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false); // Reset visibility if the element is not in view
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (subheadingRef.current) observer.observe(subheadingRef.current);
    if (buttonContainerRef.current) observer.observe(buttonContainerRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (subheadingRef.current) observer.unobserve(subheadingRef.current);
      if (buttonContainerRef.current) observer.unobserve(buttonContainerRef.current);
    };
  }, []);

  // Observe each project component for animation
  useEffect(() => {
    const projectObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          } else {
            entry.target.classList.remove(styles.visible);
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 10% of the element is visible
      }
    );

    projectRefs.current.forEach(ref => {
      if (ref) projectObserver.observe(ref);
    });

    return () => {
      projectRefs.current.forEach(ref => {
        if (ref) projectObserver.unobserve(ref);
      });
    };
  }, [tabSelected]);

  return (
    <div id="work" className={`flex flex-col w-full content-center items-center md:px-0 px-2 md:pb-6 pb-2`}>
      <h1
        ref={headingRef}
        className={`${styles.heading} uppercase  ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transition-all duration-700 ease-in-out`}
      >
        Work
      </h1>
      <h3
        ref={subheadingRef}
        className={`${styles.subheading}  ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transition-all duration-700 ease-in-out`}
      >
       Showcasing Design, Development, and Creative Innovation
      </h3>
      <div
        ref={buttonContainerRef}
        className={`${styles.buttonContainer} ${
          true ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transition-all duration-700 ease-in-out`}
      >
      
        <button
          className={`${styles.button} ${tabSelected === "Dev" && styles.buttonActive}`}
          onClick={() => handleOnClick("Dev")}
        >
          Development
        </button>
        <button
          className={`${styles.button} ${tabSelected === "D" && styles.buttonActive}`}
          onClick={() => handleOnClick("D")}
        >
          Design
        </button>
        <button
          className={`${styles.button} ${tabSelected === "O" && styles.buttonActive}`}
          onClick={() => handleOnClick("O")}
        >
          Others
        </button>
      </div>

      <div className={`${styles.container}`}>
        {projectsList
          .filter((projectObj) => projectObj.category === tabSelected)
          .map((projectObj, index) => (
            <ProjectListComponent
              key={projectObj.id}
              projectName={projectObj.name}
              description={projectObj.description}
              projectLink={projectObj.link}
              imgUrl={projectObj.image}
              tags={projectObj.tags}
              ref={(el) => (projectRefs.current[index] = el)} // Assign ref for each project
            />
          ))}
      </div>
    </div>
  );
};

export default Work;
