import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import closeIcon from "../../../public/close.png";
import menuIcon from "../../../public/menu.png";
import Link from "next/link";

const Navbar = ({ isProject = false }) => {
  const router = useRouter();
  const handleIconClick = () => {
    if (isProject) {
      router.push("/"); // Directs to home if it's a project
    } else {
      router.back(); // Goes back if it's not a project
    }
  };
  const [isOpen, setIsOpen] = useState(false);
 // Function to close the menu
 const closeMenu = () => {
  setIsOpen(false);
};

const socialMediaLinks = [
  {
    platform: "linkedin",
    url: "https://www.linkedin.com/in/vishwajeet-shetgaonkar",
  },
  { platform: "twitter", url: "https://twitter.com/vshetgaonkar97" },
  { platform: "behance", url: "https://www.behance.net/yourprofile" },
  { platform: "github", url: "https://github.com/vishwajeetshetgaonkar97" },
];

  return (
    <>
      <nav
        className={`${styles.navbar} flex items-center content-center  w-full md:px-6 px-2 py-4 `}
      >
        <Image
          src={isProject ? "/back.png" : "/logo.png"}
          height={isProject ? 25 : 50}
          width={isProject ? 25 : 50}
          alt="vishwajeet shetgaonkar logo"
          onClick={handleIconClick}
          className={`cursor-pointer ${isProject ? styles.back : styles.logo}`}
        />
        <div
          className={styles.linksBurgerContainer}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image
            className={`${isOpen ? styles.closeIcon : styles.burgerIcon}`}
            src={isOpen ? closeIcon : menuIcon}
            width={100}
            height={100}
            alt="logo image"
          />
        </div>

        <div
          className={`${styles.navList} ${
            isOpen ? styles.linksContainerActive : ""
          }`}
        >
          <Link href="/#work"  onClick={closeMenu} scroll={false} className={styles.topNavButton}>
            Work
          </Link>
          <Link href="/#about" onClick={closeMenu} className={styles.topNavButton}>
            About
          </Link>
          <Link href="#contact" onClick={closeMenu} scroll={false} className={styles.topNavButton}>
            Contact
          </Link>
<div className={styles.socialMedia} >


          {socialMediaLinks.map(({ platform, url }) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink} 
              >
                <Image
                  className={styles.socialIcon}
                  src={`/socialMedia/${platform}.png`}
                  height={27}
                  width={27}
                  alt={platform}
                />
              </a>
            ))}
</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
