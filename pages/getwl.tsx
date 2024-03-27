import React from 'react';
import styles from "../styles/Home.module.css"; // Make sure you have your CSS file for styling
import { MediaRenderer } from "@thirdweb-dev/react"; // Assuming you have this component
const IframeComponent: React.FC = () => {
    const iframeStyle: React.CSSProperties = {
        maxWidth: '90%', // Ridotto al 90% della larghezza del contenitore per una migliore visualizzazione su dispositivi mobili
        height: '80vh', // Altezza del 80% della viewport
        display: 'block', // Mostra l'iframe come blocco
        margin: '0 auto', // Centra l'iframe orizzontalmente
    };

    return (

       
   





    
     



        <div style={{ textAlign: 'center' }}>

  {/* Use MediaRenderer for the looping video background */}
  <div style={{ margin: '300px' }}>
  {/* Content of the first section */}
</div>
{/* Empty space */}


<h1 className={styles.heroTitle}>
        <p className={styles.herotitle}></p>
        <span className={styles.heroTitleGradient}>Get your NFT WL PASS</span>
      </h1>
      
{/* Empty space */}
<div style={{ height: '100px' }} />
  {/* Use MediaRenderer for the looping video background */}
  <div style={{ margin: '100px' }}>
  {/* Content of the first section */}
</div> <MediaRenderer
  src="images/Card.png"  
  width="60%"
  height="60%"
  style={{ maxWidth: '100%', maxHeight: '100%' }}
  alt="Icona 3"
/> 
{/* Empty space */}
<div style={{ height: '100px' }} />




<h1 className={styles.heroTitle}>
        <p className={styles.herotitle}></p>
        <span className={styles.heroTitleGradient}> The pass mint is completely free, and grants access to the POLYWATCH mint.

If you have are already WL you can still take one Pass and send it to a friend as a gift!📦
</span>
      </h1>

            <iframe
                src="https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/erc1155.html?contract=0xd273cb281B21b88dFd27F4d5C8759E84F09c075F&chain=%7B%22name%22%3A%22Polygon+Mainnet%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F137.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22matic%22%2C%22chainId%22%3A137%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22polygon%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fpolygon%2F512.png%22%2C%22width%22%3A512%2C%22height%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=28ea4813380fdaa4b10448e278a508ab&tokenId=0&theme=dark&primaryColor=purple"
                style={iframeStyle}
                frameBorder={0}
            ></iframe>
        </div>
    );
};

export default IframeComponent;
