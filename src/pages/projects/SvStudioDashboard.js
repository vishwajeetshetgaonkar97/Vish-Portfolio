import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Contact from "@/components/Contact/Contact";
import ProductOptionsComponents from "../../components/ProjectsOptionsComponent/ProjectsOptionsComponent";

const SvStudioDashboard = (props) => {
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
            <div className={styles.heading}>SportVot: Studio Dashboard</div>
            <div className={styles.subHeading}>
              Creating a cloud-based studio dashboard to empower sports
              production with seamless streaming, overlays, and scoring features
              across multiple sports.
            </div>
          </div>

          {isMobile ? (
            <Image
              className={`${styles.mockupImage} w-full h-auto`}
              layout="responsive"
              width={1920}
              height={1080}
              src="/work/svDesignSystem/m1.png"
              alt="svplay"
            />
          ) : (
            <Image
              className={`${styles.mockupImage} w-full h-auto`}
              layout="responsive"
              width={1920}
              height={1080}
              src="/work/svStudio/mockup.png"
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
                <ul>Scalable Component Libraries</ul>
                <ul>Usability Testing</ul>
              </div>
            </div>

            <div className={styles.sub_role_container}>
              <div className={styles.role}>Teams</div>
              <div className={styles.role_description_containers}>
                <ul>Founders</ul>
                <ul>Product Managers</ul>
                <ul>Developers</ul>
                <ul>Operational Team</ul>
                <ul>Broadcasters</ul>
              </div>
            </div>

            <div className={styles.sub_role_container}>
              <div className={styles.role}>Year</div>
              <div className={styles.role_description_containers}>
                <ul>2020 - Present</ul>
              </div>
            </div>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Project Summary</div>
            <div className={styles.content}>
              The Studio Dashboard served as the backbone of SportVot's sports
              streaming ecosystem, empowering broadcasters to effortlessly
              produce and manage live events for over 10 sports. The lack of a
              unified, intuitive interface and streamlined workflows in the
              market created significant challenges for users, making it
              difficult to handle overlays, scoring, analytics, and streaming
              efficiently. The objective was to craft a comprehensive,
              user-friendly dashboard that addressed these gaps, reducing
              operational inefficiencies while meeting the varied needs of
              broadcasters, production teams, and clients.
            </div>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Problem</div>
            <div className={styles.content}>
              The lack of a unified workflow for sports production and streaming
              created fragmented experiences and inefficiencies. Broadcasters
              struggled with managing player data, implementing accurate scoring
              mechanisms, customizing overlay controls, and accessing live
              streaming analytics. Additionally, the absence of robust ad
              management tools led to missed monetization opportunities.
            </div>
            <ul className={`${styles.points} py-2`}>
              <li className={styles.content}>
                <b>Player Data Management:</b> Broadcasters faced challenges in
                accessing, updating, and organizing athlete profiles during live
                events, leading to delays and inaccuracies.
              </li>
              <li className={styles.content}>
                <b>Scoring Mechanisms:</b> Inconsistent implementation of
                sport-specific rules caused errors, undermining trust in the
                platform’s scoring accuracy.
              </li>
              <li className={styles.content}>
                <b>Overlay Controls:</b> Fragmented tools limited customization
                and created bottlenecks in managing live graphics and overlays.
              </li>
              <li className={styles.content}>
                <b>Live Streaming Analytics:</b> Insufficient insights into
                viewer engagement and stream performance hindered real-time
                decision-making and optimization.
              </li>
              <li className={styles.content}>
                <b>Ad Management and Revenue:</b> The absence of robust tools
                for ad integration and revenue tracking resulted in
                underutilized monetization opportunities.
              </li>
            </ul>
            <div className={`${styles.content} mt-1 `}>
              <b>Impact:</b> These challenges frustrated end-users, hindered
              operational efficiency, degraded the quality of live sports
              productions, and ultimately limited user satisfaction and revenue
              growth.
            </div>
            {isMobile ? (
              <Image
                className={`${styles.mockupImage} w-full h-auto mt-6`}
                layout="responsive"
                width={1920}
                height={1080}
                src="/work/svDesignSystem/m2.png"
                alt="svplay"
              />
            ) : (
              <Image
                className={`${styles.mockupImage1} w-full h-auto mt-6`}
                layout="responsive"
                width={1920}
                height={1080}
                src="/work/svDesignSystem/p2.png"
                alt="svplay"
              />
            )}
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Stakeholder Impact</div>
            <ul className={styles.points}>
              <li className={styles.content}>
                <b>Founders: </b> Operational inefficiencies and inconsistencies
                undermined scalability, affecting investor confidence and
                hindering fundraising efforts.
              </li>
              <li className={styles.content}>
                <b>Clients: </b> Frustration from inaccurate scores, poor
                overlay management, and lack of live analytics, reducing trust,
                engagement, and retention.
              </li>
              <li className={styles.content}>
                <b>Broadcasting Teams: </b> Fragmented workflows led to delays,
                errors, and decreased productivity during live events, impacting
                broadcast quality.
              </li>
              <li className={styles.content}>
                <b>Production Teams:</b> Difficulty in managing and customizing
                overlays and data, leading to increased operational bottlenecks
                and a lack of streamlined processes.
              </li>
              <li className={styles.content}>
                <b>Ad Sales Teams:</b>Inability to manage and optimize ad
                placements and revenue streams, leading to missed opportunities
                and reduced monetization.
              </li>
              <li className={styles.content}>
                <b>End Viewers: </b>Disconnected user experience due to
                inconsistent data, performance issues, and poor visual
                representation, impacting overall satisfaction and engagement.
              </li>
            </ul>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Goals</div>
            <ul className={styles.points}>
              <li className={styles.content}>
                <b>Streamlined Workflows: </b> Create a unified, intuitive
                interface to manage player data, scoring, overlays, analytics,
                and ads efficiently across all sports and streaming types.
              </li>
              <li className={styles.content}>
                <b>Accuracy & Consistency: </b> Ensure real-time data accuracy
                for player profiles and scoring, with consistent application of
                sport-specific rules and features.
              </li>
              <li className={styles.content}>
                <b>Enhanced Analytics: </b>Provide in-depth live streaming
                analytics, offering insights into viewer engagement, performance
                metrics, and real-time feedback to improve broadcast decisions.
              </li>
              <li className={styles.content}>
                <b>Optimized Monetization: </b>Implement robust ad management
                tools to enhance revenue generation by offering better control
                and optimization of advertisements during live streams.
              </li>

              <li className={styles.content}>
                <b>Scalability & Flexibility: </b>Build a scalable solution that
                adapts to the needs of broadcasters, production teams, and
                clients as the platform grows and diversifies into new sports or
                features.
              </li>
              <li className={styles.content}>
                <b>Improved User Experience: </b>Provide a seamless,
                frustration-free experience for all users (broadcasters,
                clients, and viewers) through intuitive design, consistency, and
                efficient features.
              </li>
            </ul>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Research & Discovery</div>
            <div className={`${styles.content_sub_header} mt-2`}>
              {" "}
              User Research
            </div>

            <ul className={styles.points}>
              <li className={styles.content}>
                Conducted interviews with broadcasters, production teams, and
                clients to identify pain points.
              </li>
              <li className={styles.content}>
                Observed live event production to understand real-world
                challenges in overlay management, scoring accuracy, and live
                streaming analytics.
              </li>
            </ul>

            <div className={`${styles.content_sub_header} mt-4`}>
              {" "}
              Key Insights
            </div>

            <ul className={styles.points}>
              <li className={styles.content}>
                Users struggled with fragmented workflows, leading to
                operational inefficiencies and errors during live events.
              </li>
              <li className={styles.content}>
                Overlays were often misaligned due to the absence of a real-time
                preview system.
              </li>

              <li className={styles.content}>
                Scoring panels lacked sport-specific adaptations, leading to
                inaccuracies in game data.
              </li>

              <li className={styles.content}>
                There was insufficient access to real-time analytics, affecting
                performance optimization during streams.
              </li>
            </ul>

            <div className={`${styles.content_sub_header} mt-4`}>
              {" "}
              Competitive Analysis:
            </div>
            <div className={styles.content}>
              Although there were no direct competitors in the same space, I
              explored various live production platforms and SaaS products to
              understand how they handled workflows, overlays, and scoring
              management. Key sources of inspiration included:
            </div>
            <ul className={styles.points}>
              <li className={`${styles.content}  `}>
                {" "}
                <b>OBS:</b>For customizable overlays and real-time streaming
                management.
              </li>
              <li className={`${styles.content}  `}>
                <b>vMix:</b> For live event production and efficient integration
                of multiple media sources.{" "}
              </li>
              <li className={`${styles.content} `}>
                <b>StreamYard:</b> For its intuitive UI and simplified live
                streaming controls
              </li>
              <li className={`${styles.content}  `}>
                <b>CricBuzz:</b> For handling real-time scoring and match data
                visualization.
              </li>
              <li className={`${styles.content}  `}>
                <b>Ligr:</b> For its innovative ad management system and revenue
                optimization tools.
              </li>
            </ul>
            <div className={`${styles.content} mt-1`}>
              These platforms provided insights into consistent UI behaviors,
              color schemes, and typography.
            </div>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}> Design Process & Testing</div>

            <div className={`${styles.content_sub_header} mt-2`}>
              design-dev-iterate approach
            </div>
            <div className={styles.content}>
              I started wireframes, using research as the foundation. From
              there, I developed multiple prototypes and began iterating of
              versions. A design-dev-iterate approach was employed, where
              modules were designed, developed, and tested across desktop,
              tablet, and mobile devices to ensure usage and ux gaps were
              iteratively changed.
            </div>

            {isMobile ? (
              <Image
                className={`${styles.mockupImage} w-full h-auto`}
                layout="responsive"
                width={1920}
                height={1080}
                src="/work/svDesignSystem/m1.png"
                alt="svplay"
              />
            ) : (
              <Image
                className={`${styles.mockupImage} w-full h-auto mt-4`}
                layout="responsive"
                width={1920}
                height={1080}
                src="/work/svStudio/m1.png"
                alt="svplay"
              />
            )}

            <div className={`${styles.content_sub_header} mt-6`}>
              version variation ( a/b testing)
            </div>
            <div className={styles.content}>
              a further color, modes variations were done on each level to get
              more insights and how ux is getting hampered in field
            </div>

            {isMobile ? (
              <Image
                className={`${styles.mockupImage} w-full h-auto`}
                layout="responsive"
                width={1920}
                height={1080}
                src="/work/svDesignSystem/m1.png"
                alt="svplay"
              />
            ) : (
              <Image
                className={`${styles.mockupImage} w-full h-auto mt-4`}
                layout="responsive"
                width={1920}
                height={1080}
                src="/work/svStudio/m2.png"
                alt="svplay"
              />
            )}

            <div className={`${styles.content_sub_header} mt-6`}>
              Design Rationale
            </div>
            <div className={`${styles.content}`}>
              one might wonder why so many versions ans so many changes its
              because mostly becasuse of how a startup eveolves and needs to
              keep on doing changes based on user feedback, company tragectory ,
              investors, and other factors like user base targetting, type of
              users and much more.
            </div>
            {!isMobile && (
              <div className={`${styles.marqueContainer}`}>
              <div className={` shadow-sm p-2`} >
             <div    className={`flex gap-2 items-center animate-marquee`}>
             
              <Image
                className={`${styles.mockupImage1} w-full h-auto `}
                layout="responsive"
                width={1920}
                height={1080}
                src="/work/svStudio/m3.png"
                alt="svplay"
              />
              <Image
                className={`${styles.mockupImage1} w-full h-auto `}
                layout="responsive"
                width={1920}
                height={1080}
                src="/work/svStudio/m4.png"
                alt="svplay"
              />
              <Image
                className={`${styles.mockupImage1} w-full h-auto `}
                layout="responsive"
                width={1920}
                height={1080}
                src="/work/svStudio/m5.png"
                alt="svplay"
              />
              <Image
                className={`${styles.mockupImage1} w-full h-auto `}
                layout="responsive"
                width={1920}
                height={1080}
                src="/work/svStudio/m6.png"
                alt="svplay"
              />
              </div>
              </div>
              </div>
            )}
          </div>


          <div className={styles.content_container}>
            <div className={styles.content_header}>Impact & Results</div>

            <ul className={styles.points}>
              <li className={styles.content}>
                <b>User Feedback: </b> Post-implementation surveys revealed a
                25% increase in user satisfaction compared to previous designs.
                The consistency of the UI led to more positive user feedback,
                and clients were pleased with the streamlined experience.
              </li>
              <li className={styles.content}>
                <b>Business Impact: </b> The new design system was presented at
                a major sports-tech conference in Australia, where positive
                feedback from industry experts helped raise the company’s
                profile. This further supported the company’s fundraising
                efforts.
              </li>
              <li className={`${styles.content} ${styles.contentAchievement} `}>
                <b>Development Efficiency: </b> The design system improved
                collaboration between design and development teams, increasing
                efficiency and reducing the time needed for implementing new
                features.
                <ul className={`${styles.points} ${styles.achievements}`}>
                  <li className={styles.content}>
                    <b>25% increase in user satisfaction</b>
                  </li>
                  <li className={styles.content}>
                    <b>Faster time-to-market </b>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Reflection & Learnings</div>
            <ul className={styles.points}>
              <li className={styles.content}>
                <b>What Went Well: </b> The design system was successfully
                established, providing a cohesive and consistent experience
                across platforms. The system improved team collaboration,
                development efficiency, and the overall user experience.
              </li>
              <li className={styles.content}>
                <b>What Could Be Improved: </b> Due to tight deadlines, some
                elements had to be fast-tracked, and only key components were
                fully addressed in the first version. More in-depth exploration
                of edge cases and additional UI patterns would be the focus for
                future iterations.
              </li>
            </ul>

            <div className={`${styles.content_sub_header} mt-2`}>
              Lessons Learned
            </div>
            <div className={`${styles.content}`}>
              This project provided valuable insight into the complexities of
              building a scalable design system. Although Version 1 laid a
              strong foundation, it highlighted the need for continuous
              iteration and updates as the product grows.
            </div>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Next Steps</div>
            <ul className={styles.points}>
              <li className={styles.content}>
                <b>Expand the System: </b> Focus on the areas that were rushed,
                including additional UI patterns, new user flows, and backend
                integration for future features.
              </li>
              <li className={styles.content}>
                <b>Iterate Based on Feedback: </b> Continue to refine the system
                based on user and stakeholder feedback, ensuring it remains
                adaptable to new business requirements.
              </li>
            </ul>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Conclusion</div>
            <div className={styles.content}>
              This project was a challenging yet rewarding experience. I was
              able to successfully design and implement a comprehensive design
              system that aligned with both user needs and business goals. The
              system not only improved consistency and user satisfaction but
              also contributed to the company’s brand identity and fundraising
              success.
            </div>
          </div>
        </div>
        <ProductOptionsComponents />
      </main>

      <Contact />
    </>
  );
};

export default SvStudioDashboard;
