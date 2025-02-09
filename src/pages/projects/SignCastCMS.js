import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Contact from "@/components/Contact/Contact";
import ProductOptionsComponents from '../../components/ProjectsOptionsComponent/ProjectsOptionsComponent'

const SignCastLedScreenTool = (props) => {
  const iframeRef1 = useRef(null);
  const iframeRef2 = useRef(null);
  const [videoSrc1, setVideoSrc1] = useState("");
  const [videoSrc2, setVideoSrc2] = useState("");

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoSrc1(
            "https://www.youtube.com/embed/N4J2S27Xxts?si=rQBO2wHqQzEUV7iA&autoplay=1&mute=1"
          );
        }
      },
      { threshold: 0.5 } // Triggers when 50% of the element is in view
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoSrc2(
            "https://www.youtube.com/embed/epX8wJemyik?si=IlAc2yA2_Zur1gJg&autoplay=1&mute=1"
          );
        }
      },
      { threshold: 0.5 } // Triggers when 50% of the element is in view
    );

    if (iframeRef1.current) {
      observer1.observe(iframeRef1.current);
    }

    if (iframeRef2.current) {
      observer2.observe(iframeRef2.current);
    }

    return () => {
      if (iframeRef1.current) {
        observer1.unobserve(iframeRef1.current);
      }
      if (iframeRef2.current) {
        observer2.unobserve(iframeRef2.current);
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
            <div className={styles.heading}>Digital Signage Content Management System (CMS) </div>
          </div>

          <Image
            className={`${styles.mockupImage} w-full h-auto`}
            layout="responsive"
            width={1920}
            height={1080}
            src="/work/signcastFullStack/mockup.png"
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
                <ul>Electron</ul>
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
              className={`${styles.button}`}
              onClick={() => {
                window.open("https://github.com/vishwajeetshetgaonkar97/signcast-assignment-fullstack?tab=readme-ov-file", "_blank");
              }}
            >
              Project Link{" "}
              <Image
                className={`${styles.buttonIcon}`}
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
              The Digital Signage Content Management System (CMS) is a comprehensive solution designed to efficiently manage and display digital signage content. It features a web-based dashboard for content creation and monitoring, paired with an Electron-based display application for rendering content on screens. Built with modern web technologies, the system supports real-time updates, offline playback, and seamless synchronization, ensuring smooth content delivery even in environments with intermittent connectivity. Developed to address the needs of small to medium-sized businesses, this lightweight and user-friendly solution provides robust tools for content management and monitoring, making it a reliable choice for digital signage workflows.  </div>
          </div>
          <div className={styles.content_container}>
            <div className={styles.content_header}>My Role</div>
            <div className={styles.content}>
              As the sole developer, I was responsible for the end-to-end development of the system. This included designing and implementing the web dashboard for content management, building the Electron display application for full-screen content rendering, and integrating WebSocket for real-time updates and synchronization. I also implemented offline capabilities to ensure uninterrupted content playback, designed a clean, responsive, and intuitive user interface, and handled documentation and deployment pipeline setup.
            </div>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Key Features</div>
            <br />
            <div className={styles.content_sub_header}>Web Dashboard</div>
            <ul className={styles.points}>
              <li className={styles.content}>
                <b>Content Creation: </b> Add and edit text, images, shapes, slideshows, and graphs using Fabric.js with drag-and-drop functionality and real-time preview.
              </li>
              <li className={styles.content}>
                <b>Device Monitoring: </b> Track display device status (online/offline) and content playback sync.
              </li>
              <li className={styles.content}>
                <b>User-Friendly UI: </b> Clean, responsive design with intuitive workflows (TailwindCSS).
              </li>
            </ul>

            <br />
            <div className={styles.content_sub_header}>Electron Display App</div>
            <ul className={styles.points}>
              <li className={styles.content}>
                <b>Full-Screen Display: </b> Render content dynamically with WebSocket updates.
              </li>
              <li className={styles.content}>
                <b>Offline Playback: </b> Cache content for seamless playback without internet.
              </li>
              <li className={styles.content}>
                <b>Sync & Controls:  </b> Manual/auto-sync, real-time connection status, and system tray controls.
              </li>
              <li className={styles.content}>
                <b>Error Handling: </b> Sync/playback error notifications with logging for debugging.
              </li>
            </ul>

            <br />
            <div className={styles.content_sub_header}>Offline Capabilities</div>
            <ul className={styles.points}>
              <li className={styles.content}>
                <b>Local Content Storage: </b> Cached for offline use with automatic backups.
              </li>
              <li className={styles.content}>
                <b>Auto-Sync: </b> Syncs new content automatically when the connection is restored.
              </li>
            </ul>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Version 1</div>
            <div className={styles.content}>
              The initial version focuses on core functionalities, including content creation and device monitoring. The Electron app supports basic full-screen content display but lacks offline caching. The UI is functional but needs improvements. Security measures like password hashing and encrypted communication are yet to be implemented. Known issues include a slideshow bug, limitations in screen key validation, and the absence of a production-ready Electron build.
            </div>

            <div
              className={`${styles.videoPlayer} w-full relative mt-4`}
              style={{ aspectRatio: "16 / 9" }}
              ref={iframeRef1}
            >
              {videoSrc1 && (
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={videoSrc1}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              )}
            </div>

            <br />

            <div className={styles.content_header}>Version 2</div>
            <div className={styles.content}>
              This version enhances the platform with improved UI/UX, offline support, and optimized canvas rendering in addition to added functionalities. The Electron app is built for production with offline mode enabled. Security is strengthened with better WebSocket validation. Future improvements will focus on fixing these issues and expanding dynamic content capabilities.
            </div>

            <div
              className={`${styles.videoPlayer} w-full relative mt-4`}
              style={{ aspectRatio: "16 / 9" }}
              ref={iframeRef2}
            >
              {videoSrc2 && (
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={videoSrc2}
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
              This project successfully delivered a robust and intuitive Digital Signage Content Management System (CMS) tailored for seamless content creation, device monitoring, and real-time synchronization. Built with React.js, TypeScript, Fabric.js, and Electron, the system ensures efficient content rendering across multiple screens while supporting offline playback for uninterrupted performance. The implementation of WebSocket-based updates, drag-and-drop content editing, and a clean UI enhances usability, making it a reliable solution for small to medium-sized businesses. The project demonstrates my ability to develop scalable, high-performance applications with modern technologies, emphasizing real-time interactivity, offline capabilities, and a user-centric design approach.
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