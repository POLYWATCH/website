import React from "react";
import styles from "../styles/Home.module.css";
import { MediaRenderer } from "@thirdweb-dev/react";
import { Navbar } from "../components/Navbar/Navbar";

const AboutUs: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      
      {/* Utilizza Flexbox per i tre riquadri in una riga */}
      <div className={styles.threeDBoxContainer}>
        <div className={styles.threeDBox}>
          <h1 className={styles.heroTitle}>
            <p className={styles.herotitle}></p>
            <span className={styles.heroTitleGradient}>CLAIM YOUR POLYWATCH ON 10/01/2024</span>
          </h1>
        </div>
        
        <div >
          <MediaRenderer
            src="https://my.spline.design/defiproductfeatures-53ed19c48fd666083a4549bb6ff01f81"
            width="100%"
            height="100%"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
            alt="Icona 3"
          />
        </div>
        
        <div className={styles.threeDBox}>
          <p className={styles.heroSubtitle}>
            Claim your Polywatch and start your journey
          </p>
        </div>
      </div>

      {/* Altri contenuti o sezioni secondo necessità */}
    </div>
  );
};

export default AboutUs;
