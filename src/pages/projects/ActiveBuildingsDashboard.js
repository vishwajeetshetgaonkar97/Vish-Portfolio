import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Contact from "@/components/Contact/Contact";

const ActiveBuildingsDashboard = (props) => {
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
            <div className={styles.heading}>ActiveBuildings Dashboard</div>
            {/* <div className={styles.subHeading}>
            This concept aimed to create an immersive and modern digital experience for Coca-Cola, leveraging 3D technologies to engage users. The website design utilized cutting-edge trends in interactive 3D environments, offering a fresh take on brand engagement.
            </div> */}
          </div>

          <Image
            className={`${styles.mockupImage} w-full h-auto`}
            layout="responsive"
            width={1920}
            height={1080}
            src="/work/activeBuildingDashboard/mockup.png"
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

                <ul>CSS</ul>
                <ul>OBS</ul>
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
              The ActiveBuildings Dashboard is an interactive interface that
              monitors and displays real-time environmental conditions, focusing
              on air quality, temperature, and humidity across indoor and
              outdoor areas of client buildings. The dashboard is powered by
              sensor data, providing users with crucial insights into various
              air quality metrics such as PM2.5, CO2, ozone, SOx, PM10, TVOC,
              NOx, and CO levels. Each state is color-coded (Good, Moderate,
              Bad) for immediate status visibility. The dashboard adapts
              dynamically to layout changes based on sensor configurations.
            </div>
          </div>
          <div className={styles.content_container}>
            <div className={styles.content_header}>My Role</div>
            <div className={styles.content}>
              As the lead developer, I was responsible for several key
              contributions, working closely with both backend and design teams
              to create a pixel-perfect, responsive dashboard. The system had to
              be highly accurate as it was displayed on large TV projectors and
              big screens, where visual precision was critical. OBS was used for
              superimposing visuals to ensure flawless execution on large
              displays.
            </div>
            <br />

            <div className={styles.content_sub_header}>
              Air Quality Visualization
            </div>
            <div className={styles.content}>
              Integrated backend APIs to display real-time data for various air
              quality metrics. The dashboard adjusted layouts based on sensor
              availability and configurations.
            </div>
            <br />
            <div className={styles.content_sub_header}>Custom Layouts</div>
            <div className={styles.content}>
              Developed multiple layout options that dynamically adjusted based
              on backend input. Each layout had to meet strict pixel-perfect
              standards due to the large-scale visual projections.
            </div>
            <br />
            <div className={styles.content_sub_header}>
              Color-coded Status Indicators
            </div>
            <div className={styles.content}>
              Implemented a color-coding system to visually represent the
              current air quality (Bad, Moderate, Good), making it easy for
              users to assess conditions at a glance.
            </div>
          </div>

          <div className={styles.content_container}>
            <Image
              className={`${styles.mockupImage} w-full h-auto`}
              layout="responsive"
              width={1920}
              height={1080}
              src="/work/activeBuildingDashboard/p1.png"
              alt="svplay"
            />

            <Image
              className={`${styles.mockupImage} w-full h-auto mt-6`}
              layout="responsive"
              width={1920}
              height={1080}
              src="/work/activeBuildingDashboard/p2.png"
              alt="svplay"
            />
            <br />
            <br />
            <div className={styles.content_header}>Project Highlights</div>
            <br />
            <div className={styles.content_sub_header}>
              Real-time Data Monitoring
            </div>
            <div className={styles.content}>
              The dashboard tracks and updates environmental metrics instantly,
              providing users with up-to-date information on temperature,
              humidity, and air quality.
            </div>
            <br />
            <div className={styles.content_sub_header}>
              Dynamic and Flexible Layouts
            </div>
            <div className={styles.content}>
              Each sensor configuration triggers a unique layout, ensuring the
              data is presented optimally based on the active sensors.
            </div>
            <br />
            <div className={styles.content_sub_header}>
              Pixel-perfect Design
            </div>
            <div className={styles.content}>
              High visual standards were maintained for display on large screens
              and projectors, requiring precise alignment and layout
              consistency.
            </div>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Outcome</div>
            <div className={styles.content}>
              The ActiveBuildings Dashboard was successfully deployed and
              received positive feedback from clients for its accuracy,
              usability, and flexibility. The project strengthened my expertise
              in React.js, real-time data integration, and ensuring
              pixel-perfect precision for large-scale displays.
            </div>
          </div>
        </div>
      </main>
      <Contact/>
    </>
  );
};

export default ActiveBuildingsDashboard;
