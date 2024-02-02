// Import necessary modules and components
import React from "react";
import styles from "../styles/Home.module.css"; // Make sure you have your CSS file for styling
import { MediaRenderer } from "@thirdweb-dev/react"; // Assuming you have this component
import { Navbar } from "../components/Navbar/Navbar";




// Your component
const AboutUs: React.FC = () => {
  return (
    
    <div className={styles.container}>
      <Navbar />
      {/* Use MediaRenderer for the looping video background */}
      <div style={{ margin: '100px' }}>
  {/* Content of the first section */}
</div>

{/* Empty space */}
<div style={{ height: '100px' }} />





      {/* Your title and other content */}
      <h1 className={styles.heroTitle}>
        <p className={styles.herotitle}></p>
        <span className={styles.heroTitleGradient}>CLAIM YOUR POLYWATCH ON Feb. 10 </span>
      </h1>
      <MediaRenderer
  src="ipfs://QmVoBUk7ybvQLTFirvwDkrdkLNh4wAVBM1LrsuSnhwdjxC/IOBO.gif"  
  width="60%"
  height="60%"
  style={{ maxWidth: '100%', maxHeight: '100%' }}
  alt="Icona 3"
/>


      {/* Add more content or sections as needed */}
      <p className={styles.heroSubtitle}>
       Claim your Polywatch and start your journey
      </p>

      


    </div>
  
    

 

  );
};

export default AboutUs;
