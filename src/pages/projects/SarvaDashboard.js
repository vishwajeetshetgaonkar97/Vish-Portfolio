import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Contact from "@/components/Contact/Contact";

const SarvaDashboard = (props) => {
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
            <div className={styles.heading}>Sarva Dashboard</div>
            {/* <div className={styles.subHeading}>
            This concept aimed to create an immersive and modern digital experience for Coca-Cola, leveraging 3D technologies to engage users. The website design utilized cutting-edge trends in interactive 3D environments, offering a fresh take on brand engagement.
            </div> */}
          </div>

          <Image
            className={`${styles.mockupImage} w-full h-auto`}
            layout="responsive"
            width={1920}
            height={1080}
            src="/work/sarvaDashboard/mockup.png"
            alt="svplay"
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
                <ul>Chart.js</ul>
                <ul>CSS</ul>
              </div>
            </div>
            <div className={styles.sub_role_container}>
              <div className={styles.role}>Teams</div>
              <div className={styles.role_description_containers}>
                <ul>Client Project</ul>
              </div>
            </div>
            <div className={styles.sub_role_container}>
              <div className={styles.role}>Year</div>
              <div className={styles.role_description_containers}>
                <ul>2022</ul>
              </div>
            </div>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Project Summary</div>
            <div className={styles.content}>
              The Sarva Dashboard is a client-facing interface designed for
              monitoring air quality conditions across buildings and their
              surrounding environments. It features an interactive map
              showcasing the locations of installed devices and provides both
              graphical and textual data on air quality metrics.
            </div>
          </div>
          <div className={styles.content_container}>
            <div className={styles.content_header}>My Role</div>
            <div className={styles.content}>
              As the lead developer for this freelance project, I collaborated
              closely with the design and operations teams to align with project
              goals. After an initial meeting to establish requirements, I began
              development immediately. The key features of the dashboard
              include:
            </div>
            <br />
            <div className={styles.content_sub_header}>Device Mapping</div>
            <div className={styles.content}>
              Displaying all installed air quality monitoring devices in client
              buildings and their vicinity.
            </div>
            <br />
            <div className={styles.content_sub_header}>Data Visualization</div>
            <div className={styles.content}>
              Utilizing Chart.js for graphical representation of air quality
              data, ensuring users can easily interpret the information.
            </div>
            <br />
            <div className={styles.content_sub_header}>Responsive Design</div>
            <div className={styles.content}>
              Ensuring the dashboard is visually appealing and user-friendly
              across various devices.
            </div>
            <br />
            <div className={styles.content}>
              The core development phase lasted one week, followed by iterative
              adjustments based on client feedback. A rigorous testing process
              ensured the dashboard's reliability before deployment.
            </div>
          </div>

          <div className={styles.content_container}>
            <Image
              className={`${styles.mockupImage} w-full h-auto`}
              layout="responsive"
              width={1920}
              height={1080}
              src="/work/sarvaDashboard/p1.png"
              alt="svplay"
            />
            <br />

            <div className={styles.content_header}>Project Highlights</div>
            <div className={styles.content}>
              The Sarva Dashboard provides real-time air quality information,
              enabling users to effectively monitor environmental conditions.
              Emphasizing user experience, it features an intuitive interface
              for seamless navigation and quick access to critical data. A
              collaborative effort with the design team ensured visual
              consistency and functionality aligned with user needs. Below are
              the key features that enhance the dashboard's usability:
            </div>
            <br />
            <div className={styles.content_sub_header}>
              Dynamic Data Display
            </div>
            <div className={styles.content}>
              Offers real-time air quality metrics, allowing users to monitor
              environmental conditions instantly and make data-driven decisions.
            </div>
            <br />
            <div className={styles.content_sub_header}>
              Intuitive User Interface
            </div>
            <div className={styles.content}>
              Designed with a focus on user experience, ensuring seamless
              navigation and easy access to critical information.
            </div>
            <br />
            <div className={styles.content_sub_header}>
              Collaborative Development Approach
            </div>
            <div className={styles.content}>
              Engaged closely with the design team throughout the project
              lifecycle to ensure visual consistency and functional
              effectiveness tailored to user expectations.
            </div>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Outcome</div>
            <div className={styles.content}>
              The Sarva Dashboard successfully met the client's air quality
              monitoring needs by providing an engaging and informative user
              experience. The project emphasized agile development practices,
              effective teamwork, and thorough testing, resulting in a robust
              and visually appealing solution. This experience reinforced my
              skills in React.js and data visualization and showcased my ability
              to collaborate effectively with cross-functional teams to deliver
              impactful projects.
            </div>
          </div>
        </div>
      </main>
      <Contact/>
    </>
  );
};

export default SarvaDashboard;
