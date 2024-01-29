import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import Link from "next/link";
import { MediaRenderer, Web3Button, useAddress, useContract, useContractRead, useMintToken } from "@thirdweb-dev/react";

import { Flex, Avatar, Heading, SimpleGrid, Spinner,Text, Container } from "@chakra-ui/react";

import BalanceCard from "../components/BalanceCard";
import { TRANSFER_CONTRACT_ADDRESS } from "../const/contractAddresses";
import TransferCard from "../components/TransferCard";
import Events from "../components/Events";
import { BigNumber, ethers } from "ethers";
import { useMemo, useState } from "react";
type TokenParams = {
  to: string;
  amount: number;
  price: string;
};

const TimePage: NextPage = () => {
    




    const address = useAddress();
    function truncateAddress(address: string) {
        return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
    };
    const { contract } = useContract(TRANSFER_CONTRACT_ADDRESS); // Replace with your contract address
    
    const { 
        contract: transferContract,
    } = useContract(TRANSFER_CONTRACT_ADDRESS);

    const {
        data: verifiedTokens,
        isLoading: isVerifiedTokensLoading,
    } = useContractRead(
        transferContract,
        "getVerifiedTokens"
    );




  




    
    const {
      mutate: mintTokens,
      isLoading,
      error,
    } = useMintToken(contract);
  
    if (error) {
      console.error("Failed to mint tokens", error);
    }
    const handleMintClick = async () => {
      // Prezzo del minting: 1 MATIC per 1000 token
      const price = "1"; // Sostituisci con il prezzo effettivo
      const amount = 1000;
    
      try {
        const mintParams: TokenParams = {
          to: "0x40617B73b3115ba887405B503FeF32c98a7dB714",
          amount: amount,
          price: price,
        };
    
        await mintTokens(mintParams);
      } catch (error) {
        console.error("Failed to mint tokens", error);
      }
    };











  async function addTokenFunction() {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
  
      if (provider) {
        const network = await provider.getNetwork();
  
        if (network.chainId === 137) { // Verifica se la rete è Polygon
          const wasAdded = await provider.send('wallet_watchAsset', {
            type: 'ERC20',
            options: {
              address: '0x40617B73b3115ba887405B503FeF32c98a7dB714',
              
              decimals: 18,
              image: 'https://28ea4813380fdaa4b10448e278a508ab.ipfscdn.io/ipfs/bafybeieryhcntvl6lqomhgrkpyxuoj5usayvxmydgmveaur275abmx35r4/654.png',
            },
          } as any); // Usa 'as any' per bypassare temporaneamente l'errore di tipo
  
          if (wasAdded) {
            console.log('Token added to MetaMask on Polygon!');
          } else {
            console.log('HelloWorld Coin has not been added on Polygon');
          }
        } else {
          console.log('You are not on the Polygon network. Please switch to Polygon network in MetaMask.');
        }
      } else {
        console.log('MetaMask provider not found.');
      }
    } catch (error) {
      console.log(error);
    }
  }









  


  return (
    <>
      {/* Prima sezione con la GIF */}
      <div className={styles.container}>
      <div style={{ margin: '100px' }}>
  {/* Content of the first section */}
</div>

{/* Empty space */}
<div style={{ height: '100px' }} />
        <div className={styles.hero}>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  <MediaRenderer
                    src="ipfs://QmWPdszhCpzdi7DWw8ngyzN3Gi3xdC6UjPKFA8Utq8V1BB/ljkk%C3%B2n.gif"
                    style={{ width: "100%", height: "auto", maxWidth: "600px" }}
                    className={styles.gifImage}
                  />
                  <br />
                  $TIME Power Your Journey
                </span>
              </h1>
              
              <span className={styles.heroSubtitle}>
                      TIME token is the governance token of POLYWATCH needed to access various features such as buying or evolving other POLYWATCH , voting on new proposals or taking advantage of exclusive opportunities 
                    </span>
                    <Link className={styles.heroCta} href="/buytime">
                   BUY
                  </Link>
            </div>
          </div>








          <button
      onClick={addTokenFunction}
      style={{
        background: 'linear-gradient(45deg, #8e2de2, #4a00e0)',
        color: '#ffffff',
        padding: '10px 20px',
        fontSize: '16px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        transition: 'box-shadow 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
        animation: 'glow 1s ease-in-out infinite alternate',
      }}
    >
      Add TIME to Metamask
    </button>




          
        </div>
      </div>

      {/* Spazio tra le sezioni */}
      <div className={styles.sectionSpacer}></div>
{/* Seconda sezione con il grafico di TIME */}
<div className={styles.container}>
  <div className={styles.hero}>
    <div className={styles.heroBodyContainer}>
      <div className={styles.heroBody}>
        <h1 className={styles.heroTitle}>
          <span className={styles.heroTitleGradient}>
            TIME Price Chart
          </span>
          
        </h1>
        <div style={{ margin: '40px' }}>
  {/* Content of the first section */}
</div>

{/* Empty space */}
<div style={{ height: '40px' }} />
        <div className={styles.timeGraph}>
          <MediaRenderer
            src="ipfs://QmQai3JNsCZNJp46AUcGzTnKFQfcidn7CLUjiJFNyUuxLs/GRAFICO%20TIME.png"
            style={{ width: "100%", height: "auto", maxWidth: "800px" }}  // Adjust the maxWidth as needed
          />
        </div>
        <div style={{ margin: '10px' }}>
  {/* Content of the first section */}
</div>

{/* Empty space */}
<div style={{ height: '10px' }} />
        <p className={styles.heroSubtitle}>
          MAX SUPPLY 30 MILION</p>
       
          
        <p className={styles.heroSubtitle}>
          
          
          Price: 1 MATIC = 100 tIME
          <br />
          Every 500,000 TIME tokens minted increases the price by 20%.
        </p>
        <div style={{ margin: '60px' }}>
  {/* Content of the first section */}
</div>

{/* Empty space */}
<div style={{ height: '60px' }} />
       
        <MediaRenderer
                    src="ipfs://QmeNymQVjnsHZ9EbeDbDgBVGkiVe1P34sK64cCritbnf1T/EWFWW.png"
                    style={{ width: "100%", height: "auto", maxWidth: "800px" }}
                  />                 
      </div>
    </div>
    
  </div>
</div>

<div style={{ margin: '40px' }}>
  {/* Content of the first section */}
</div>

{/* Empty space */}
<div style={{ height: '40px' }} />
      {/* Spazio tra le sezioni */}
      <div className={styles.sectionSpacer}></div>

      
            


           
      
    </>
  );
};

export default TimePage;
