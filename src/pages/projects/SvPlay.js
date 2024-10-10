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
            <div className={styles.heading}>Sv-Play</div>
            <div className={styles.subHeading}>
              A turf booking app designed for local users, offering seamless
              sharing across multiple platforms.
            </div>
          </div>

          <Image
            className={`${styles.mockupImage} w-full h-auto`}
            layout="responsive"
            width={1920}
            height={1080}
            src="/work/svplay/svplayHero.png"
            alt="svplay"
          />

          <div className={styles.role_container}>
            <div className={styles.sub_role_container}>
              <div className={styles.role}>My role</div>
              <div className={styles.role_description_containers}>
                <ul>Design Lead</ul>
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
                <ul>User Research</ul>
              </div>
            </div>

            <div className={styles.sub_role_container}>
              <div className={styles.role}>Teams</div>
              <div className={styles.role_description_containers}>
                <ul>Founders</ul>
                <ul>Product Managers</ul>
                <ul>Marketers</ul>
                <ul>Developers</ul>
                <ul>Illustrators</ul>
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
              I helped SportVot venture into a new market by designing a sleek
              and modern app UI for local turf bookings. The goal was to create
              a simple yet visually engaging interface that allowed users to
              easily discover turfs, book available slots, and even create
              matches with friends or others in the area. Additional features
              like adding snacks, a built-in wallet, and a notification system
              further enhanced the user experience. <br /> <br />
              This project played a crucial role in SportVot's entry into the
              turf booking market, providing important insights that were later
              integrated into the overall product.
            </div>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Outcome Statement</div>
            <div className={styles.content}>
              A modern and visually engaging app UI for turf bookings helped
              SportVot successfully enter a new market. The design simplified
              turf discovery, booking, and match creation, while additional
              features like a built-in wallet and notifications enhanced the
              user experience. This project contributed to increased user
              engagement and provided key insights, which were instrumental in
              integrating the solution into SportVot’s broader product
              ecosystem. As a result, SportVot was able to expand its service
              offerings and strengthen its position in the market.
            </div>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Users And Need</div>
            <div className={styles.content}>
              The primary users were athletes and sports enthusiasts who
              frequently played sports like cricket and football on turfs, which
              were rapidly emerging across different parts of India. However,
              there was no dedicated platform for booking these turfs or
              organizing matches, making it difficult to find players to team up
              with.
              <br /> <br />
              Our research revealed that users wanted a seamless way to discover
              available turfs, book matches, and easily connect with other
              players. Additionally, they expressed interest in custom options
              such as adding snacks, similar to the convenience of a theater
              experience but tailored to sports. These needs highlighted the
              importance of building a simple, user-friendly platform that could
              streamline the entire turf booking process and enhance the overall
              experience.
            </div>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>My Role</div>
            <div className={styles.content}>
              As the Designer, I was responsible for researching user needs,
              designing the app interface, conducting usability tests, and
              iterating on the product based on user feedback. I collaborated
              with tech teams, product managers, illustrators, and founders to
              ensure that our design aligned with the overall vision for the
              turf booking platform.
              <br /> <br />
              we also used modern Figma techniques like auto-layout and
              components to streamline our design process. By mapping out
              different user flows and considering edge cases, we aimed to
              create a friendly and intuitive experience for athletes and sports
              enthusiasts.
            </div>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Mockups</div>

            <Image
              className={`${styles.mockupImage} w-full h-auto mt-4`}
              layout="responsive"
              width={1920}
              height={1080}
              src="/work/svplay/p1.png"
              alt="svplay"
            />

            <Image
              className={`${styles.mockupImage} w-full h-auto mt-4`}
              layout="responsive"
              width={1920}
              height={1080}
              src="/work/svplay/f1.png"
              alt="svplay"
            />

            <Image
              className={`${styles.mockupImage} w-full h-auto mt-4`}
              layout="responsive"
              width={1920}
              height={1080}
              src="/work/svplay/f2.png"
              alt="svplay"
            />

            <Image
              className={`${styles.mockupImage} w-full h-auto mt-4`}
              layout="responsive"
              width={1920}
              height={1080}
              src="/work/svplay/f3.png"
              alt="svplay"
            />

            <Image
              className={`${styles.mockupImage} w-full h-auto mt-4`}
              layout="responsive"
              width={1920}
              height={1080}
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
            <div className={styles.content_sub_header}>
              Phase 1: Stakeholder Design Validation
            </div>
            <div className={styles.content}>
              Involved internal testing with managers and founders to ensure the
              initial design met the project’s goals.
            </div>
            <br />
            <div className={styles.content_sub_header}>
              Phase 2:Technical Refinement
            </div>
            <div className={styles.content}>
              We collaborated with tech leads to address technical challenges
              and further refine the UI.
            </div>
            <br />
            <div className={styles.content_sub_header}>
              Phase 3: Internal Testing & Refinement
            </div>
            <div className={styles.content}>
              Expanded testing to the internal team, where we gathered more
              insights on user flows and usability, making additional
              refinements.
            </div>
            <br />
            <div className={styles.content_sub_header}>
              Phase 4: User Testing & Final Adjustments
            </div>
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

export default SvPlay;
