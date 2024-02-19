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
  import { BigNumber, ethers, utils } from "ethers";
  import Image from "next/image";
  import { useMemo, useState } from "react";
  import styles from "../styles/TIMEBUY.module.css";
  import { parseIneligibility } from "../utils/parseIneligibility";
import Link from "next/link";
import { animated, interpolate, useSpring } from "react-spring";

  
  const Home = async () => {
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









    const [isAnimationVisible, setAnimationVisible] = useState(false);

    const animationProps = useSpring({
      opacity: isAnimationVisible ? 1 : 0,
      backgroundColor: isAnimationVisible ? 'rgba(255, 215, 0, 0.5)' : 'transparent', // Colore oro con trasparenza
      boxShadow: isAnimationVisible ? '0 0 10px rgba(255, 215, 0, 0.8)' : 'none', // Effetto ombra
      onRest: () => setAnimationVisible(false),
      config: { duration: 300 }, // Regola la durata dell'animazione
    });
  
    const handleSuccess = () => {
      setAnimationVisible(true);
      // Altre azioni in caso di successo
      alert('Claimed!');
    };





  
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







        <div>
      {claimedSupply.isLoading && <p>Caricamento...</p>}
      {claimedSupply.isError && <p>Errore nel caricamento dei dati.</p>}
      {claimedSupply.data && (
       <>
          
          <>
  <p style={{ color: 'gold' }}>TOTAL TIME COLLECTED: {claimedSupply.data.displayValue}</p>
</>

     </>
      )}
    </div>
    <p className={styles.heroSubtitle}>
    IF ELIGIBLE TYPE 1000000 TO SEE HOW MANY TIME YOU CAN CLAIM
          <br />
          
        </p>

    <div style={{ margin: '40px' }}>
  {/* Content of the first section */}
</div>

{/* Empty space */}
<div style={{ height: '40px' }} />



<p className={styles.heroSubtitle}>
  <span style={{ color: 'gold' }}>Price: 1 MATIC = 100 tIME</span>
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