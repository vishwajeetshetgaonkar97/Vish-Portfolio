import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const About = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef(null);

  const skillImages = [
    "/skills/1.png",
    "/skills/2.png",
    "/skills/3.png",
    "/skills/4.png",
    "/skills/5.png",
    "/skills/6.png",
    "/skills/7.png",
    "/skills/8.png",
    "/skills/9.jpg",
  ];



  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2, // Trigger when 50% of the element is visible
      }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  return (
    <div
    id="about"
      className={`${styles.wrapContainer} `}
    >
      <h1
        ref={headingRef}
        className={`${styles.heading}  ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transition-all duration-700 ease-in-out`}
      >
        As a <span>UI/UX designer</span> with a keen understanding of
        development, I specialize in creating seamless digital experiences that
        prioritize both usability and aesthetics. With over <span>3 years</span>{" "}
        of experience at SportVot and various freelance projects, I’ve led the
        design of <span>user-centered platforms</span>—ranging from intuitive
        mobile apps to complex dashboards—each tailored to enhance user
        engagement and satisfaction. My design process is rooted in{" "}
        <span>user research, prototyping, and iteration</span> to ensure every
        solution is functional, visually appealing, and impactful. I create
        designs that not only look great but are also technically sound and
        scalable.
      </h1>
      <div className={styles.skills}>
        {skillImages.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Skill ${index + 1}`}
            width={60}
            height={60}
            className={styles.skillImage}
          />
        ))}
      </div>

    
    </div>
  );
};

export default About;
