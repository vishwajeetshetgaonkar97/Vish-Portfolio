import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Contact from "@/components/Contact/Contact";
import ProductOptionsComponents from "./../../components/ProjectsOptionsComponent/ProjectsOptionsComponent";

const AlbumCovers = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
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
            <div className={styles.heading}>Album Covers's</div>
          </div>

          {isMobile ? (
            <Image
              className={`${styles.mockupImage} w-full h-auto`}
              layout="responsive"
              width={1920}
              height={1080}
              src="/work/AlbumCovers/mMockup.png"
              alt="AlbumCovers series"
            />
          ) : (
            <Image
              className={`${styles.mockupImage} w-full h-auto`}
              layout="responsive"
              width={1920}
              height={1080}
              src="/work/AlbumCovers/mockup.png"
              alt="AlbumCovers series"
            />
          )}

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
              The Album Covers project was an assignment that explored the
              creative process behind designing cover art for different music
              genres, specifically vocal and pop. The goal was to research the
              visual elements typically used in these genres and apply them to
              create distinct album covers that reflect the essence of the
              music. Each cover focused on capturing the unique characteristics
              of its genre, from minimalism and subtlety in vocal music to
              vibrancy and complexity in pop.
            </div>
          </div>
          <div className={styles.content_container}>
            <div className={styles.content_header}>My Role</div>
            <div className={styles.content}>
              As the designer, I was responsible for conducting research into
              album cover design trends across vocal and pop genres. I then
              sketched and created the final cover designs, ensuring that each
              represented the core aesthetics and emotional tone of the music.
              The project involved both design theory and practical
              implementation, allowing me to experiment with various artistic
              techniques.
            </div>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>
              Research & Design Process
            </div>
            <div className={styles.content}>
              The Album Covers project involved an in-depth exploration of two
              distinct music genres: vocal and pop, each with its own unique
              aesthetic and design language.
            </div>

            <br />

            <div className={styles.content_sub_header}>
              Vocal Genre Research
            </div>
            <div className={styles.content}>
              The vocal genre is known for placing emphasis on the artist’s
              voice, often with light instrumental accompaniment. Album covers
              in this genre typically reflect the simplicity and emotional depth
              of the music, focusing on the artist and album title with minimal
              illustrations. The colors used are usually soft, with less
              attention to gradients or heavy visual effects, aligning with the
              clean and understated tone of the music.
            </div>
            {isMobile ? (
              <Image
                className={`${styles.mockupImage} w-full h-auto mt-2`}
                layout="responsive"
                width={1920}
                height={1080}
                src="/work/AlbumCovers/pm1.png"
                alt="AlbumCovers series"
              />
            ) : (
              <Image
                className={`${styles.mockupImage} w-full h-auto mt-2`}
                layout="responsive"
                width={1920}
                height={1080}
                src="/work/AlbumCovers/p1.png"
                alt="AlbumCovers series"
              />
            )}
            <br />
            <div className={styles.content_sub_header}>Pop Genre Research</div>
            <div className={styles.content}>
              In contrast to the vocal genre, pop album covers are often
              vibrant, dynamic, and attention-grabbing. They frequently feature
              complex illustrations or images made specifically for the album,
              reflecting the genre’s energetic and lively nature. Bright, vivid
              colors, gradients, and bold imagery are commonly used to create a
              visually stimulating experience, making the album stand out in a
              crowded market.
            </div>
            {isMobile ? (
              <Image
                className={`${styles.mockupImage} w-full h-auto mt-2`}
                layout="responsive"
                width={1920}
                height={1080}
                src="/work/AlbumCovers/pm2.png"
                alt="AlbumCovers series"
              />
            ) : (
              <Image
                className={`${styles.mockupImage} w-full h-auto mt-2`}
                layout="responsive"
                width={1920}
                height={1080}
                src="/work/AlbumCovers/p2.png"
                alt="AlbumCovers series"
              />
            )}
            <br />
            <div className={styles.content_header}>
              Design & Development Challenges
            </div>
            <div className={styles.content}>
              Throughout the project, one of the key challenges was ensuring
              that the album covers accurately represented the music genres
              while maintaining a visually engaging design. For the vocal genre,
              it was important to strike the right balance between minimalism
              and interest, while the pop genre required experimentation with
              vivid colors and gradients without making the design overwhelming.
              Another challenge was aligning the typeface, colors, and
              illustration style in a cohesive manner to reflect the intended
              mood of the music.
            </div>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Conclusion</div>
            <div className={styles.content}>
              The Album Covers project allowed me to gain a deeper understanding
              of genre-specific design techniques and how to apply them
              effectively. It was a valuable exercise in balancing research with
              creativity, as I needed to adhere to genre conventions while still
              expressing original artistic ideas. The final covers demonstrated
              the contrast between vocal and pop music, both visually and
              conceptually. This project significantly enhanced my ability to
              create tailored, genre-specific designs and improved my technical
              skills in Adobe Illustrator and Photoshop. The project also
              expanded my understanding of color theory, typography, and the
              impact of minimal versus complex design approaches, preparing me
              for future work in creating engaging, genre-tailored designs.
            </div>
          </div>
        </div>
        <ProductOptionsComponents />
      </main>
      <Contact />
    </>
  );
};

export default AlbumCovers;
