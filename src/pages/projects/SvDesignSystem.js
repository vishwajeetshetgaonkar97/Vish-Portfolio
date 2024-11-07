import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Contact from "@/components/Contact/Contact";
import ProductOptionsComponents from "../../components/ProjectsOptionsComponent/ProjectsOptionsComponent";

const SvDesignSystem = (props) => {
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
            <div className={styles.heading}>Sportvot: Design System (v1)</div>
            <div className={styles.subHeading}>
              creating a full on design system from scratch which will be used
              all across platform app, web, mob, dashboard
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
              src="/work/svDesignSystem/p1.png"
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
                <ul>2024</ul>
              </div>
            </div>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Project Summary</div>
            <div className={styles.content}>
              At SportVot, there were significant design inconsistencies across
              platforms that resulted in brand identity confusion and hindered
              development efficiency. With no established design system, the
              platform was experiencing challenges in maintaining consistent UI
              elements, behaviors, and interactions. As a result, it became
              clear that developing a unified design system was essential for
              improving both the user experience (UX) and the development
              workflow. This would also support future scalability, especially
              as the product expanded to new markets.
            </div>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Problem</div>
            <ul className={`${styles.points} py-1`}>
              <li className={styles.content}>
                <b>Inconsistent Design Across Platforms:</b> There was no
                unified design language, leading to issues like broken UI
                components, inconsistent behaviors (e.g., hover states), and
                mismatched colors.
              </li>
              <li className={styles.content}>
                <b>Brand Identity Crisis:</b> The absence of brand guidelines
                created confusion, both internally and externally, impacting
                marketing and fundraising efforts.
              </li>
              <li className={styles.content}>
                <b>Inefficiency in Development:</b> Without standardized
                components, development was slower, with many design updates
                requiring manual intervention.
              </li>
            </ul>
            <div className={`${styles.content} mt-2 `}>
              <b>Impact:</b> These issues were not only frustrating for users,
              but also impacted the company’s credibility, fundraising rounds,
              and internal workflow.
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
                <b>Founders: </b> The lack of consistency was undermining the
                brand’s identity, hindering investor confidence, and making it
                harder to fundraise effectively.
              </li>
              <li className={styles.content}>
                <b>Product Managers: </b> Without a proper design system, they
                struggled to ensure alignment between design and development
                teams, leading to inefficiencies and confusion.
              </li>
              <li className={styles.content}>
                <b>Clients: </b> Clients faced a frustrating user experience due
                to the inconsistent UI and behavior of the product, which led to
                reduced engagement and trust.
              </li>
            </ul>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Goals</div>
            <ul className={styles.points}>
              <li className={styles.content}>
                <b>Consistency: </b> Establish a unified design system for
                buttons, components, typography, input fields, shadows, and
                other UI elements to be used across all platforms.
              </li>
              <li className={styles.content}>
                <b>Efficiency: </b> Improve development time by streamlining
                communication between design and development teams, utilizing
                reusable components.
              </li>
              <li className={styles.content}>
                <b>Scalability: </b> Ensure the design system could scale with
                future product expansions and feature additions.
              </li>
            </ul>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}>Research & Discovery</div>
            <div className={`${styles.content_sub_header} mt-3`}>
              {" "}
              User Research
            </div>
            <div className={styles.content}>
              To identify the main pain points, I began by gathering feedback
              from internal teams, including founders, product managers,
              marketing, content, and tech teams. Key insights included:
            </div>
            <ul className={styles.points}>
              <li className={styles.content}>
                Lack of brand guidelines and documentation led to inconsistent
                design practices.
              </li>
              <li className={styles.content}>
                Unrealistic client demands created confusion and
                miscommunication between the product and design teams.
              </li>
              <li className={styles.content}>
                Some users expressed a sense of inconsistency but couldn’t
                pinpoint exact issues. However, feedback from clients and larger
                organizations highlighted several design flaws, including UI
                breakages, pop-up behavior, hover states, and visual cues.
              </li>
            </ul>

            <div className={`${styles.content_sub_header} mt-4`}>
              {" "}
              Competitive Analysis:
            </div>
            <div className={styles.content}>
              Although there weren’t direct competitors in the same space, I
              looked at a variety of SaaS products and sports platforms to
              understand how they maintained consistency. Key sources of
              inspiration included:
            </div>
            <ul className={styles.points}>
              <li className={`${styles.content} font-bold `}>CRED</li>
              <li className={`${styles.content} font-bold `}>CricBuzz</li>
              <li className={`${styles.content} font-bold `}>La Liga</li>
              <li className={`${styles.content} font-bold `}>FIFA</li>
            </ul>
            <div className={`${styles.content} mt-2`}>
              These platforms provided insights into consistent UI behaviors,
              color schemes, and typography.
            </div>
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}> Design Process</div>
      
            {isMobile ? (
              <Image
                className={`${styles.mockupImage} w-full h-auto mt-6`}
                layout="responsive"
                width={1920}
                height={1080}
                src="/work/svDesignSystem/m3.png"
                alt="svplay"
              />
            ) : ( <Image
                className={`${styles.mockupImage} w-full h-auto mt-6 `}
                layout="responsive"
                width={1920}
                height={1080}
                src="/work/svDesignSystem/p3.png"
                alt="svplay"
              />)}
         
            <div className={`${styles.content_sub_header} mt-6`}>
              Initial Steps
            </div>
            <div className={styles.content}>
              I began by reviewing existing designs and wireframes. With the
              previous iterations as the foundation, I developed multiple
              prototypes and began iterating on key components. I adopted a
              design-dev-iterate approach, where modules were designed,
              developed, and tested across desktop, tablet, and mobile to ensure
              consistency and functionality.
            </div>

            <div className={`${styles.content_sub_header} mt-2`}>
              Key Decisions
            </div>
            <ul className={styles.points}>
              <li className={`${styles.content}`}>
                <b>Design Tokens & Variables:</b> I standardized color
                variables, typography, and UI elements to create a cohesive
                design system across all platforms.
              </li>
              <li className={`${styles.content}`}>
                <b>Usability Testing:</b> We conducted usability tests using
                Figma prototypes to gather feedback on different screen sizes
                and devices. This allowed us to address potential gaps in the
                system early.
              </li>
            </ul>

            <div className={`${styles.content_sub_header} mt-2`}>
              Components:
            </div>
            <ul className={styles.points}>
              <li className={`${styles.content}`}>
                Buttons (Primary, Secondary, Outlined, Gradient)
              </li>
              <li className={`${styles.content}`}>
                Typography (Headings, Paragraphs, Custom Fonts)
              </li>
              <li className={`${styles.content}`}>Forms & Input Fields</li>
              <li className={`${styles.content}`}>
                Cards & UI Elements (Shadows, Borders)
              </li>
              <li className={`${styles.content}`}>Icons & Visual Cues</li>
            </ul>
            <div className={`${styles.content_sub_header} mt-2`}>
              Design Rationale
            </div>
            <div className={`${styles.content}`}>
              The components were selected based on the brand’s guidelines, as
              well as industry standards for accessibility and usability. I
              created variants for different states (e.g., hover, focus,
              disabled) and ensured the system could scale across various
              platforms and devices.
            </div>
            {isMobile ? (
              <Image
                className={`${styles.mockupImage} w-full h-auto`}
                layout="responsive"
                width={1920}
                height={1080}
                src="/work/svDesignSystem/m4.png"
                alt="svplay"
              />
            ) : (
              <Image
                className={`${styles.mockupImage1} w-full h-auto `}
                layout="responsive"
                width={1920}
                height={1080}
                src="/work/svDesignSystem/p4.png"
                alt="svplay"
              />
            )}
          </div>

          <div className={styles.content_container}>
            <div className={styles.content_header}> Testing & Validation</div>
            <div className={`${styles.content_sub_header} mt-2`}>
              Usability Testing
            </div>
            <div className={styles.content}>
              We utilized Figma prototypes to test the design system across
              desktop, tablet, and mobile platforms. Feedback was gathered from
              both internal teams and external users to identify pain points and
              gaps.
            </div>
            <div className={`${styles.content_sub_header} mt-4`}>
              A/B Testing
            </div>
            <div className={styles.content}>
              Different versions of key components (e.g., buttons, navigation
              bars) were tested to determine which design most effectively met
              user needs and aligned with the product’s goals.
            </div>
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
              <li className={styles.content}>
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

export default SvDesignSystem;
