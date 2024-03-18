// Import necessary modules and components
import React from "react";
import styles from "../styles/Home.module.css"; // Make sure you have your CSS file for styling
import { MediaRenderer } from "@thirdweb-dev/react"; // Assuming you have this component
import Navbar from "../components/Navbar/Navbar";




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
        <span className={styles.heroTitleGradient}>POLYWATCH MINT</span>
      </h1>
      

     

      

      <p className={styles.heroSubtitle}>
       
      </p>
      <p className={styles.heroSubtitle}>
        CLAIM YOUR MYSTERY BOX IF ELIGIBLE
      </p>
    
      <MediaRenderer
  src="/images/yellowbox.mp4"  
  width="60%"
  height="60%"
  style={{ maxWidth: '100%', maxHeight: '100%' }}
  alt="Icona 3"
/> 

     
     
        
      
<div style={{ margin: '60px' }}>
  {/* Content of the first section */}
</div>

{/* Empty space */}
<div style={{ height: '60px' }} />





      {/* Your title and other content */}
      <h1 className={styles.heroTitle}>
        <p className={styles.herotitle}></p>
        <span className={styles.heroTitleGradient}>MINT INFO</span>
      </h1>
      <p className={styles.heroSubtitle}>
      3000 POLYWATCH means 3000 Mystery Box. Each box contains a POLYWATCH comletely random, 
      the boxes will be three types yellow,purple and red. Please check the mint information on discord or medium.
      Some of you may be eligible to receive a FREE box!
      </p>

     

      
    
        </div>
    
  



    
    

 

  );
};

export default AboutUs;
