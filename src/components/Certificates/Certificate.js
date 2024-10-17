import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const Certificate = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef(null);

  const certificateImages = [
    {
      src: "/certificate/1.jpg",
      title: "UI UX Design (Udemy)",
      link: "https://www.udemy.com/certificate/UC-fb8fe878-dd9b-43c5-ac33-e31f380703be/",
    },
    {
      src: "/certificate/3.jpg",
      title: "React (Udemy)",
      link: "https://www.udemy.com/certificate/UC-87b57174-d098-4b84-886a-c6378fd9c2b2/",
    },
    {
      src: "/certificate/4.jpeg",
      title: "NextJs (LinkedIn Learning)",
      link: "https://link-to-certificate-4.com",
    },
    {
      src: "/certificate/5.jpeg",
      title: "Bootstrap (LinkedIn Learning)",
      link: "https://www.coursera.org/account/accomplishments/verify/6FYL7L5UH9LK?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    },
    {
      src: "/certificate/2.jpeg",
      title: "LinkedIn Shoutout (Sportvot)",
      link: "https://www.linkedin.com/posts/vishwajeet-shetgaonkar_teamsportvot-activity-6885616379064549376-JOlE?utm_source=share&utm_medium=member_desktop",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2, // Trigger when 10% of the element is visible
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
    <div ref={headingRef} className={styles.certificateSection}>
      {certificateImages.map((certificate, index) => (
        <a
          key={index}
          href={certificate.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.certificateLink} ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } transition-all duration-700 ease-in-out delay-150`}
        >
          <Image
            src={certificate.src}
            alt={`Certificate ${index + 1}`}
            width={220}
            height={220}
            className={`${styles.certificateImage} w-40 h-auto ${styles.hoverEffect}`}
          />
          <p className={styles.certificateTitle}>{certificate.title}</p>
        </a>
      ))}
    </div>
  );
};

export default Certificate;
