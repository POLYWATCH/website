import Image from "next/image";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import Link from "next/link";
import { MediaRenderer } from "@thirdweb-dev/react";

import { useEffect } from "react";


const Home: NextPage = () => {
  


  return (
    <>










      {/* Prima sezione */}
      <div className={styles.container}>
        <div className={styles.videoBackground}>
          {/* Aggiungi qui il componente LoopingVideo o MediaRenderer per il tuo video */}
        </div>
        <div className={styles.content}>
          <div className={styles.hero}>
            <div className={styles.heroBackground}>
              <div className={styles.heroBackgroundInner}>
              
              <MediaRenderer
  src="/images/555.png"  
  width="100%"
  height="100%"
  style={{ maxWidth: '100%', maxHeight: '100%' }}
  alt="Icona 3"
/>

       
          
                
              </div>



              <div className={styles.iconContainer}>
        
       
        {/* Prima icona */}
       
       
      </div>
      
      
         
            </div>
            <div style={{ margin: '100px' }}>
  {/* Content of the first section */}
</div>

{/* Empty space */}
<div style={{ height: '100px' }} />
            <div className={styles.heroAssetFrame}></div>
            <div className={styles.heroBodyContainer}>
              <div className={styles.heroBody}>
                <h1 className={styles.heroTitle}>
                  
                  


                
                  <MediaRenderer src="ipfs://QmRXPh2WhoWByjkTm4GiXd81XeipryxrMojkNRrCAocpPF/LOGO%20POLY.png"/>
                  <br />
                  <span className={styles.heroTitleGradient}>
                    POLYWATCH   
                  </span>
                </h1>
                <p className={styles.heroSubtitle}>
                
                  <Link
                    className={styles.link}
                    href=""
                    target="_blank"
                  >
                    Explore and collect your exclusive watch NFTs now. Jump aboard and start your journey with POLYWATCH!
                  </Link>{" "}
                 
                </p>
                
                
              </div>
            </div>

          </div>
          
          <MediaRenderer
  src="ipfs://QmUWnAv2s2hVsrsMWcjv7frnU7PsvgUsmVjMW7FVJ9x8GP/screen-rotate.png"  
  width="64px"
  height="64px"
  style={{ maxWidth: '100%', maxHeight: '100%' }}
  alt="Icona 3"
/>



        <p className={styles.iconText}>
          {/* Testo per la prima icona */}
         MOBILE
        </p>
        </div>
        <div className={styles.heroCtaContainer}>
        
              
                </div>
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
                      src="ipfs://QmSQrEP7i2xfiyp1RVfNqRgYSN6awhnGozdxGpySGVxsAC/4455.gif"
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
  
  

<div >
  <MediaRenderer src="/images/SEIKO2.glb" />
</div>


      </div>

      <div style={{ margin: '40px' }}>
  {/* Content of the first section */}
</div>

{/* Empty space */}
<div style={{ height: '40px' }} />
      {/* Spazio tra le sezioni */}
      <div className={styles.sectionSpacer}></div>















{/* Spazio tra le sezioni */}
<div className={styles.sectionSpacer}></div>
      
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
                    src="ipfs://QmdbvqhcQSFosNupe5X1k3m1ba5PxdpeDVkmqiaQDxgJg7/IHP.gif"
                    style={{ width: "100%", height: "auto", maxWidth: "600px" }}
                    className={styles.gifImage}
                  />
                  <br />
                </h1>
                <span className={styles.heroSubtitle}>
                  {/* Aggiungi il testo della sottotitolo se necessario */}
                </span>
                <div className={styles.heroCtaContainer}>
                  {/* Aggiungi collegamenti o bottoni qui */}
                </div>
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
        <a href="/rewards" target="_blank" rel="noopener noreferrer">
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
          Evolve 
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
          Community 
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
















 



      </>



       
  );
};

export default Home;




