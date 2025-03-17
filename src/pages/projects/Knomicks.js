import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Contact from "@/components/Contact/Contact";
import ProductOptionsComponents from '../../components/ProjectsOptionsComponent/ProjectsOptionsComponent'


const Knomicks = (props) => {
  const iframeRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoSrc(
            "https://www.youtube.com/embed/Wt6iRRZI_TA?si=ChVZreYk3Ko8PmId&autoplay=1&mute=1"
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
            <div className={styles.heading}>Knomicks - E-commerce Sneaker Website</div>
            {/* <div className={styles.subHeading}>
            This concept aimed to create an immersive and modern digital experience for Coca-Cola, leveraging 3D technologies to engage users. The website design utilized cutting-edge trends in interactive 3D environments, offering a fresh take on brand engagement.
            </div> */}
          </div>

          <Image
            className={`${styles.mockupImage} w-full h-auto`}
            layout="responsive"
            width={1920}
            height={1080}
            src="/work/knomicks/mockup.png"
            alt="knomicks"
          />

          <div className={styles.role_container}>
            <div className={styles.sub_role_container}>
              <div className={styles.role}>My role</div>
              <div className={styles.role_description_containers}>
                <ul>Developer</ul>
              </div>
            </div>
            <div className={styles.sub_role_container}>
              <div className={styles.role}>Technlogies</div>
              <div className={styles.role_description_containers}>
                <ul>React.js</ul>
                <ul>Framer Motion</ul>
                <ul>Redux</ul>
              </div>
            </div>
            <div className={styles.sub_role_container}>
              <div className={styles.role}>Teams</div>
              <div className={styles.role_description_containers}>
                <ul>Backend Developer</ul>
                <ul>Client</ul>
              </div>
            </div>
            <div className={styles.sub_role_container}>
              <div className={styles.role}>Year</div>
              <div className={styles.role_description_containers}>
                <ul>2025</ul>
              </div>
            </div>
            <button
              className={`${styles.button} `}
              onClick={() => {
                window.open("https://www.knomiks.com/", "_blank");
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
            Knomicks is a modern e-commerce platform designed for sneaker enthusiasts. The website provides a seamless shopping experience with an intuitive UI and robust admin controls for managing store inventory, availability, blog content, and more. Built with scalability and user engagement in mind, Knomicks ensures a smooth and dynamic browsing experience.  </div>
          </div>
          <div className={styles.content_container}>
            <div className={styles.content_header}>My Role</div>
            <div className={styles.content}>
            As the Front-End Developer, I was responsible for developing the entire front-end for over 25+ pages, ensuring a smooth and engaging user experience. I implemented both dark and light modes to enhance adaptability and created a fully responsive design to cater to all devices. Leveraging Framer Motion, I added fluid animations and interactions, while Redux efficiently managed state across the platform. I collaborated closely with the backend developer and client, refining features to deliver an optimized and scalable e-commerce solution.  </div>
          </div>

          <div className={styles.content_container}>
    

            <Image
              className={`${styles.mockupImage} w-full h-auto`}
              layout="responsive"
              width={1920}
              height={1080}
              src="/work/knomicks/p1.png"
              alt="svplay"
            />
            <br />
            <div className={styles.content_header}>
              Design & Development Challenges
            </div>

            <div className={styles.content}>
            Designing and developing Knomicks involved a meticulous approach to balancing aesthetics with functionality. The goal was to create an engaging user experience that is both visually appealing and performance-optimized. The process required careful planning, multiple iterations, and rigorous testing to ensure seamless navigation, fast load times, and smooth interactions. Implementing dark and light modes added an extra layer of complexity, requiring consistent design elements across both themes. Additionally, the responsive design approach ensured a flawless experience across various devices, making sneaker browsing and purchases effortless for users.
            </div>

            <br />
           
            <ul className={styles.points}>
              <li className={styles.content}>
                <b>Ensuring Smooth UX & Performance: </b> Focused on optimizing load times and rendering performance to ensure a fast and engaging shopping experience.
              </li>
              <li className={styles.content}>
                <b>Dark & Light Mode Implementation: </b> Developed a seamless toggle between dark and light themes while maintaining consistent UI elements across all pages.
              </li>
              <li className={styles.content}>
                <b>Inventory & Admin Panel Integration: </b> Worked closely with the backend team to structure API calls efficiently, ensuring real-time updates for store management.
              </li>
              <li className={styles.content}>
                <b>Responsive & Mobile-Friendly Design: </b> Used a mobile-first approach to ensure an optimal experience on all devices.
              </li>
              <li className={styles.content}>
                <b>Testing & Debugging: </b> Conducted multiple iterations and tests to identify and resolve UI/UX issues, ensuring a bug-free experience.
              </li>

              
            </ul>
            
      
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Outcome</div>
            <div className={styles.content}>
            The successful launch of Version 1 (V1) of Knomicks provided users with a seamless platform to browse and purchase sneakers effortlessly. The project delivered a scalable and robust front-end architecture, ensuring a smooth and engaging experience. With a well-structured foundation in place, the website is primed for future enhancements and additional features. Plans for Version 2 (V2) are already in motion, incorporating valuable user feedback and new capabilities to elevate the shopping experience further.
            </div>
          </div>
        </div>
        <ProductOptionsComponents/>
      </main>
      <Contact/>
    </>
  );
};

export default Knomicks;
