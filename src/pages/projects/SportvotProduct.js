import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Contact from "@/components/Contact/Contact";
import ProductOptionsComponents from "./../../components/ProjectsOptionsComponent/ProjectsOptionsComponent";


const SportvotProduct = (props) => {
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
            <div className={styles.heading}>Sportvot</div>
            <div className={styles.subHeading}>
              A end to end solution for all your live production and streaming
              needs, enabling the discovery of sports talent.
            </div>
          </div>

          {isMobile ? (
            <Image
              className={`${styles.mockupImage} w-full h-auto`}
              layout="responsive"
              width={1920}
              height={1080}
              src="/work/sportvot/mMockup.png"
              alt="svplay"
            />
          ) : (
            <Image
              className={`${styles.mockupImage} w-full h-auto`}
              layout="responsive"
              width={1920}
              height={1080}
              src="/work/sportvot/mockup.png"
              alt="svplay"
            />
          )}

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

              <div className={styles.content}>
                My responsibilities included designing and developing the entire
                user interface for SportVot from scratch, ensuring an intuitive
                and seamless experience across multiple platforms. I led the
                design process through continuous iterations, collaborating
                closely with product managers, developers, and marketing teams
                to align on product goals. I conducted user research and
                usability testing to gather insights, which informed design
                decisions and improvements. Additionally, I created
                high-fidelity UI designs and component libraries that ensured
                visual consistency and scalability. My efforts contributed to
                significantly enhancing user engagement, streamlining workflows
                for diverse users, and supporting successful fundraising
                efforts.{" "}
              </div>
            </div>
          </div>

          <div className={styles.content_container}>
            {isMobile ? (
              <Image
                className={`${styles.mockupImage} w-full h-auto `}
                layout="responsive"
                width={1920}
                height={1080}
                src="/work/sportvot/m1.png"
                alt="svplay"
              />
            ) : (
              <Image
                className={`${styles.mockupImage} w-full h-auto `}
                layout="responsive"
                width={1920}
                height={1080}
                src="/work/sportvot/p1.png"
                alt="svplay"
              />
            )}
            <div className={styles.content}>
              <br />
              To ensure consistency across SportVot’s entire product ecosystem,
              I established a comprehensive design system that streamlined the
              design-to-development process. This system included typography,
              buttons, color schemes, and reusable components, ensuring a
              unified look and feel across platforms such as the website, OTT
              platform, mobile app, and dashboard studio. While the color
              palette and fonts were provided by the marketing team, I worked
              within those constraints, finding creative ways to maintain a high
              level of design quality and consistency despite certain
              compromises.
              <br />
              <br />
              I leveraged Figma's Auto Layout to create flexible, responsive
              designs that adapted seamlessly across different screen
              sizes—large desktop screens, tablets, and mobile devices. By
              experimenting with various layouts and sizes, and iterating
              multiple times, I optimized the UI for every platform. The use of
              a design system not only ensured a consistent user experience but
              also made it easier for developers to implement designs
              efficiently by providing a clear, scalable structure.
              <br />
              <br />
              These practices significantly improved the overall design process,
              reducing development time and ensuring that every aspect of the
              product adhered to a consistent visual and functional standard.
              This approach allowed for smoother collaboration between design
              and development teams, resulting in a product that was both
              visually cohesive and easy to maintain.
            </div>
            <div className={`${styles.content_header} mt-6`}>Website</div>
            {isMobile ? (
              <Image
                className={`${styles.mockupImage} w-full h-auto mt-2`}
                layout="responsive"
                width={1920}
                height={1080}
                src="/work/sportvot/m2.png"
                alt="svplay"
              />
            ) : (
              <Image
                className={`${styles.mockupImage} w-full h-auto mt-2`}
                layout="responsive"
                width={1920}
                height={1080}
                src="/work/sportvot/p2.png"
                alt="svplay"
              />
            )}
            <div className={styles.content}>
              <br />
              Over the years, the SportVot website has undergone multiple
              iterations, reflecting the evolving trajectory of the product.
              Through close collaboration with the marketing team, founders, and
              the tech team, we continuously refined the design to ensure the
              website conveyed the right message to our target audience. These
              iterations were driven by strategic shifts in the product’s focus,
              adapting to new market needs and user feedback. This ongoing
              process ensured that the website stayed aligned with our brand’s
              growth, delivering an engaging, user-friendly experience that
              supported both our marketing goals and the overall vision of the
              product.
            </div>
            <div className={`${styles.content_header} mt-6`}>OTT</div>
            {isMobile ? (
              <Image
                className={`${styles.mockupImage} w-full h-auto mt-2`}
                layout="responsive"
                width={1920}
                height={1080}
                src="/work/sportvot/m3.png"
                alt="svplay"
              />
            ) : (
              <Image
                className={`${styles.mockupImage} w-full h-auto mt-2`}
                layout="responsive"
                width={1920}
                height={1080}
                src="/work/sportvot/p3.png"
                alt="svplay"
              />
            )}
            <div className={styles.content}>
              <br />
              The OTT platform has also seen multiple iterations and targeted
              user adaptations over time. Through a series of experiments and
              changes, we continuously refined the design to enhance user
              engagement and satisfaction. By analyzing user feedback and
              behavior, we implemented various strategies to ensure the platform
              met the diverse needs of our audience. These ongoing improvements
              allowed us to create a more intuitive and streamlined viewing
              experience, ultimately aligning with our goals of delivering
              high-quality content while adapting to the ever-changing landscape
              of digital media consumption. Each iteration has brought us closer
              to providing an exceptional OTT experience that resonates with our
              users.{" "}
            </div>

            <div className={`${styles.content_header} mt-6`}>App</div>
            {isMobile ? (
              <Image
                className={`${styles.mockupImage} w-full h-auto mt-2`}
                layout="responsive"
                width={1920}
                height={1080}
                src="/work/sportvot/m4.png"
                alt="svplay"
              />
            ) : (
              <Image
                className={`${styles.mockupImage} w-full h-auto mt-2`}
                layout="responsive"
                width={1920}
                height={1080}
                src="/work/sportvot/p4.png"
                alt="svplay"
              />
            )}
            <div className={styles.content}>
              <br />
              The app has also evolved through multiple iterations, with a key
              feature being the ability to book turfs and games in your
              locality, complemented by add-ons like snacks. In addition to
              these functionalities, the app prioritizes content consumption,
              enabling users to seamlessly access sports content, highlights,
              channels, and events. Continuous feedback and experimentation have
              driven these improvements, creating an intuitive and engaging
              experience that caters to the diverse needs of our users.
            </div>
            <div className={`${styles.content_header} mt-6`}>
              Cloud Studio Dashboard
            </div>
            {isMobile ? (
              <Image
                className={`${styles.mockupImage} w-full h-auto mt-4`}
                layout="responsive"
                width={1920}
                height={1080}
                src="/work/sportvot/m5.png"
                alt="svplay"
              />
            ) : (
              <Image
                className={`${styles.mockupImage} w-full h-auto mt-4`}
                layout="responsive"
                width={1920}
                height={1080}
                src="/work/sportvot/p5.png"
                alt="svplay"
              />
            )}
            <div className={styles.content}>
              <br />
              The cloud studio dashboard has evolved to support scoring for over
              10 sports, including cricket, football, hockey, and basketball,
              offering detailed features for professional users and simplified
              options for newcomers. Users can create events, matches, teams,
              and player profiles with ease, allowing for streamlined management
              of sports activities. The dashboard also supports various ad
              sizes, automated ad placements, and clipping capabilities,
              enhancing the monetization potential. With multiple combinations
              of functionalities tailored to different user needs, the dashboard
              provides a flexible and powerful toolset that accommodates both
              experienced broadcasters and novice users, ensuring a
              comprehensive and engaging experience for all.
            </div>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Testing and UI Updates</div>
            <div className={styles.content}>
              Throughout the product lifecycle, we underwent multiple phases of
              development, feature building, and iterative enhancements. By
              closely collaborating with internal teams, key stakeholders, and
              both close and general clients, we continuously gathered feedback
              to refine the product at every stage. Each phase reflected the
              evolving needs of our users and the strategic direction of the
              company, allowing us to deliver a highly adaptable and scalable
              platform. This approach ensured that the product stayed aligned
              with market demands and user expectations while paving the way for
              future improvements.{" "}
            </div>
            <br />
            <div className={styles.content_sub_header}>
              Phase 1: Initial Website, App, and OTT Development
            </div>
            <div className={styles.content}>
              In the first phase, we focused on developing the website, mobile
              app, and OTT platform. This involved understanding user needs,
              creating wireframes, and iterating based on feedback from teams
              and clients. The goal was to create a solid foundation for the
              platform that met user requirements, delivering a smooth and
              engaging experience across all channels.{" "}
            </div>
            <br />
            <div className={styles.content_sub_header}>
              Phase 2: Cloud Studio Research and Cricket Scoring
            </div>
            <div className={styles.content}>
              The second phase shifted towards the development of the Cloud
              Studio, with a strong emphasis on research, user flows, and
              wireframes. We developed version 1 of the studio, focusing on
              cricket scoring (both detailed and basic) and overlay integration
              for broadcasts. Extensive UX-focused testing helped us ensure a
              smooth and efficient user experience during the scoring and
              broadcasting processes.{" "}
            </div>
            <br />
            <div className={styles.content_sub_header}>
              Phase 3: Full Product Overhaul and Multi-Sport Integration
            </div>
            <div className={styles.content}>
              In the third phase, we overhauled the entire product, including
              the web app, OTT platform, and dashboard. This stage saw the
              addition of 5+ new sports, including complex ones like football,
              basketball, and hockey. Advanced user flows were introduced, and
              feedback loops played a key role in ensuring that the multi-sport
              integration was seamless and efficient.{" "}
            </div>
            <br />
            <div className={styles.content_sub_header}>
              Phase 4: Redesign Based on Feedback and Future Vision
            </div>
            <div className={styles.content}>
              In this phase, with a solid base in place and feedback from
              extensive testing, we realigned the product to match the company's
              evolving trajectory. The entire platform was redesigned,
              incorporating UI/UX improvements based on previous learnings and
              the future needs of the product. This ensured a more scalable,
              user-friendly, and visually engaging platform for the long term.{" "}
            </div>
            {isMobile ? (
              <Image
                className={`${styles.mockupImage} w-full h-auto mt-6`}
                layout="responsive"
                width={1920}
                height={1080}
                src="/work/sportvot/m6.png"
                alt="svplay"
              />
            ) : (
              <Image
                className={`${styles.mockupImage} w-full h-auto mt-6`}
                layout="responsive"
                width={1920}
                height={1080}
                src="/work/sportvot/iterations.png"
                alt="svplay"
              />
            )}
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Conclusion</div>
            <div className={styles.content}>
              To conclude, my journey with SportVot has been defined by my
              dedication to crafting seamless and scalable digital experiences
              for a complex ecosystem. Through innovative design solutions,
              continuous iterations, and close collaboration with
              cross-functional teams, I contributed to the platform's expansion
              and success. From building a comprehensive design system to
              refining user flows and creating an adaptable cloud studio
              dashboard, my work not only drove user engagement but also
              supported SportVot’s business objectives, establishing it as a key
              player in the global sports production space.
            </div>
          </div>
        </div>
        <ProductOptionsComponents />
      </main>

      <Contact />
    </>
  );
};

export default SportvotProduct;
