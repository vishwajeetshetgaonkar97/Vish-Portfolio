import Image from "next/image";
import styles from "./styles.module.css";
import React, { useState, useEffect, Suspense, useCallback } from "react";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

// Loader Component
const Loader = () => (
  <div className={styles.loaderContainer}>
    <div className={styles.spinner}></div>
    <p>Loading 3D Experience...</p>
  </div>
);

const SplineBg = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasSplineError, setHasSplineError] = useState(false);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSplineError = useCallback(() => {
    setHasSplineError(true);
  }, []);

  const handleSplineLoad = useCallback(() => {
    setIsSplineLoaded(true);
  }, []);

  return (
    <div className={`${styles.container}`}>
      <Suspense fallback={<Loader />}>
        {!hasSplineError && ( // Render Spline if there's no error
          <Spline
            className={`fixed top-0 left-0 h-screen w-screen z-0 ${styles.spline}`}
            scene="https://prod.spline.design/Qp0S9wS3ub91mSAr/scene.splinecode"
            onError={handleSplineError}
            onLoad={handleSplineLoad} // Add onLoad event handler
          />
        )}
        {hasSplineError && <p className={styles.error}>Failed to load 3D scene.</p>}
      </Suspense>

      <div className={`${styles.scrollIcon} ${isScrolled ? styles.hidden : ""}`}>
        <div className={styles.mouse}></div>
      </div>

      <div className={`${isScrolled ? styles.hidden : ""} ${styles.socialMedia}`}>
        <Image className={styles.socialIcon} src="/socialMedia/linkedin.png" height={27} width={27} alt="linkedin" />
        <Image className={styles.socialIcon} src="/socialMedia/twitter.png" height={27} width={27} alt="twitter" />
        <Image className={styles.socialIcon} src="/socialMedia/behance.png" height={27} width={27} alt="behance" />
        <Image className={styles.socialIcon} src="/socialMedia/github.png" height={27} width={27} alt="github" />
      </div>
    </div>
  );
};

export default SplineBg;
