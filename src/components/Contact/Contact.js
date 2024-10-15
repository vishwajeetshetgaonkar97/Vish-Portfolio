import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const Contact = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const emailRef = useRef(null);

  const socialMediaLinks = [
    { platform: "linkedin", url: "https://www.linkedin.com/in/vishwajeet-shetgaonkar" },
    { platform: "twitter", url: "https://twitter.com/vshetgaonkar97" },
    { platform: "behance", url: "https://www.behance.net/yourprofile" },
    { platform: "github", url: "https://github.com/vishwajeetshetgaonkar97" },
  ];

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

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }
    
    if (subHeadingRef.current) {
      observer.observe(subHeadingRef.current);
    }

    if (emailRef.current) {
      observer.observe(emailRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
      if (subHeadingRef.current) {
        observer.unobserve(subHeadingRef.current);
      }
      if (emailRef.current) {
        observer.unobserve(emailRef.current);
      }
    };
  }, []);

  return (
    <div className={`${styles.contactSection} mt-24`}>
      <h1
        ref={headingRef}
        className={`${styles.heading}  ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transition-all duration-700 ease-in-out`}
      >
        Get in Touch
      </h1>
      <div
        ref={subHeadingRef}
        className={`${styles.subHeading} ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transition-all duration-700 ease-in-out delay-150`}
      >
        I'm always open to discussing new opportunities, collaborations, or
        ideas. Feel free to reach out!
      </div>
      <div className={`${styles.socialMediaContainer}`}>
        <div
          ref={emailRef}
          className={`${styles.email} ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } transition-all duration-700 ease-in-out delay-300`}
        >
          <a href="mailto:hello@vish.world">hello@vish.world</a>
        </div>
        <div className={`${styles.socialMedia}`}>
          {socialMediaLinks.map(({ platform, url }) => (
            <a key={platform} href={url} target="_blank" rel="noopener noreferrer">
              <Image
                className={`${styles.socialIcon} ${styles.hoverEffect}`}
                src={`/socialMedia/${platform}.png`}
                height={32}
                width={32}
                alt={platform}
              />
            </a>
          ))}
        </div>
      </div>
      <div className={`${styles.footer}`}>
        © 2024 Vishwajeet Shetgaonker. All rights reserved. Crafted with passion
        using Next.js in Canada.
      </div>
    </div>
  );
};

export default Contact;
