import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Contact from "@/components/Contact/Contact";
import ProductOptionsComponents from '../../components/ProjectsOptionsComponent/ProjectsOptionsComponent'


const SignCastLedScreenTool = (props) => {
  const iframeRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoSrc(
            "https://www.youtube.com/embed/Gwu7Hu04ifM?si=2zw6LqSPWXlXrnAz&autoplay=1&mute=1"
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
            <div className={styles.heading}>LED Screen Install Tool</div>
            {/* <div className={styles.subHeading}>
            This concept aimed to create an immersive and modern digital experience for Coca-Cola, leveraging 3D technologies to engage users. The website design utilized cutting-edge trends in interactive 3D environments, offering a fresh take on brand engagement.
            </div> */}
          </div>

          <Image
            className={`${styles.mockupImage} w-full h-auto`}
            layout="responsive"
            width={1920}
            height={1080}
            src="/work/signcastScreen/mockup.png"
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
                <ul>TypeScript</ul>
                <ul>Fabric.js</ul>
                <ul>TailwindCSS</ul>
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
                <ul>2024</ul>
              </div>
            </div>
            <button
              className={`${styles.button} `}
              onClick={() => {
                window.open("https://signcast-assignment.vercel.app/", "_blank");
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
              The LED Screen Installation Diagram Tool is a user-friendly mini-application designed to simplify the process of creating installation diagrams for LED screens. The tool allows users to select equipment from dropdown menus, automatically generates a detailed installation diagram, and provides a downloadable PDF. It was built to address real-world challenges in the AV (audio-visual) industry, ensuring accuracy, efficiency, and ease of use for designers and installers.
            </div>
          </div>
          <div className={styles.content_container}>
            <div className={styles.content_header}>My Role</div>
            <div className={styles.content}>
              As the developer, I spearheaded the technical implementation of the application, translating functional requirements into a working solution. This included building the frontend interface, integrating real-time diagram logic using Fabric.js, and rigorously testing the tool for usability and performance. The application is currently optimized for desktop use, with a focus on ensuring reliability and seamless interactivity. While aesthetics were considered during development, the primary goal was to deliver a robust and functional tool. </div>
          </div>

          <div className={styles.content_container}>
              <div className={styles.content_header}>Key Features</div>
              <ul className={styles.points}>
                <li className={styles.content}>
                  <b>Equipment Selection: </b> Users select LED screen models, mount types, media players, and receptacle boxes from dropdowns populated by a CSV database linked to Google Sheets.
                </li>
                <li className={styles.content}>
                  <b>Real-Time Diagram Updates:: </b> Dynamic drawing updates display measurements, dimensions, and power outlet locations based on user selections.
                </li>
                <li className={styles.content}>
                  <b>Configuration Options: </b> Toggle between horizontal/vertical orientations, choose “Niche” (recessed) or “Flat Wall” installations, and adjust floor-to-screen distance and niche depth.
                </li>
                <li className={styles.content}>
                  <b>Project Information Input: </b> Input fields for project title, designer’s name, department, screen size, and date.
                </li>
                <li className={styles.content}>
                  <b>PDF Export: </b>  Download the final diagram as a PDF with all configurations, measurements, and project details.
                </li>
              </ul>
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
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Outcome</div>
            <div className={styles.content}>
            This project successfully delivered a practical, user-focused tool that simplifies LED screen installation planning. Built with React.js, Fabric.js, and TypeScript, the application features real-time diagram updates, accurate measurements, and PDF generation. By seamlessly integrating equipment selection and dynamic rendering, the tool met all functional requirements and delivered a polished, efficient solution under tight deadlines. It highlights my ability to create impactful, real-world applications that combine technical expertise with user-centric design.
            </div>
          </div>
        </div>
        <ProductOptionsComponents />
      </main>
      <Contact />
    </>
  );
};

export default SignCastLedScreenTool;
