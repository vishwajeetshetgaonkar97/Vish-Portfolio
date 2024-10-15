import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const ProjectListComponent = ({
  projectName = "",
  description = "",
  projectLink = "/",
  imgUrl = "",
  tags = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`${styles.cardWrapper} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } transition-all duration-700 ease-in-out`}
      onClick={() => {
        location.href = projectLink;
      }}
    >
      <Image src={imgUrl} alt="projectImage"   layout="responsive"
            width={1920}
            height={1080}
            className={`${styles.projectImage} w-full h-auto md:w-auto md:h-[50vh]`}
              />
      <div className={styles.cardContent}>
        <div className={styles.cardWrapperHeading}>{projectName}</div>
        <div className={styles.cardWrapperDescription}>{description}</div>
        <div className={styles.tagsInfo}>{tags}</div>
      </div>
    </div>
  );
};

export default ProjectListComponent;
