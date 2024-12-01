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
              src="/work/svStudio/mock1.png"
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
              The Studio Dashboard serves as the backbone of SportVot's sports
              streaming ecosystem, enabling broadcasters to manage and produce
              live events for over 10 sports efficiently. Addressing fragmented
              workflows, lack of real-time analytics, and monetization
              challenges, the dashboard redefined how sports production
              operates.
              <br />
              By integrating scoring mechanisms, customizable overlays, ad
              management tools, and real-time analytics, the Studio Dashboard
              revolutionized live sports production and ensured scalability for
              a growing user base across 20+ countries.
            </div>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Problem</div>
            <div className={styles.content}>
              The sports production ecosystem lacked a unified workflow, causing
              operational inefficiencies:
            </div>
            <ul className={`${styles.points} py-2`}>
              <li className={styles.content}>
                <b>Player Data Management:</b> Difficulty accessing and
                organizing athlete profiles during live events caused delays.
              </li>
              <li className={styles.content}>
                <b>Scoring Mechanisms:</b> Inconsistent sport-specific rules led
                to inaccuracies, eroding user trust.
              </li>
              <li className={styles.content}>
                <b>Overlay Controls:</b> Fragmented tools hampered customization
                of live graphics.
              </li>
              <li className={styles.content}>
                <b>Live Streaming Analytics:</b> Insufficient viewer insights
                hindered real-time optimization.
              </li>
              <li className={styles.content}>
                <b>Ad Management and Revenue:</b> Lack of robust tools led to
                underutilized monetization opportunities.
              </li>
            </ul>
            <div className={`${styles.content} mt-1 `}>
              <b>Impact:</b> These challenges frustrated end-users, hindered
              operational efficiency, degraded the quality of live sports
              productions, and ultimately limited user satisfaction and revenue
              growth.
            </div>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Stakeholder Impact</div>
            <ul className={styles.points}>
              <li className={styles.content}>
                <b>Founders: </b> Inefficiencies hindered scalability and
                fundraising efforts.
              </li>
              <li className={styles.content}>
                <b>Clients: </b> Inconsistent experiences reduced trust and
                retention.
              </li>
              <li className={styles.content}>
                <b>Broadcasting Teams: </b> Fragmented workflows led to delays
                and errors.
              </li>
              <li className={styles.content}>
                <b>Production Teams:</b> Bottlenecks in managing overlays and
                data impacted live event quality.
              </li>
              <li className={styles.content}>
                <b>Ad Teams:</b>Missed revenue opportunities due to limited ad
                tools.
              </li>
              <li className={styles.content}>
                <b>End Viewers: </b>Suboptimal experiences decreased engagement
                and satisfaction.
              </li>
            </ul>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Goals</div>
            <ul className={styles.points}>
              <li className={styles.content}>
                <b>Streamlined Workflows: </b> A unified interface for player
                data, scoring, overlays, analytics, and ads.
              </li>
              <li className={styles.content}>
                <b>Accuracy & Consistency: </b> Real-time, sport-specific
                scoring mechanisms.
              </li>
              <li className={styles.content}>
                <b>Enhanced Analytics: </b>Insights into viewer engagement and
                performance for data-driven decisions.
              </li>
              <li className={styles.content}>
                <b>Optimized Monetization: </b>Tools for effective ad
                integration and revenue tracking.
              </li>

              <li className={styles.content}>
                <b>Scalability & Flexibility: </b> Adaptable for diverse sports
                and features.
              </li>
              <li className={styles.content}>
                <b>Improved User Experience: </b>Frustration-free, intuitive,
                and efficient workflows.
              </li>
            </ul>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Research & Discovery</div>
        
            <div className={`${styles.content_sub_header} mt-2`}>
              {" "}
              User Research
            </div>

            <div className={styles.content}>
              Conducted interviews with broadcasters, clients, and production
              teams to identify pain points. Observed live events to uncover
              workflow challenges in overlay management, scoring, and analytics.
            </div>

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
        
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>
              {" "}
              Design Process & Testing
            </div>
            {isMobile ? (
            <Image
              className={`${styles.mockupImage} w-full h-auto`}
              layout="responsive"
              width={1920}
              height={1080}
              src="/work/svStudio/d1.png"
              alt="svplay"
            />
          ) : (
            <Image
              className={`${styles.mockupImage} w-full h-auto`}
              layout="responsive"
              width={1920}
              height={1080}
              src="/work/svStudio/designProcess.png"
              alt="svplay"
            />
          )}
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
                src="/work/svStudio/mm1.png"
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
                src="/work/svStudio/mm2.png"
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
              Frequent iterations aligned the dashboard with SportVot's evolving
              goals, user feedback, and market requirements. The design
              prioritized usability, scalability, and consistency.
            </div>
            {!isMobile && (
              <div className={`${styles.marqueContainer}`}>
                <div className={` shadow-sm p-2`}>
                  <div className={`flex gap-2 items-center animate-marquee`}>
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
             {isMobile && (
              <div className={`${styles.marqueContainer}`}>
                <div className={` shadow-sm p-2`}>
                  <div className={`flex gap-1 items-center animate-marquee`}>
                    <Image
                      className={`${styles.mockupImage1} w-full h-auto `}
                      layout="responsive"
                      width={1920}
                      height={1080}
                      src="/work/svStudio/mm3.png"
                      alt="svplay"
                    />
                    <Image
                      className={`${styles.mockupImage1} w-full h-auto `}
                      layout="responsive"
                      width={1920}
                      height={1080}
                      src="/work/svStudio/mm4.png"
                      alt="svplay"
                    />
                    <Image
                      className={`${styles.mockupImage1} w-full h-auto `}
                      layout="responsive"
                      width={1920}
                      height={1080}
                      src="/work/svStudio/mm5.png"
                      alt="svplay"
                    />
                    <Image
                      className={`${styles.mockupImage1} w-full h-auto `}
                      layout="responsive"
                      width={1920}
                      height={1080}
                      src="/work/svStudio/mm6.png"
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
                <b>User Feedback: </b> Broadcasters and clients reported a 50%
                increase in efficiency during live events.
              </li>
              <li className={styles.content}>
                <b>Business Impact: </b>Raised millions in funding across
                multiple rounds.
              </li>
              <li className={`${styles.content} ${styles.contentAchievement} `}>
                <b>Monetization: </b> Enhanced ad management tools led to a 30%
                revenue increase.
                <ul className={`${styles.points} ${styles.achievements}`}>
                  <li className={styles.content}>
                    <b>300,000+ Games Produced</b>
                  </li>
                  <li className={styles.content}>
                    <b>350,000+ + Athletes Featured</b>
                  </li>
                  <li className={styles.content}>
                    <b>20+ Countries Covered</b>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Reflection & Learnings</div>
            <div className={`${styles.content_sub_header} mt-2`}>
              What Went Well:
            </div>
            <ul className={styles.points}>
              <li className={styles.content}>
                Revolutionized workflows and improved stakeholder satisfaction.
              </li>
              <li className={styles.content}>
                Successfully scaled a complex platform to meet diverse user
                needs.
              </li>
            </ul>

            <div className={`${styles.content_sub_header} mt-2`}>
              What Could Be Improved:
            </div>
            <ul className={styles.points}>
              <li className={styles.content}>
                Some features required iterative refinements based on real-world
                use cases.
              </li>
            </ul>
            <div className={`${styles.content_sub_header} mt-2`}>
              Lessons Learned:
            </div>
            <ul className={styles.points}>
              <li className={styles.content}>
                Balancing B2B and B2C insights to align with user and business
                goals.
              </li>
              <li className={styles.content}>
                Agile development approaches are critical in dynamic startup
                environments.
              </li>
            </ul>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Next Steps</div>
            <ul className={styles.points}>
              <li className={styles.content}>
                <b>Expand Functionality: </b> Add advanced UI patterns and
                backend integration for emerging features.
              </li>
              <li className={styles.content}>
                <b>Iterate Continuously </b> Refine based on stakeholder
                feedback and changing user needs.
              </li>
            </ul>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Conclusion</div>
            <div className={styles.content}>
              The Studio Dashboard revolutionized sports production for
              SportVot, serving as a robust and scalable platform that propelled
              the company’s growth, cementing its position as India’s largest
              sports production ecosystem.
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
