import Image from "next/image";
import styles from "./styles.module.css";
import React, {
  useState,
  useEffect,
  Suspense,
  useCallback,
  useRef,
  startTransition,
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
  const [isMobile, setIsMobile] = useState(false);
  const [hasSplineError, setHasSplineError] = useState(false);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const splineApp = useRef(null); // Create a ref to hold the Spline application instance

  const handleScroll = useCallback(() => {
    startTransition(() => {
      setIsScrolled(window.scrollY > 5);
    });
  }, []);

  const handleResize = useCallback(() => {
    startTransition(() => {
      setIsMobile(window.innerWidth <= 800);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initial call to handleResize to set mobile state correctly
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);

  const handleSplineError = useCallback(() => {
    startTransition(() => {
      setHasSplineError(true);
    });
  }, []);

  // This function will run when the Spline scene loads
  const onLoad = useCallback((spline) => {
    splineApp.current = spline; // Save the Spline app instance in the ref
    startTransition(() => {
      setIsSplineLoaded(true); // Set Spline as loaded
    });
  }, []);

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
    <div className={styles.container}>
      {/* Always show loader initially */}
      {!isSplineLoaded && !hasSplineError && <Loader />}

      <Suspense fallback={<Loader />}>
        {!hasSplineError && (
          <Spline
            className={styles.splineBg}
            scene={
              isMobile
                ? "https://prod.spline.design/nhViJ0PYOK0pJXmR/scene.splinecode"
                : "https://prod.spline.design/dnQzzwqu2r542cRY/scene.splinecode"
            }
            onError={handleSplineError}
            onLoad={onLoad}
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
        </>
      )}
    </div>
  );
};

export default SplineBg;
