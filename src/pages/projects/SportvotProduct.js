import React from "react";
import styles from "./styles.module.css";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";

const SportvotProduct = (props) => {
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
            <div className={styles.heading}>Sportvot</div>
            <div className={styles.subHeading}>
              A end to end solution for all your live production and streaming
              needs, enabling the discovery of sports talent.
            </div>
          </div>

          <Image
            className={`${styles.mockupImage} w-full h-auto`}
            layout="responsive"
            width={1280}
            height={720}
            src="/work/svplay/svplayHero.png"
            alt="svplay"
          />

          <div className={styles.role_container}>
            <div className={styles.sub_role_container}>
              <div className={styles.role}>My role</div>
              <div className={styles.role_description_containers}>
                <ul>Product Designer</ul>
                <ul>Design Lead</ul>
                <ul>User Researcher</ul>
                <ul>UX Designer</ul>
                <ul>UI Designer</ul>
              </div>
            </div>

            <div className={styles.sub_role_container}>
              <div className={styles.role}>Deliverables</div>
              <div className={styles.role_description_containers}>
                <ul>User Research</ul>
                <ul>Usability Testing</ul>
                <ul>High Fidelity Design</ul>
                <ul>Component Libraries</ul>
                <ul>Product Design Libraries</ul>
              </div>
            </div>

            <div className={styles.sub_role_container}>
              <div className={styles.role}>Teams</div>
              <div className={styles.role_description_containers}>
                <ul>Founders</ul>
                <ul>Product Managers</ul>
                <ul>Marketing Team</ul>
                <ul>Illustrators</ul>
                <ul>Developers</ul>
                <ul>Operational Team</ul>
              </div>
            </div>

            <div className={styles.sub_role_container}>
              <div className={styles.role}>Year</div>
              <div className={styles.role_description_containers}>
                <ul>2020 - Now</ul>
              </div>
            </div>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Project Summary</div>
            <div className={styles.content}>
              As the UI/UX Designer at SportVot, I played a pivotal role in
              developing an end-to-end solution for live production and
              streaming needs. I focused on creating a cohesive experience
              across the main website, OTT platform, mobile app, and dashboard
              studio. My objective was to design a user-friendly interface
              catering to a diverse range of users, including avid enthusiasts,
              budding players, sports federations, clubs, organizations,
              streamers, coaches, B2B clients, and both low-tech and high-tech
              users. This interface not only facilitates the discovery of sports
              talent but also streamlines the entire production process for all
              users.
            </div>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Outcome Statement</div>
            <div className={styles.content}>
              Through countless iterations and strategic changes in product
              trajectory, I developed the user interface for SportVot entirely
              from scratch, significantly enhancing user engagement and
              satisfaction and establishing us as the largest sports production
              platform in India. By creating a seamless and intuitive experience
              across multiple platforms, we facilitated the discovery of sports
              talent and streamlined workflows for diverse users. As a result,
              we produced over 300,000 games, featured more than 350,000
              athletes in 20+ countries, and achieved over 100 million digital
              views. This initiative also played a crucial role in driving
              successful fundraising rounds, enabling continued innovation and
              growth.
            </div>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Users And Need</div>
            <div className={styles.content}>
              As the UI/UX Designer at SportVot, I played a multifaceted role
              that encompassed various responsibilities crucial to the project's
              success. Initially joining as a Front-End Developer, I
              transitioned into a design-focused position as the team grew. I
              took the lead in crafting an end-to-end solution for live
              production and streaming, designing everything from scratch to
              ensure a cohesive user experience across the main website, OTT
              platform, mobile app, and dashboard studio.
            </div>

            <div>
              <br />
              <div className={`${styles.content_sub_header} `}>
                My responsibilities included
              </div>
              <br />
              <div className={styles.content_sub_header}>Product Designer</div>
              <div className={styles.content}>
              Conceptualization and creation of user-centric designs ensured that the platform met the needs of diverse users, from avid sports fans to budding athletes and B2B clients.
              </div>
              <br />
              <div className={styles.content_sub_header}>Design Lead:</div>
              <div className={styles.content}>
              Guided the design process through collaboration with various teams, including product managers, marketing, illustrators, and developers, to align on objectives and deliver a unified product.
              </div>
              <br />
              <div className={styles.content_sub_header}>User Researcher</div>
              <div className={styles.content}>
              Conducted user research and usability testing to gather insights into user behaviors and preferences, which informed design decisions and iterations.
              </div>
              <br />
              <div className={styles.content_sub_header}>UX Designer</div>
              <div className={styles.content}>
              Focused on creating intuitive navigation and interaction patterns that ensured users could easily access features and information.
              </div>
              <br />
              <div className={styles.content_sub_header}>UI Designer</div>
              <div className={styles.content}>
              Created high-fidelity designs and component libraries to establish a consistent visual language reflecting SportVot's brand identity.
              </div>
            </div>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Mockups</div>

            <Image
              className={`${styles.mockupImage} w-full h-auto mt-4`}
              layout="responsive"
              width={1280}
              height={720}
              src="/work/svplay/p1.png"
              alt="svplay"
            />

            <Image
              className={`${styles.mockupImage} w-full h-auto mt-4`}
              layout="responsive"
              width={1280}
              height={720}
              src="/work/svplay/f1.png"
              alt="svplay"
            />

            <Image
              className={`${styles.mockupImage} w-full h-auto mt-4`}
              layout="responsive"
              width={1280}
              height={720}
              src="/work/svplay/f2.png"
              alt="svplay"
            />

            <Image
              className={`${styles.mockupImage} w-full h-auto mt-4`}
              layout="responsive"
              width={1280}
              height={720}
              src="/work/svplay/f3.png"
              alt="svplay"
            />

            <Image
              className={`${styles.mockupImage} w-full h-auto mt-4`}
              layout="responsive"
              width={1280}
              height={720}
              src="/work/svplay/f4.png"
              alt="svplay"
            />
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Testing and UI Updates</div>
            <div className={styles.content}>
              As part of the expansion and implementation, we conducted thorough
              testing and made several UI updates to ensure a seamless and
              engaging user experience. The process unfolded over multiple
              iterations, with each phase focused on gathering feedback and
              refining the design.
            </div>
            <br />
            <div className={styles.content_sub_header}>Phase 1</div>
            <div className={styles.content}>
              Involved internal testing with managers and founders to ensure the
              initial design met the project’s goals.
            </div>
            <br />
            <div className={styles.content_sub_header}>Phase 2</div>
            <div className={styles.content}>
              We collaborated with tech leads to address technical challenges
              and further refine the UI.
            </div>
            <br />
            <div className={styles.content_sub_header}>Phase 3</div>
            <div className={styles.content}>
              Expanded testing to the internal team, where we gathered more
              insights on user flows and usability, making additional
              refinements.
            </div>
            <br />
            <div className={styles.content_sub_header}>Phase 4</div>
            <div className={styles.content}>
              We conducted real-world testing with end users, which allowed us
              to make the final adjustments based on their feedback.
            </div>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Conclusion</div>
            <div className={styles.content}>
              The turf booking platform has been a significant success, greatly
              enhancing the experience for athletes and sports enthusiasts. It
              has enabled users to discover turfs, book matches, and connect
              with fellow players seamlessly.
              <br /> <br />
              This project has not only added value for sports lovers but also
              laid the groundwork for SportVot’s expansion into a new market. By
              addressing specific user needs and incorporating feedback
              throughout the design process, we’ve created a platform that
              empowers users to enjoy sports more conveniently and effectively,
              marking a meaningful step forward in our commitment to
              user-centered design.
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SportvotProduct;
