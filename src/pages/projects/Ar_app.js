import React from "react";
import styles from "./styles.module.css";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";

const SvPlay = (props) => {
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
            <div className={styles.heading}>Nienkämper Ar App</div>
            <div className={styles.subHeading}>
              Nienkämper is an internationally recognized designer and
              manufacturer of fine office furniture. Nienkämper is committed to
              being at the forefront of innovation; collaborating with
              forward-thinking designers; and pushing the boundaries of
              technology.
            </div>
          </div>

          <Image
            className={`${styles.mockupImage} w-full h-auto`}
            layout="responsive"
            width={1920}
            height={1080}
            src="/work/ar_app/mockup.png"
            alt="svplay"
          />

          <div className={styles.role_container}>
            <div className={styles.sub_role_container}>
              <div className={styles.role}>My role</div>
              <div className={styles.role_description_containers}>
                <ul>User Researcher</ul>
                <ul>UX Designer</ul>
                <ul>UI Designer</ul>
              </div>
            </div>

            <div className={styles.sub_role_container}>
              <div className={styles.role}>Deliverables</div>
              <div className={styles.role_description_containers}>
                <ul>Usability Testing</ul>
                <ul>High Fidelity Design</ul>
                <ul>Low Fidelity Design</ul>
                <ul>User Research</ul>
              </div>
            </div>

            <div className={styles.sub_role_container}>
              <div className={styles.role}>Teams</div>
              <div className={styles.role_description_containers}>
                <ul>Client</ul>
              </div>
            </div>

            <div className={styles.sub_role_container}>
              <div className={styles.role}>Year</div>
              <div className={styles.role_description_containers}>
                <ul>2023</ul>
              </div>
            </div>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Project Summary</div>
            <div className={styles.content}>
              Nienkämper, an internationally recognized office furniture
              manufacturer, explored the possibility of integrating augmented
              reality (AR) capabilities into their mobile app. The goal was to
              allow users to visualize Nienkämper’s furniture in real-world
              environments, providing an immersive experience. The project
              involved researching competitive AR apps, defining user needs, and
              designing prototypes to test the concept’s feasibility.
            </div>
          </div>
          <div className={styles.content_container}>
            <div className={styles.content_header}>Outcome Statement</div>
            <div className={styles.content}>
              The project produced valuable insights through design reviews,
              user personas, and prototype testing. While it is uncertain
              whether full AR functionality was implemented, the concept
              demonstrated potential for enhancing user interaction and
              improving the overall customer experience.{" "}
            </div>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Users And Need</div>
            <div className={styles.content}>
              The primary users for this concept were office managers, interior
              designers, and architects who required a tool to visualize
              Nienkämper's furniture in their actual office environments. These
              users needed a seamless way to preview furniture without
              physically visiting a showroom, as well as the ability to
              customize elements like materials, colors, and configurations. An
              intuitive AR interface would allow them to easily place, scale,
              and rotate furniture in real-time, helping them make more informed
              decisions about their office layouts.
            </div>
            <Image
              className={`${styles.mockupImage} w-full h-auto mt-4`}
              layout="responsive"
              width={1920}
              height={1080}
              src="/work/ar_app/p.png"
              alt="svplay"
            />
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>My Role</div>
            <div className={styles.content}>
              my primary responsibilities included conducting a comprehensive
              design review, creating low-fidelity and high-fidelity mockups,
              and overseeing the testing process. I developed initial low-fi
              wireframes to outline the user journey and interactions, then
              moved on to high-fi mockups to provide a polished, brand-aligned
              visual design. I also conducted multiple rounds of user testing to
              ensure the AR feature was intuitive and met user expectations,
              gathering feedback to refine the final design.
            </div>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Design Review</div>
            <br />
            <div className={styles.content_sub_header}>Visual Design</div>
            <div className={styles.content}>
              use of high-quality images and a clean, minimalistic design gives
              the website a premium feel.
            </div>
            <br />
            <div className={styles.content_sub_header}>Branding</div>
            <div className={styles.content}>
              The design, imagery, and content all align well with the brand’s
              identity as a high-end furniture manufacturer.
            </div>
            <br />
            <div className={styles.content_sub_header}>Consistency</div>
            <div className={styles.content}>
              The website maintains a consistent design language across
              different pages. use of a consistent color palette, typography,
              and layout helps in creating a balanced user experience.
            </div>
            <br />
            <div className={styles.content_sub_header}>Usability</div>
            <div className={styles.content}>
              website is user-friendly with clear navigation and well-organized
              content. However, some users might find the product page dropdown
              a bit overwhelming because of the amount of information presented.
            </div>
            <br />
            <div className={styles.content_sub_header}>
              Mobile Responsiveness
            </div>
            <div className={styles.content}>
              website is responsive and provides a good user experience on both
              desktop and mobile devices.{" "}
            </div>
            <br />
            <br />
            <div className={styles.content_header}>
              Competitive Reviews of Apps the use AR
            </div>

            <Image
              className={`${styles.mockupImage} w-full h-auto mt-2`}
              layout="responsive"
              width={1920}
              height={1080}
              src="/work/ar_app/r.png"
              alt="svplay"
            />
            <br />
            <br />
            <div className={styles.content_header}>Lo-Fi</div>
            <Image
              className={`${styles.mockupImage} w-full h-auto `}
              layout="responsive"
              width={1920}
              height={1080}
              src="/work/ar_app/l.png"
              alt="svplay"
            />
            <div className={`${styles.content_header} mt-6`}>Hi-Fi</div>
            <Image
              className={`${styles.mockupImage} w-full h-auto `}
              layout="responsive"
              width={1920}
              height={1080}
              src="/work/ar_app/hifi.png"
              alt="svplay"
            />
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Conclusion</div>
            <div className={styles.content}>
              The Nienkämper AR app project provided a unique opportunity to
              combine innovation with user needs, resulting in an immersive
              solution for a high-end office furniture manufacturer. Through
              comprehensive user research, competitive analysis, and usability
              testing, I discovered how augmented reality can enhance customer
              experiences by enabling real-time visualization and customization
              of products. As a UX Designer and User Researcher, I created
              low-fidelity wireframes and high-fidelity mockups that transformed
              user requirements into a polished, interactive prototype.
              <br /> <br />
              This project showcased my ability to lead the design process from
              concept to usability testing, ensuring the AR feature was both
              intuitive and aligned with the brand’s premium identity. The
              feedback-driven iterations refined the user interface, delivering
              a solution that met user expectations and supported business
              objectives. I am excited to leverage my experience in AR
              integration and design thinking in future UI/UX Designer roles,
              where I can create impactful digital experiences.
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SvPlay;
