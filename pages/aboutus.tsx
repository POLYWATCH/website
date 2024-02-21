// Import necessary modules and components
import React from "react";
import styles from "../styles/Home.module.css"; // Make sure you have your CSS file for styling
import { MediaRenderer } from "@thirdweb-dev/react"; // Assuming you have this component
import { Navbar } from "../components/Navbar/Navbar";
import Spline from "@splinetool/react-spline";




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
        <span className={styles.heroTitleGradient}>WELCOME TO POLYWATCH</span>
      </h1>
      <MediaRenderer
  src="ipfs://QmdyGLRPMzw3qjoSsQVqxLPGBB3i8fEF3skinNn78nmzem/BJL.gif"  
  width="60%"
  height="60%"
  style={{ maxWidth: '100%', maxHeight: '100%' }}
  alt="Icona 3"
/>
<div style={{ margin: '40px' }}>
  {/* Content of the first section */}
</div>

{/* Empty space */}
<div style={{ height: '40px' }} />

      {/* Add more content or sections as needed */}
      <p className={styles.heroSubtitle}>
        PolyWatch is more than just an NFT project; it s a project dedicated
        to watch enthusiasts and blockchain lovers. We are here to offer you an
        exclusive collection of PolyWatch NFTs, each meticulously crafted with
        care and precision.
      </p>

      

      <p className={styles.heroSubtitle}>
        <strong>Evolve Your PolyWatch</strong>
      </p>
      <p className={styles.heroSubtitle}>
        With PolyWatch, it s not just a watch; it s an ever-evolving experience.
        Use our native token, TIME, to unlock exclusive features and increase
        your earnings. Evolve your PolyWatch to access unique benefits and
        special enhancements.
      </p>
    
      <MediaRenderer
  src="ipfs://QmR1ouggQafVQwmL9tXAcpAa7qCjT8DCB5Bwhy3J6W3aYF/J%20KJK.gif"  
  width="60%"
  height="60%"
  style={{ maxWidth: '100%', maxHeight: '100%' }}
  alt="Icona 3"
/> 
<div style={{ margin: '40px' }}>
  {/* Content of the first section */}
</div>

{/* Empty space */}
<div style={{ height: '40px' }} />
      <p className={styles.heroSubtitle}>
     
        <strong>The Team Behind PolyWatch</strong>
      </p>
      <p className={styles.heroSubtitle}>
        The PolyWatch team consists of Italian professionals with experience in
        the blockchain field. We are passionate about bringing together
        blockchain and watch enthusiasts, creating a community that supports
        each other.
      </p>
      <MediaRenderer
  src="ipfs://QmZZVdtavQ7BNUbneXbNsDcKchigd9Qk3jXUBKUd4QhptA/KHBQQ.gif"  
  width="60%"
  height="60%"
  style={{ maxWidth: '100%', maxHeight: '100%' }}
  alt="Icona 3"
/> <div style={{ margin: '40px' }}>
  {/* Content of the first section */}
</div>

{/* Empty space */}
<div style={{ height: '40px' }} />
      <p className={styles.heroSubtitle}>
        <strong>Our Mission</strong>
      </p>
      <p className={styles.heroSubtitle}>
      PolyWatch s primary goal is to transform NFT watches into genuine luxury assets and investment opportunities akin to traditional timepieces. We are committed to providing cutting-edge products and services, positioning PolyWatch as the go-to destination for watch and blockchain enthusiasts.

Transparency is our cornerstone value: we want every step of our process to be visible and understandable to our community. User security is at the forefront of our operations, and we are dedicated to promptly addressing any issues that may arise.

We take pride in being Italian and carrying forward the tradition of excellence in design and innovation. With PolyWatch we are polishing dreams and creating unique investment opportunities. Join us on this adventure, where every detail matters, and every step is part of an extraordinary journey.
      </p>
      
      

   {/* Quarta sezione (icone) */}
      
                  
   <div className={styles.container}>
  <div className={styles.content}>
    <div className={styles.iconsSection}>
      <div className={styles.iconContainer}>
        {/* Prima icona */}
        <a href="/factory" target="_blank" rel="noopener noreferrer">
  <MediaRenderer
    src="ipfs://QmUy4fNRe9SvFzVpqcUo85NQWqw2tgfn3JcAaFdFnM3rY5/icons8-opensea-50.png"  
    width="64px"
    height="64px"
    style={{ maxWidth: '100%', maxHeight: '100%' }}
    alt="Icona 3"
  />
</a>
        <p className={styles.iconText}>
          {/* Testo per la prima icona */}
          OPENSEA
        </p>
      </div>

      <div className={styles.iconContainer}>
        {/* Seconda icona */}
        <a href="https://medium.com/@POLYWATCH" target="_blank" rel="noopener noreferrer">
        <MediaRenderer
  src="ipfs://QmUy4fNRe9SvFzVpqcUo85NQWqw2tgfn3JcAaFdFnM3rY5/medium.png"  
  width="64px"
  height="64px"
  style={{ maxWidth: '100%', maxHeight: '100%' }}
  alt="Icona 3"
/>
</a>
        <p className={styles.iconText}>
          {/* Testo per la seconda icona */}
          MEDIUM
        </p>
      </div>

      <div className={styles.iconContainer}>
        {/* Terza icona */}
        <a href="https://twitter.com/POLY_WATCH" target="_blank" rel="noopener noreferrer">
        <MediaRenderer
  src="ipfs://QmUy4fNRe9SvFzVpqcUo85NQWqw2tgfn3JcAaFdFnM3rY5/twitter.png"  
  width="64px"
  height="64px"
  style={{ maxWidth: '100%', maxHeight: '100%' }}
  alt="Icona 3"
/>
</a>
        <p className={styles.iconText}>
          {/* Testo per la terza icona */}
          TWITTER
        </p>
      
    
        </div>
    </div>
  </div>
</div>


      {/* Add more sections and relevant information about your business */}
    </div>
    

 

  );
};

export default AboutUs;
