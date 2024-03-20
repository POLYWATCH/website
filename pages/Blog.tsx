import React from "react";
import styles from "../styles/Home.module.css";
import { MediaRenderer } from "@thirdweb-dev/react";
import Navbar from "../components/Navbar/Navbar";
import MultiActionAreaCard from "../components/blogcomp";
import MultiActionAreaCard1 from "../components/blogcomp1";
import MultiActionAreaCard2 from "../components/blogcomp2";
import MultiActionAreaCard3 from "../components/blogcomp3";

const Blog: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      
      {/* Utilizza Flexbox per i tre riquadri in una riga */}
    
        <div className={styles.threeDBox}>
          <h1 className={styles.heroTitle}>
            <p className={styles.herotitle}></p>
               
<div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  
                  <br />
                  POLYWATCH BLOG
                </span>
              </h1>
              
              <span className={styles.heroSubtitle}>
              Transparency first! every week we will update the progress and news on the blog, so as to be as transparent as possible with the commmunity and to have a place to have all the news collected
                    </span>
                   
            </div>
            
        
          </h1>
          
        
        </div>
         
    {/* Use MediaRenderer for the looping video background */}
    <div style={{ margin: '35px' }}>
  {/* Content of the first section */}
</div>

{/* Empty space */}
<div style={{ height: '35px' }} />

        <MultiActionAreaCard/>
        <div style={{ margin: '35px' }}>
  {/* Content of the first section */}
</div>

{/* Empty space */}
<div style={{ height: '35px' }} />

        <MultiActionAreaCard1/>
        <div style={{ margin: '35px' }}>
  {/* Content of the first section */}
</div>

{/* Empty space */}
<div style={{ height: '35px' }} />

        <MultiActionAreaCard2/>
        <div style={{ margin: '35px' }}>
  {/* Content of the first section */}
</div>

{/* Empty space */}
<div style={{ height: '35px' }} />

        <MultiActionAreaCard3/>
      </div>
    
    
  );
};

export default Blog;
