import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Contact from "@/components/Contact/Contact";

const CocaCola3D = (props) => {
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
            <div className={styles.heading}>3D Coca-Cola Website Concept</div>
            {/* <div className={styles.subHeading}>
            This concept aimed to create an immersive and modern digital experience for Coca-Cola, leveraging 3D technologies to engage users. The website design utilized cutting-edge trends in interactive 3D environments, offering a fresh take on brand engagement.
            </div> */}
          </div>

          <Image
            className={`${styles.mockupImage} w-full h-auto`}
            layout="responsive"
            width={1920}
            height={1080}
            src="/work/cocaCola/mockup.png"
            alt="svplay"
          />

          <div className={styles.role_container}>
            <div className={styles.sub_role_container}>
              <div className={styles.role}>My role</div>
              <div className={styles.role_description_containers}>
                <ul>Developer</ul>
                <ul>UI Designer</ul>
              </div>
            </div>
            <div className={styles.sub_role_container}>
              <div className={styles.role}>Technlogies</div>
              <div className={styles.role_description_containers}>
                <ul>Next.js</ul>
                <ul>CSS</ul>
                <ul>Spline</ul>
                <ul>Figma</ul>
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
                window.open("https://vish-3d-coca-cola.vercel.app/", "_blank");
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
              This concept aimed to create an immersive and modern digital
              experience for Coca-Cola, leveraging 3D technologies to engage
              users. The website design utilized cutting-edge trends in
              interactive 3D environments, offering a fresh take on brand
              engagement.
            </div>
          </div>
          <div className={styles.content_container}>
            <div className={styles.content_header}>My Role</div>
            <div className={styles.content}>
              I was responsible for both UI design and development, where I
              focused on creating a visually appealing, user-centered
              experience. This project challenged me to experiment with 3D
              elements, interactive transitions, and user flow to achieve an
              engaging interface.
            </div>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Spline Integration</div>

            <div className={styles.content}>
              As a first-time user of Spline, I explored multiple techniques to
              integrate and optimize 3D models. I focused on reducing file
              sizes, simplifying complex designs, and incorporating subtle
              animations to enhance performance without compromising the
              experience.
            </div>

            <Image
              className={`${styles.mockupImage} w-full h-auto`}
              layout="responsive"
              width={1920}
              height={1080}
              src="/work/cocaCola/p1.png"
              alt="svplay"
            />
            <br />
            <div className={styles.content_header}>
              Design & Development Challenges
            </div>

            <div className={styles.content}>
              The process involved multiple iterations and tests, focusing on
              smooth transitions, drag-and-drop interactions, scroll-triggered
              events, and gravity simulations. By frequently refining the
              design, I gained a deeper understanding of 3D UI/UX design
              principles and Spline’s capabilities.
            </div>
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
              The project significantly improved my knowledge of immersive
              design and optimization techniques. This side project was a
              valuable learning experience that not only expanded my design
              skills but also deepened my technical understanding of interactive
              3D web development.
            </div>
          </div>
        </div>
      </main>
      <Contact/>
    </>
  );
};

export default CocaCola3D;
