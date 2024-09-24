import Image from "next/image";
import styles from "./styles.module.css";
import React, { useState, useEffect, Suspense, useCallback } from "react";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

const SplineBg = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hasSplineError, setHasSplineError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      React.startTransition(() => {
        setIsScrolled(window.scrollY > 5);
      });
    };

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        React.startTransition(() => {
          setIsMobile(window.innerWidth <= 768);
        });
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize(); // Check initial window size

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSplineError = useCallback(() => {
    setHasSplineError(true);
  }, []);

  return (
    <div className={`${styles.container}`}>
      <Suspense fallback={"loading"}>
        <Spline
          className={`fixed top-0 left-0 h-screen w-screen z-0 ${styles.spline}`}
          scene="https://prod.spline.design/Qp0S9wS3ub91mSAr/scene.splinecode"
          onError={handleSplineError}
        />
      </Suspense>

      <div
        className={`${styles.scrollIcon} ${isScrolled ? styles.hidden : ""}`}
      >
        <div className={styles.mouse}></div>
      </div>

      <div className={`${isScrolled ? styles.hidden : ""} ${styles.socialMedia} `}>
        <Image src="/socialMedia/linkedin.png" height={27} width={27} alt="linkedin"/>
        <Image src="/socialMedia/twitter.png" height={27} width={27} alt="twitter"/>
        <Image src="/socialMedia/behance.png" height={27} width={27} alt="behance"/>
        <Image src="/socialMedia/github.png" height={27} width={27} alt="github"/>
      </div>
    </div>
  );
};

export default SplineBg;
