import {
  MediaRenderer,
    useActiveClaimConditionForWallet,
    useAddress,
    useClaimConditions,
    useClaimerProofs,
    useClaimIneligibilityReasons,
    useContract,
    useContractMetadata,
    useTokenSupply,
    Web3Button,
  } from "@thirdweb-dev/react";
  import { BigNumber, utils } from "ethers";
  import Image from "next/image";
  import { useMemo, useState } from "react";
  import styles from "../styles/TIMEBUY.module.css";
  import { parseIneligibility } from "../utils/parseIneligibility";
import Link from "next/link";
import { BigNumber, ethers } from "ethers";


  
  const Home = () => {
    const tokenAddress = "0x40617B73b3115ba887405B503FeF32c98a7dB714";
    const { contract } = useContract(tokenAddress, "token-drop");
    const address = useAddress();
    const [quantity, setQuantity] = useState(1);
    const { data: contractMetadata } = useContractMetadata(contract);
  
    const claimConditions = useClaimConditions(contract);
    const activeClaimCondition = useActiveClaimConditionForWallet(
      contract,
      address
    );
    const claimerProofs = useClaimerProofs(contract, address || "");
    const claimIneligibilityReasons = useClaimIneligibilityReasons(contract, {
      quantity,
      walletAddress: address || "",
    });
  
    const claimedSupply = useTokenSupply(contract);







  
    






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

















    
    const totalAvailableSupply = useMemo(() => {
      try {
        return BigNumber.from(activeClaimCondition.data?.availableSupply || 0);
      } catch {
        return BigNumber.from(1_000_000_000);
      }
    }, [activeClaimCondition.data?.availableSupply]);
  
    const numberClaimed = useMemo(() => {
      return BigNumber.from(claimedSupply.data?.value || 0).toString();
    }, [claimedSupply]);
  
    const numberTotal = useMemo(() => {
      const n = totalAvailableSupply.add(
        BigNumber.from(claimedSupply.data?.value || 0)
      );
      if (n.gte(1_000_000_000)) {
        return "";
      }
      return n.toString();
    }, [totalAvailableSupply, claimedSupply]);
  
    const priceToMint = useMemo(() => {
      if (quantity) {
        const bnPrice = BigNumber.from(
          activeClaimCondition.data?.currencyMetadata.value || 0
        );
        return `${utils.formatUnits(
          bnPrice.mul(quantity).toString(),
          activeClaimCondition.data?.currencyMetadata.decimals || 18
        )} ${activeClaimCondition.data?.currencyMetadata.symbol}`;
      }
    }, [
      activeClaimCondition.data?.currencyMetadata.decimals,
      activeClaimCondition.data?.currencyMetadata.symbol,
      activeClaimCondition.data?.currencyMetadata.value,
      quantity,
    ]);
  
    const maxClaimable = useMemo(() => {
      let bnMaxClaimable;
      try {
        bnMaxClaimable = BigNumber.from(
          activeClaimCondition.data?.maxClaimableSupply || 0
        );
      } catch (e) {
        bnMaxClaimable = BigNumber.from(1_000_000_000);
      }
  
      let perTransactionClaimable;
      try {
        perTransactionClaimable = BigNumber.from(
          activeClaimCondition.data?.maxClaimablePerWallet || 0
        );
      } catch (e) {
        perTransactionClaimable = BigNumber.from(1_000_000_000);
      }
  
      if (perTransactionClaimable.lte(bnMaxClaimable)) {
        bnMaxClaimable = perTransactionClaimable;
      }
  
      const snapshotClaimable = claimerProofs.data?.maxClaimable;
  
      if (snapshotClaimable) {
        if (snapshotClaimable === "0") {
          // allowed unlimited for the snapshot
          bnMaxClaimable = BigNumber.from(1_000_000_000);
        } else {
          try {
            bnMaxClaimable = BigNumber.from(snapshotClaimable);
          } catch (e) {
            // fall back to default case
          }
        }
      }
  
      let max;
      if (totalAvailableSupply.lt(bnMaxClaimable)) {
        max = totalAvailableSupply;
      } else {
        max = bnMaxClaimable;
      }
  
      if (max.gte(1_000_000_000)) {
        return 1_000_000_000;
      }
      return max.toNumber();
    }, [
      claimerProofs.data?.maxClaimable,
      totalAvailableSupply,
      activeClaimCondition.data?.maxClaimableSupply,
      activeClaimCondition.data?.maxClaimablePerWallet,
    ]);
  
    const isSoldOut = useMemo(() => {
      try {
        return (
          (activeClaimCondition.isSuccess &&
            BigNumber.from(activeClaimCondition.data?.availableSupply || 0).lte(
              0
            )) ||
          numberClaimed === numberTotal
        );
      } catch (e) {
        return false;
      }
    }, [
      activeClaimCondition.data?.availableSupply,
      activeClaimCondition.isSuccess,
      numberClaimed,
      numberTotal,
    ]);
  
    const canClaim = useMemo(() => {
      return (
        activeClaimCondition.isSuccess &&
        claimIneligibilityReasons.isSuccess &&
        claimIneligibilityReasons.data?.length === 0 &&
        !isSoldOut
      );
    }, [
      activeClaimCondition.isSuccess,
      claimIneligibilityReasons.data?.length,
      claimIneligibilityReasons.isSuccess,
      isSoldOut,
    ]);
  
    const isLoading = useMemo(() => {
      return activeClaimCondition.isLoading || !contract;
    }, [activeClaimCondition.isLoading, contract]);
  
    const buttonLoading = useMemo(
      () => isLoading || claimIneligibilityReasons.isLoading,
      [claimIneligibilityReasons.isLoading, isLoading]
    );
    const buttonText = useMemo(() => {
      if (isSoldOut) {
        return "Sold Out";
      }
  
      if (canClaim) {
        const pricePerToken = BigNumber.from(
          activeClaimCondition.data?.currencyMetadata.value || 0
        );
        if (pricePerToken.eq(0)) {
          return "Mint (Free)";
        }
        return `Mint (${priceToMint})`;
      }
      if (claimIneligibilityReasons.data?.length) {
        return parseIneligibility(claimIneligibilityReasons.data, quantity);
      }
      if (buttonLoading) {
        return "Checking eligibility...";
      }
  
      return "Claiming not available";
    }, [
      isSoldOut,
      canClaim,
      claimIneligibilityReasons.data,
      buttonLoading,
      activeClaimCondition.data?.currencyMetadata.value,
      priceToMint,
      quantity,
    ]);
  
    return (
      <div className={styles.container}>
        {(claimConditions.data &&
          claimConditions.data.length > 0 &&
          activeClaimCondition.isError) ||
          (activeClaimCondition.data &&
            activeClaimCondition.data.startTime > new Date() && (
              <p>Drop is starting soon. Please check back later.</p>
            ))}
  
        {claimConditions.data?.length === 0 ||
          (claimConditions.data?.every((cc) => cc.maxClaimableSupply === "0") && (
            <p>
              This drop is not ready to be minted yet. (No claim condition set)
            </p>
          ))}
  
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            
           <h2 className={styles.title} style={{ textAlign: 'center' }}>
  <div>BUY $TIME</div>
  <div>JOIN THE MOVEMENT</div>
</h2>

          </>
        )}
  <MediaRenderer
                    src="ipfs://QmXECvHfEsK6an8ybg4s96Re4pVsieq4d2oPu4HFtr7fzg/jjkv.png"
                    style={{ width: "100%", height: "auto", maxWidth: "800px" }}
                  />     
        <hr className={styles.divider} />
  
        <div className={styles.claimGrid}>
          <input
            type="number"
            placeholder="Enter amount to claim"
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (value > maxClaimable) {
                setQuantity(maxClaimable);
              } else if (value < 1) {
                setQuantity(1);
              } else {
                setQuantity(value);
              }
            }}
            value={quantity}
            className={`${styles.textInput} ${styles.noGapBottom}`}
          />
                 
                
          <Web3Button
            theme="dark"
            contractAddress={tokenAddress}
            action={(contract) => contract.erc20.claim(quantity)}
            onSuccess={() => alert("Claimed!")}
            onError={(err) => alert(err)}
          >
            {buttonText}
          </Web3Button>
          <div>



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
      Add TIME To MetaMask
    </button> 






        




        <div>
      {claimedSupply.isLoading && <p>Caricamento...</p>}
      {claimedSupply.isError && <p>Errore nel caricamento dei dati.</p>}
      {claimedSupply.data && (
        <>
          
         <p style={{ color: 'gold' }}>TOTAL TIME COLLECTED: {claimedSupply.data.displayValue}</p>
        </>
      )}
    </div>
 <p className={styles.heroSubtitle}>
         IF ELIGIBLE TYPE 1000000 TO SEE HOW MANY $TIME YOU CAN CLAIM
          <br />
          
        </p>
    <div style={{ margin: '40px' }}>
  {/* Content of the first section */}
</div>

{/* Empty space */}
<div style={{ height: '40px' }} />

 

        <p className={styles.heroSubtitle}>
          Price: 1 MATIC = 100 TIME
          <br />
          Every 500,000 TIME tokens minted increases the price by 20%.
        </p>
        
       <Link
  className={styles.heroCta}
  href="https://polygonscan.com/address/0x40617B73b3115ba887405B503FeF32c98a7dB714"
  style={{ color: 'gold' }}
>
  CLICK HERE TO IMPORT $TIME TO YOUR WALLET
</Link>



        
       
      </div>
    );
  };
  
  export default Home;
