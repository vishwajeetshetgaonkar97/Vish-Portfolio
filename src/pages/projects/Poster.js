import React from "react";
import styles from "./styles.module.css";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Contact from "@/components/Contact/Contact";

const Poster = (props) => {
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
            <div className={styles.heading}>Everyday Poster Series</div>
          </div>

          <Image
            className={`${styles.mockupImage} w-full h-auto`}
            layout="responsive"
            width={1920}
            height={1080}
            src="/work/poster/mockup.png"
            alt="poster series"
          />

          <div className={styles.role_container}>
            <div className={styles.sub_role_container}>
              <div className={styles.role}>My role</div>
              <div className={styles.role_description_containers}>
                <ul>Graphic Designer</ul>
              </div>
            </div>

            <div className={styles.sub_role_container}>
              <div className={styles.role}>Technologies</div>
              <div className={styles.role_description_containers}>
                <ul>Adobe Illustrator</ul>
                <ul> Photoshop</ul>
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
                <ul>2022</ul>
              </div>
            </div>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Project Summary</div>
            <div className={styles.content}>
              The "Everyday" Poster Series was a creative exploration of
              day-to-day activities, including cooking, driving, and walking,
              through minimalist and abstract design. The goal was to capture
              the essence of these routine actions using a combination of visual
              elements inspired by various design styles, ranging from
              typography to photo collage, while ensuring each poster conveyed a
              unique perspective on the subject.
            </div>
          </div>
          <div className={styles.content_container}>
            <div className={styles.content_header}>Outcome Statement</div>
            <div className={styles.content}>
              I took on the role of the graphic designer, where I was
              responsible for conceptualizing, sketching, and creating the
              entire poster series. Each design focused on different day-to-day
              activities, and I approached the project by drawing inspiration
              from a variety of design sources, applying them creatively to fit
              the context.
            </div>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>My Role</div>
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
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Design Inspiration</div>
            <div className={styles.content}>
              The series was developed through a methodical process, starting
              with sketches influenced by various poster designs that I found
              intriguing. I focused on simplicity, using minimal text, color
              schemes, and single elements to draw attention to the core
              activity in each poster.
            </div>
            <br />
            <Image
              className={`${styles.mockupImage} w-full h-auto`}
              layout="responsive"
              width={1920}
              height={1080}
              src="/work/poster/p1.png"
              alt="poster series"
            />
            <br />
            <div className={styles.content_sub_header}>Inspiration 1</div>
            <div className={styles.content}>
              My first sketch was influenced by posters that use a single prop
              to convey meaning. I kept the design simple, aiming to express the
              concept with minimal text support, ensuring the visual took the
              lead in conveying the message.
            </div>
            <br />
            <div className={styles.content_sub_header}>Inspiration 2</div>
            <div className={styles.content}>
              For my second inspiration, I focused on designs that utilized
              geometric shapes, specifically triangular and circular elements in
              the center. These shapes were paired with subtle colors and
              minimal text, which I found to be a visually compelling approach.
              I translated this into my sketch using similar central elements.
            </div>
            <br />
            <div className={styles.content_sub_header}>Inspiration 3</div>
            <div className={styles.content}>
              I looked to typographic posters for the next source of
              inspiration. Their simplicity, coupled with engaging text layouts
              and strategic use of color, helped me design posters where text
              became an integral part of the visual story.
            </div>
            <br />
            <div className={styles.content_sub_header}>Inspiration 4</div>
            <div className={styles.content}>
              I incorporated ideas from illustration and color-based designs.
              Here, I focused on making the center of the poster align with the
              textual theme. This inspiration allowed me to refine my designs,
              balancing illustration with text.
            </div>
            <br />
            <div className={styles.content_sub_header}>Inspiration 5</div>
            <div className={styles.content}>
              For the final sketches, I was inspired by posters that combined
              photo collages and typography, highlighting a dominant color hue.
              This helped me create differentiation within the poster series,
              ensuring each design maintained a unique identity while still
              being visually cohesive.
            </div>
            <br />
            <br />
            <div className={styles.content_header}>
              Design & Development Challenges
            </div>
            <div className={styles.content}>
              Throughout the process, I faced challenges such as finding the
              right balance between simplicity and engagement. I also
              experimented with various color palettes and text placements,
              refining my designs to ensure they maintained visual harmony while
              still expressing the core ideas behind each activity. Working
              through multiple iterations allowed me to expand my understanding
              of design composition and typography, particularly in a poster
              format.{" "}
            </div>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Conclusion</div>
            <div className={styles.content}>
              The "Everyday" Poster Series was a valuable creative experiment,
              allowing me to explore various design approaches and refine my
              skills in minimalism, typography, and layout design. Each poster
              stands as a reflection of a specific activity, using abstract
              design techniques to evoke an emotional response from viewers
              while maintaining visual simplicity. This project contributed to
              my growth as a designer, helping me become more adept at balancing
              inspiration with original concepts in my work.
            </div>
          </div>
        </div>
      </main>
      <Contact/>
    </>
  );
};

export default Poster;
