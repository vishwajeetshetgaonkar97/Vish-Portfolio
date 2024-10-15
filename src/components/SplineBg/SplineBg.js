import Image from "next/image";
import styles from "./styles.module.css";
import React, {
  useState,
  useEffect,
  Suspense,
  useCallback,
  useRef,
} from "react";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

// Loader Component
const Loader = () => (
  <div className={styles.loaderContainer}>
    <div className={styles.loader}>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
    </div>
  </div>
);

const SplineBg = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasSplineError, setHasSplineError] = useState(false);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const splineApp = useRef(null); // Create a ref to hold the Spline application instance

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 5);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleSplineError = useCallback(() => {
    setHasSplineError(true);
  }, []);

  // This function will run when the Spline scene loads
  const onLoad = useCallback((spline) => {
    splineApp.current = spline; // Save the Spline app instance in the ref
    setIsSplineLoaded(true); // Set Spline as loaded
  }, []);

  const socialMediaLinks = [
    { platform: "linkedin", url: "https://www.linkedin.com/in/vishwajeet-shetgaonkar" },
    { platform: "twitter", url: "https://twitter.com/vshetgaonkar97" },
    { platform: "behance", url: "https://www.behance.net/yourprofile" },
    { platform: "github", url: "https://github.com/vishwajeetshetgaonkar97" },
  ];

  return (
    <div className={styles.container}>
      {/* Always show loader initially */}
      {!isSplineLoaded && !hasSplineError && <Loader />}

      <Suspense fallback={<Loader />}>
        {!hasSplineError && ( // Render Spline if no error occurred
          <Spline
            className="fixed top-0 left-0 h-screen w-screen z-0"
            scene="https://prod.spline.design/Qp0S9wS3ub91mSAr/scene.splinecode"
            onError={handleSplineError} // Call the error handler if something goes wrong
            onLoad={onLoad} // Pass the onLoad function here
          />
        )}

        {hasSplineError && (
          <p className={styles.error}>Failed to load 3D scene.</p>
        )}
      </Suspense>

      {/* Render scroll icon and social media only after Spline is loaded */}
      {isSplineLoaded && !hasSplineError && (
        <>
          <div
            className={`${styles.scrollIcon} ${
              isScrolled ? styles.hidden : ""
            }`}
          >
            <div className={styles.mouse}></div>
          </div>

          <div
            className={`${styles.socialMedia} ${
              isScrolled ? styles.hidden : ""
            }`}
          >
            {socialMediaLinks.map(({ platform, url }) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink} // Optional: Add styles for the links
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
        </>
      )}
    </div>
  );
};

export default SplineBg;
