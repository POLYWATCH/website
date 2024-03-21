import Image from "next/image";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import Link from "next/link";
import { ConnectWallet, MediaRenderer, useAddress } from "@thirdweb-dev/react";


import { CSSProperties, StrictMode, useEffect, useRef, useState } from "react";
import EmailSignIn from "../components/EmailLogin";
import { SocialLoginButton } from "../components/SocialLoginButton";


import Spline from '@splinetool/react-spline';
import Highlights from "../components/Highlights";
import Features from "../components/Features";
import FAQ from "../components/FAQ";
import { useMotionValueEvent, useScroll } from "framer-motion"
import { Button, Card, CardBody,  CardFooter, CardHeader, Heading, SimpleGrid } from "@chakra-ui/react";

  const Home: NextPage = () => {
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  }
  const address = useAddress();

  
  
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#000000");

  const carouselRef = useRef(null)
  const { scrollX } = useScroll({
    container: carouselRef
  })











  




  return (
    <>
    
<div className={styles.splineContainer}>
      <Spline
        scene="https://prod.spline.design/1YbqWrHPBmGG0m8c/scene.splinecode"
        className={styles.spline} // Puoi utilizzare una classe CSS specifica per il componente Spline
      />
    </div>






    <StrictMode>
    
  </StrictMode>

    



  




      {/* Prima sezione */}
     
       

      
     

     

            
            
                  
                  







      
               
                
                
              
            
            
          



       
       
        <div className={styles.heroCtaContainer}>
        
              
                </div>
      
      
     







      

      {/* Seconda sezione */}
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.hero}>
            <div className={styles.heroBackground}>
              <div className={styles.heroBackgroundInner}>
                <Image
                  src="/hero-gradient.png"
                  width={1390}
                  height={1390}
                  alt="Background gradient from black to purple"
                  quality={100}
                  className={styles.gradient}
                />
              </div>
            </div>
            <div className={styles.heroAssetFrame}></div>
            <div className={styles.heroBodyContainer}>
              <div className={styles.heroBody}>
                <h1 className={styles.heroTitle}>
                  <span className={styles.heroTitleGradient}>
                    P0WERED BY<br />
                    <span className={styles.subTitle}>
                      $TIME
                    </span>
                  </span>
                  <div className={styles.container2}>
                    <MediaRenderer
                      src="/images/TIME11.png"
                    />
                    <br />
                    <span className={styles.heroSubtitle}>
                      The TIME token is the governance token for P0LYWATCH. It s an ERC20 token available on POLYGON mainnet.
                    </span>
                    <Link className={styles.heroCta} href="$Time">
                      ACCESS
                    </Link>
                  </div>
                </h1>


                <MediaRenderer src="/images/GRANDE3.glb" style={{ width: '200px', height: '200px' }} />


                <p style={{ textAlign: 'center' }}>
  <div className={styles.heroSubtitle}>
    Explore and collect your exclusive watch NFTs now. Jump aboard and start your journey with POLYWATCH!
  </div>
</p>

        <Highlights />


        <Link href="/evolve/evolve">
  
  
</Link>





                <div style={{ margin: '40px' }}>
  {/* Content of the first section */}
</div>

{/* Empty space */}
<div style={{ height: '40px' }} />
                <span className={styles.heroTitle}>
                      Are you a past owner of $TIME & POLYWATCH ? 
                    </span>
                    <span className={styles.heroSubtitle}>
                    Claim in full security your $TIME & POLYWATCH .
                    </span>
                    <Link className={styles.heroCta} href="/buytime">
                      CLAIM $TIME
                    </Link>
                    <Link className={styles.heroCta} href="/claim">
                      CLAIM POLYWATCH
                    </Link>

                <p className={styles.heroSubtitle}>
                
                </p>

                <div className={styles.heroCtaContainer}>
                  {/* Aggiungi collegamenti o bottoni qui */}
                </div>
              </div>
            </div>
          </div>
        </div>



        
        

        <p className={styles.heroSubtitle}>
     
     <strong>JOIN THE REVOLUTION</strong>
   </p>
   <p className={styles.heroSubtitle}>
   Get your POLYWATCH earn time and be the best out there. Secure access to the beta test mobile game
   </p>
   <MediaRenderer
src="/images/peie.png"  
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
<span className={styles.heroTitleGradient}>
One-by-one
                  </span>
   
   
   <p className={styles.heroSubtitle}>
   Each Polywatch is meticulously crafted, ONE BY ONE, to ensure unparalleled authenticity. 
   These NFTs aren t just digital watches; they are true digital art pieces. With distinct straps, faces, and hands, every Polywatch is a statement of uniqueness.
  Beyond its functional value, each timepiece represents an irreplicable digital artwork, emphasizing our commitment to originality and excellence
   </p>
  
   <Features />
  

      </div>
      
      <div style={{ margin: '40px' }}>
  {/* Content of the first section */}
</div>

























      {/* Terza sezione */}
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.hero}>
            <div className={styles.heroBackground}>
              <div className={styles.heroBackgroundInner}>
                <Image
                  src="/hero-gradient.png"
                  width={1390}
                  height={1390}
                  alt="Background gradient from black to purple"
                  quality={100}
                  className={styles.gradient}
                />
              </div>

             



            </div>
            <div className={styles.heroAssetFrame}></div>
            <div className={styles.heroBodyContainer}>
              <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleGradient}>
                           GET REWARDED 
                  </span>

                  <div style={{ margin: '40px' }}>
  {/* Content of the first section */}
</div>

{/* Empty space */}
<div style={{ height: '40px' }} />
                  <MediaRenderer
                    src="/images/reward11.png"
                    style={{ width: "120%", height: "auto", maxWidth: "680px" }}
                    className={styles.gifImage}
                  />
                  <br />
                </h1>
                
                </div>
                </div>
          </div>
        </div>
      </div>
      
      {/* Quarta sezione (icone) */}
      
                  
<div className={styles.container}>
  <div className={styles.content}>
    <div className={styles.iconsSection}>
      <div className={styles.iconContainer}>
        {/* Prima icona */}
        <a href="/mint" target="_blank" rel="noopener noreferrer">
  <MediaRenderer
    src="ipfs://QmWNn6FAvrfhkg8X4JU9h8knGABtV34XKiAZZzy4G15QHa/wired-gradient-1300-enter-key.gif"  
    width="64px"
    height="64px"
    style={{ maxWidth: '100%', maxHeight: '100%' }}
    alt="Icona 3"
  />
</a>
        <p className={styles.iconText}>
          {/* Testo per la prima icona */}
          Polywatch rewards
        </p>
      </div>

      <div className={styles.iconContainer}>
        {/* Seconda icona */}
        <a href="/evolve/evolve" target="_blank" rel="noopener noreferrer">
        <MediaRenderer
  src="ipfs://QmdNrxbkVPJjCa35YdwbSsx7B7D22D8h4nBKZ2o9YLC9an/wired-gradient-1383-sphere.gif"  
  width="64px"
  height="64px"
  style={{ maxWidth: '100%', maxHeight: '100%' }}
  alt="Icona 3"
/>
</a>
       <p className={styles.iconText}>
          {/* Testo per la seconda icona */}
          Evolve your Polywatch
        </p>
      </div>

      <div className={styles.iconContainer}>
        {/* Terza icona */}
        <a href="https://side.xyz/polywatch" target="_blank" rel="noopener noreferrer">
        <MediaRenderer
  src="ipfs://QmVGj1ePonGJm5Gf3jR4SaagZsGdPZNu2hgaifZdkypzys/wired-gradient-955-demand.gif"  
  width="64px"
  height="64px"
  style={{ maxWidth: '100%', maxHeight: '100%' }}
  alt="Icona 3"
/>
</a>
        <p className={styles.iconText}>
          {/* Testo per la terza icona */}
          Connect with the community 
        </p>
      </div>
      
  
    </div>
  </div>
  <div style={{ margin: '40px' }}>
  {/* Content of the first section */}
</div>

{/* Empty space */}
<div style={{ height: '40px' }} />

  <p className={styles.heroSubtitle}>
  Benefit from owning POLYWATCH and TIME and modify the experience according to your strategy. More conservative or bolder!
  Secure rewards ,special access to discounts or private sections , and connect with other watch and blockchain enthusiasts
   </p>
   <MediaRenderer
                    src=""
                    style={{ width: "100%", height: "auto", maxWidth: "600px" }}
                    className={styles.gifImage}
                  />
</div>



  

<Spline scene="https://prod.spline.design/fzygWVLkzaqajGv0/scene.splinecode" />




<>
{/* Terza sezione */}
<div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.hero}>
            <div className={styles.heroBackground}>
              <div className={styles.heroBackgroundInner}>
                
              </div>
            </div>
            <div className={styles.heroAssetFrame}></div>
            <div className={styles.heroBodyContainer}>
              <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleGradient}>
                           NEW TO WEB3?
                  </span>






                  <Spline scene="https://prod.spline.design/VYZQkKWDW06PKHS7/scene.splinecode" />






                  <div style={{ margin: '20px' }}>
  {/* Content of the first section */}
</div>

{/* Empty space */}
<div style={{ height: '20px' }} />
                 
                  
                  <br />
                </h1>
                <p className={styles.heroSubtitle}>
                You are not very familiar with web3? we recommend in any case to delve deeper into the world of web3, 
                but POLYWATCH gives the possibility to create a decentralized wallet with your own e-mail or social profiles.
   </p>
                
              </div>
              <span className={styles.heroTitleGradient}>
                           CREATE A WALLET WITH YOUR E-MAIL . FAST AND EASY
                  </span>
            </div>
          </div>
        </div>
      </div>













      {address ? (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <ConnectWallet />
    </div>
  ) : (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '50%',
          height: '100vh',
        }}
      >
        <div
          style={{
            padding: '0.5rem 1rem',
          }}
        >
          <MediaRenderer
            src={"/images/LOGOPOLY.png"}
            height="48px"
            width="48px"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0.5rem 1rem',
            borderBottom: '1px solid #EEE',
            height: '100%',
          }}
        >
          <div
            style={{
              minWidth: '80%',
            }}
          >
            <h1>Sign In</h1>
            <EmailSignIn />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '2rem',
                marginBottom: '1rem',
                color: '#CCC',
              }}
            >
              <hr style={{ width: '45%', borderTop: '1px solid #CCC' }} />
              <p>or</p>
              <hr style={{ width: '45%', borderTop: '1px solid #CCC' }} />
            </div>
        






            <SocialLoginButton strategy="google" />
                
                <SocialLoginButton strategy="apple" />
                <SocialLoginButton strategy="facebook" />










          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '50%',
          height: '100vh',
          backgroundColor: '#EEE',
          backgroundImage: 'url(/images/NUOVODROP.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
    </div>
  )}
</>


{/* Spazio tra le sezioni */}






      
      
      
<div className={styles.sectionSpacer}></div>

{/* Terza sezione */}
 
          <div className={styles.hero}>
            <div className={styles.heroBackground}>
              <div className={styles.heroBackgroundInner}>
                
              </div>
            </div>
            
            <div className={styles.heroBodyContainer}>
             
              <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleGradient}>
                           OUR PARTNERS
                  </span>





                  
                  <br />
                </h1>
                
                
              </div>
             
            </div>
          
      
               
         
        
      
      










  

      {/* Horizontal scroll strip */}
      <div className={styles.imageStrip}>
        

      
        <div className={styles.imageItem}>
          <MediaRenderer src="ipfs://QmYBe3KC22CiHmD4eJBCXvNPdiRn7ArPqMJzyXoUmvw5p7/free-polygon-token-4086726-3379856.png" width="50px" height="50px" />
        </div>
        <div className={styles.imageItem}>
          <MediaRenderer src="ipfs://QmW1eHz5KboacfeNQ2ykcrdZeqrUQcJ5zuPcQCMwNbkaKW/UKEGFUI.png" width="50px" height="50px" />
        </div>
        <div className={styles.imageItem}>
          <MediaRenderer src="ipfs://Qmdr1Sucz9DePq82fhBUfR6kYizZD68pei1f9tSXrhKEb6/MKMvdx9H_400x400.jpg" width="50px" height="50px" />
        </div>
        <div className={styles.imageItem}>
          <MediaRenderer src="ipfs://Qmdr1Sucz9DePq82fhBUfR6kYizZD68pei1f9tSXrhKEb6/ktlahZTn_400x400.jpg" width="50px" height="50px" />
        </div>
        <div className={styles.imageItem}>
          <MediaRenderer src="ipfs://Qmdr1Sucz9DePq82fhBUfR6kYizZD68pei1f9tSXrhKEb6/1v30CL2p_400x400.jpg" width="50px" height="50px" />
        </div>
        <div className={styles.imageItem}>
          <MediaRenderer src="ipfs://Qmdr1Sucz9DePq82fhBUfR6kYizZD68pei1f9tSXrhKEb6/IyOkdYI1_400x400.jpg" width="50px" height="50px" />
        </div>
        <div className={styles.imageItem}>
          <MediaRenderer src="ipfs://Qmdr1Sucz9DePq82fhBUfR6kYizZD68pei1f9tSXrhKEb6/OwXIH6QD_400x400.jpg" width="50px" height="50px" />
        </div>
        <div className={styles.imageItem}>
          <MediaRenderer src="ipfs://Qmdr1Sucz9DePq82fhBUfR6kYizZD68pei1f9tSXrhKEb6/7xBv-QNY_400x400.jpg" width="50px" height="50px" />
        </div>
        <div className={styles.imageItem}>
          <MediaRenderer src="ipfs://Qmdr1Sucz9DePq82fhBUfR6kYizZD68pei1f9tSXrhKEb6/sj5nzV_t_400x400.jpg" width="50px" height="50px" />
        </div>
        <div className={styles.imageItem}>
          <MediaRenderer src="ipfs://Qmdr1Sucz9DePq82fhBUfR6kYizZD68pei1f9tSXrhKEb6/Ezj3cw3z_400x400.jpg" width="50px" height="50px" />
        </div>
        <div className={styles.imageItem}>
          <MediaRenderer src="ipfs://Qmdr1Sucz9DePq82fhBUfR6kYizZD68pei1f9tSXrhKEb6/-IsUmDIW_400x400.jpg" width="50px" height="50px" />
        </div>
        <div className={styles.imageItem}>
          <MediaRenderer src="ipfs://Qmdr1Sucz9DePq82fhBUfR6kYizZD68pei1f9tSXrhKEb6/y3h0atRo_400x400.jpg" width="50px" height="50px" />
        </div>
        {/* Aggiungi le rimanenti immagini */}
        {/* Esempio: */}
        {/* <div className={styles.imageItem}>
          <MediaRenderer src="Nuovo link" width="50px" height="50px" />
        </div> */}
        {/* Continua ad aggiungere le altre immagini */}
      </div>






<FAQ />










 



      </>



       
  );
};

export default Home;
