import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { useRouter } from "next/router";

const Navbar = ({ isProject = false }) => {
  const router = useRouter();
  const handleIconClick = () => {
    if (isProject) {
      router.push('/'); // Directs to home if it's a project
    } else {
      router.back(); // Goes back if it's not a project
    }
  };

  return (
    <>
      <nav
        className={`${styles.navbar} flex items-center content-center backdrop-filter backdrop-blur-lg w-full px-6 py-4 `}
      >
        <Image
         src={isProject?"/back.png":"/logo.png"}
          height={isProject?25:50}
          width={isProject?25:50}
          alt="vishwajeet shetgaonkar logo"
          onClick={handleIconClick}
        />
        <div className="flex items-end content-end w-full justify-end space-x-4">
          <a className={styles.topNavButton}>Work</a>
          <a className={styles.topNavButton}>About</a>
          <a className={styles.topNavButton}>Contact</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
