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
    <div id="about" className={`${styles.wrapContainer} `}>
      <h1
        ref={headingRef}
        className={`${styles.heading}  ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transition-all duration-700 ease-in-out`}
      >
        As a <span>Product Designer</span> and <span>UI/UX Developer</span>, I’ve been crafting <span>intuitive,
        user-centered B2B</span> and <span>B2C</span> digital products for <span>startups</span> since 2020.
        Through my experience at SportVot and in freelance roles, I blend design
        and front-end development to create <span>scalable, high-performance
        solutions</span>. Proficient in <span>React.js, Next.js,</span> and <span>Figma</span>, I’ve led <span>platform
        redesigns</span> and launched <span>web apps</span> that <span>drive user engagement</span> and <span>business
        growth</span>. My <span>data-driven, iterative</span> design process ensures every solution
        is <span>visually compelling, functional, and aligned with business goals.</span>
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
