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
        <span className={styles.heroTitleGradient}>WELCOME TO POLYWATCH REWARDS</span>
      </h1>
      

     

      

      <p className={styles.heroSubtitle}>
       
      </p>
      <p className={styles.heroSubtitle}>
        START CLAIM FROM APRIL 25
      </p>
    
      <MediaRenderer
  src="images/343g2tled.png"  
  width="60%"
  height="60%"
  style={{ maxWidth: '100%', maxHeight: '100%' }}
  alt="Icona 3"
/> 

     
     
        
      
<div style={{ margin: '100px' }}>
  {/* Content of the first section */}
</div>

{/* Empty space */}
<div style={{ height: '100px' }} />





      {/* Your title and other content */}
      <h1 className={styles.heroTitle}>
        <p className={styles.herotitle}></p>
        <span className={styles.heroTitleGradient}>GET YOUR MERCH</span>
      </h1>
      <p className={styles.heroSubtitle}>
       PAY IN $TIME
      </p>

      <MediaRenderer
  src="images/1e3.png"  
  width="60%"
  height="60%"
  style={{ maxWidth: '100%', maxHeight: '100%' }}
  alt="Icona 3"
/> 
<MediaRenderer
  src="images/1e4.png"  
  width="60%"
  height="60%"
  style={{ maxWidth: '100%', maxHeight: '100%' }}
  alt="Icona 3"
/> 

<MediaRenderer
  src="images/1e5.png"  
  width="60%"
  height="60%"
  style={{ maxWidth: '100%', maxHeight: '100%' }}
  alt="Icona 3"
/> 


      
<p className={styles.heroSubtitle}>
Customize it by choosing your color and telling us the social profile you want to link to the POLYWATCH T-shirt. 

Anyone who scans the Qr Code on your T-shirt will be redirected to the profile of your choice
      </p>
<MediaRenderer
  src="images/789.png"  
  width="60%"
  height="60%"
  style={{ maxWidth: '100%', maxHeight: '100%' }}
  alt="Icona 3"
/> 
        </div>
    
 


    
    

 

  );
};

export default AboutUs;
