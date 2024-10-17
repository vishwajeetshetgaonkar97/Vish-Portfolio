import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Contact from "@/components/Contact/Contact";
import ProductOptionsComponents from './../../components/ProjectsOptionsComponent/ProjectsOptionsComponent'

const ThreeJsPortfolio = (props) => {
  const iframeRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoSrc(
            "https://www.youtube.com/embed/KMRZzk_vqgI?si=bVGGUncMM4k8-ucO&autoplay=1&mute=1"
          );
        }
      },
      { threshold: 0.5 } // Triggers when 50% of the element is in view
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => {
      if (iframeRef.current) {
        observer.unobserve(iframeRef.current);
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>Vishwajeet Shetgaonkar</title>
        <meta name="description" content="Vishwajeet Shetgaonker Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <Navbar isProject />

        <div className={styles.main_container}>
          <div className={styles.headingContainer}>
            <div className={styles.heading}>ThreeJs Portfolio Concept</div>
            {/* <div className={styles.subHeading}>
            This concept aimed to create an immersive and modern digital experience for Coca-Cola, leveraging 3D technologies to engage users. The website design utilized cutting-edge trends in interactive 3D environments, offering a fresh take on brand engagement.
            </div> */}
          </div>

          <Image
            className={`${styles.mockupImage} w-full h-auto`}
            layout="responsive"
            width={1920}
            height={1080}
            src="/work/threeJsPortfolio/mockup.png"
            alt="svplay"
          />

          <div className={styles.role_container}>
            <div className={styles.sub_role_container}>
              <div className={styles.role}>My role</div>
              <div className={styles.role_description_containers}>
                <ul>Developer</ul>
                <ul>UI Designer</ul>
                <ul>UX Designer</ul>
              </div>
            </div>
            <div className={styles.sub_role_container}>
              <div className={styles.role}>Technlogies</div>
              <div className={styles.role_description_containers}>
                <ul>Three.js</ul>
                <ul>Next.js</ul>
                <ul>CSS</ul>
               
              </div>
            </div>
            <div className={styles.sub_role_container}>
              <div className={styles.role}>Teams</div>
              <div className={styles.role_description_containers}>
                <ul>Personal Project</ul>
              </div>
            </div>
            <div className={styles.sub_role_container}>
              <div className={styles.role}>Year</div>
              <div className={styles.role_description_containers}>
                <ul>2023</ul>
              </div>
            </div>
            <button
              className={`${styles.button} `}
              onClick={() => {
                window.open("https://vishwajeetshetgaonkar.vercel.app/", "_blank");
              }}
            >
              Project Link{" "}
              <Image
                className={`${styles.buttonIcon} `}
                layout="responsive"
                width={20}
                height={20}
                src="/link.png"
                alt="link"
              />
            </button>{" "}
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Project Summary</div>
            <div className={styles.content}>
            The Three.js Portfolio Concept is an immersive 3D experience, showcasing my exploration and mastery of Three.js and Next.js. The portfolio is designed to highlight innovative concepts through interactive, real-time 3D environments. It serves as a working prototype where I experimented with various features, including smooth transitions, scroll animations, drag-and-drop interactions, and dynamic object manipulation.
            </div>
          </div>
          <div className={styles.content_container}>
            <div className={styles.content_header}>My Role</div>
            <div className={styles.content}>
            As the sole developer and designer, I was responsible for every aspect of this project—learning, designing, prototyping, and developing. I underwent multiple iterations to fine-tune the user experience and visual design.
            </div>
            <br />

            <div className={styles.content_sub_header}>
            Explored & Applied Three.js
            </div>
            <div className={styles.content}>
            Learned the fundamentals of Three.js and applied them to create engaging 3D interactions.
            </div>
            <br />
            <div className={styles.content_sub_header}>Prototyping & Development</div>
            <div className={styles.content}>
            Built a working prototype, iterating based on performance and user interaction feedback.
            </div>
            <br />
            <div className={styles.content_sub_header}>
            UI/UX Design
            </div>
            <div className={styles.content}>
            Designed the overall user interface, focusing on clean visuals and an intuitive experience to keep users engaged.
            </div>
          </div>

          <div className={styles.content_container}>
          <div
              className={`${styles.videoPlayer} w-full relative mt-4`}
              style={{ aspectRatio: "16 / 9" }}
              ref={iframeRef}
            >
              {videoSrc && (
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={videoSrc}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              )}
            </div>

           
            <br />
            <br />
            <div className={styles.content_header}>Project Highlights</div>
            <br />
            <div className={styles.content_sub_header}>
            Interactive 3D Objects
            </div>
            <div className={styles.content}>
            Implemented drag-and-drop features, allowing users to interact with objects directly.
            </div>
            <br />
            <div className={styles.content_sub_header}>
            Smooth Animations
            </div>
            <div className={styles.content}>
            Utilized scroll-based animations and transitions to create fluid, engaging navigation.
            </div>
            <br />
            <div className={styles.content_sub_header}>
            Responsive Design
            </div>
            <div className={styles.content}>
            Ensured a seamless experience across various devices.
            </div>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Outcome</div>
            <div className={styles.content}>
            This project helped enhance my proficiency in Three.js and Next.js, offering a modern and interactive way to present my portfolio. It reflects my continuous learning process and passion for UI/UX design.
            </div>
          </div>
        </div>
        <ProductOptionsComponents/>
      </main>
      <Contact/>
    </>
  );
};

export default ThreeJsPortfolio;
