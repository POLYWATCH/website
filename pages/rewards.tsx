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
        <span className={styles.heroTitleGradient}>WELCOME TO POLYWATCH REWARDS</span>
      </h1>
      

     

      

      <p className={styles.heroSubtitle}>
       
      </p>
      <p className={styles.heroSubtitle}>
        START CLAIM FROM JANUARY 10
      </p>
    
      <MediaRenderer
  src="ipfs://QmR1ouggQafVQwmL9tXAcpAa7qCjT8DCB5Bwhy3J6W3aYF/J%20KJK.gif"  
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
  src="ipfs://Qmac6gtTRRukwUC5bJ73pnddhjm5ank6Fz1AoAqPA6Bp65/Iconic%20Streetwear%20Shirt%401-1536x730.jpg"  
  width="60%"
  height="60%"
  style={{ maxWidth: '100%', maxHeight: '100%' }}
  alt="Icona 3"
/> 

      
    
        </div>
    
  



    
    

 

  );
};

export default AboutUs;
