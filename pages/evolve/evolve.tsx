import React from "react";
import styles from "../styles/Home.module.css";
import { MediaRenderer } from "@thirdweb-dev/react";
import Navbar from "../components/Navbar/Navbar";

const AboutUs: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      
      {/* Utilizza Flexbox per i tre riquadri in una riga */}
      <div className={styles.threeDBoxContainer}>
        <div className={styles.threeDBox}>
          <h1 className={styles.heroTitle}>
            <p className={styles.herotitle}></p>
            <span className={styles.heroTitleGradient}> evolve YOUR POLYWATCH... SOON</span>
          </h1>
        </div>
        
        <div >
         
        </div>
        












        <div className={styles.threeDBox}>
          <p className={styles.heroSubtitle}>
           
          </p>
        </div>
      </div>

      {/* Altri contenuti o sezioni secondo necessità */}
    </div>
  );
};

export default AboutUs;

