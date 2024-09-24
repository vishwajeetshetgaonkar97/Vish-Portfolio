import React from "react"
import styles from "./styles.module.css";
import ProjectListComponent from "../ProjectListComponent/ProjectListComponent";
import projectsList from "@/utilityFunctions/utilityFunctions";

const Work = (props) => {
    return (
        <div className={`flex flex-col w-full content-center items-center`}>
            <h1 className={`${styles.heading} font-bold uppercase`}>Work</h1>
            <h3 className={`${styles.subheading} uppercase`}>Explore a Few of My Design Projects</h3>
            <div  className={`${styles.container}`}>
            {projectsList.map((projectObj) => {
           
           return (
             <ProjectListComponent
               key={projectObj.id}
               projectName={projectObj.name}
               description={projectObj.description}
               projectLink={projectObj.link}
               imgUrl={projectObj.image}
             />
           );
         })}
            </div>
        </div>
    )
}

export default Work
