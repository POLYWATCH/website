import React, { useEffect, useMemo, useState } from "react";
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
import styles from "../styles/TIMEBUY.module.css";
import { parseIneligibility } from "../components/utils/parseIneligibility";
import Link from "next/link";
import FAQ from "../components/FAQ";
import LineChart from "../components/LineChart";

const BuyTime = () => {
  const tokenAddress = "0x40617B73b3115ba887405B503FeF32c98a7dB714";
  const { contract, isLoading: contractLoading } = useContract(
    tokenAddress,
    "token-drop"
  );
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

  const [totalAvailableSupply, setTotalAvailableSupply] = useState(BigNumber.from(5_000_00));

  const mintTokens = async (quantity: number) => {
    const updatedTotalSupply = totalAvailableSupply.sub(quantity);
    setTotalAvailableSupply(updatedTotalSupply);
  };

  useEffect(() => {
    if (!contract || !address) return;
    mintTokens(quantity);
  }, [contract, address, quantity]);

  const claimedTokens = useMemo(() => {
    return BigNumber.from(claimedSupply.data?.value || 0);
  }, [claimedSupply]);


  const availabilityPercentage = useMemo(() => {
    const maxClaimable = BigNumber.from(1349000); // Massimo claimable supply
    const percentage = claimedTokens.mul(BigNumber.from(10000)).mul(BigNumber.from(100)).div(maxClaimable);
    const cappedPercentage = percentage.lt(100) ? percentage : BigNumber.from(100);
    return cappedPercentage.toNumber() / 100; // Assicura che la percentuale non superi il 100%
  }, [claimedTokens]);

// Colore verde chiaro per la barra
const barColor = 'hsl(120, 100%, 75%)'; // Verde chiaro

// Usa barColor per impostare il colore della barra



  const numberClaimed = useMemo(() => {
    return BigNumber.from(claimedSupply.data?.value || 0).toString();
  }, [claimedSupply]);

  const numberTotal = useMemo(() => {
    const n = totalAvailableSupply.add(BigNumber.from(claimedSupply.data?.value || 0));
    if (n.gte(1_000_000_000)) {
      return "";
    }
    return n.toString();
  }, [totalAvailableSupply, claimedSupply]);

  const priceToMint = useMemo(() => {
    if (quantity) {
      const bnPrice = BigNumber.from(activeClaimCondition.data?.currencyMetadata.value || 0);
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
      bnMaxClaimable = BigNumber.from(activeClaimCondition.data?.maxClaimableSupply || 0);
    } catch (e) {
      bnMaxClaimable = BigNumber.from(1_000_000_000);
    }

    let perTransactionClaimable;
    try {
      perTransactionClaimable = BigNumber.from(activeClaimCondition.data?.maxClaimablePerWallet || 0);
    } catch (e) {
      perTransactionClaimable = BigNumber.from(1_000_000_000);
    }

    if (perTransactionClaimable.lte(bnMaxClaimable)) {
      bnMaxClaimable = perTransactionClaimable;
    }

    const snapshotClaimable = claimerProofs.data?.maxClaimable;

    if (snapshotClaimable) {
      if (snapshotClaimable === "0") {
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
          BigNumber.from(activeClaimCondition.data?.availableSupply || 0).lte(0)) ||
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
      const pricePerToken = BigNumber.from(activeClaimCondition.data?.currencyMetadata.value || 0);
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
          <div>
            <MediaRenderer src="/images/TIMETOKENUFFICILAE.glb" />
          </div> 
          <hr className={styles.divider} />
        </>
      )}

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
          isDisabled={!canClaim}
        >
          {buttonText}
        </Web3Button>
      </div>

     
 
      <div>
  {claimedSupply.isLoading && <p>Loading...</p>}
  {claimedSupply.isError && <p>Error loading data.</p>}
  {claimedSupply.data && (
    <div>
      <p style={{ color: 'gold' }}>TOTAL TIME COLLECTED: {claimedSupply.data.displayValue} / 1350000</p>
      <div style={{ backgroundColor: 'lightgrey', height: '20px', borderRadius: '5px', marginTop: '10px', overflow: 'hidden', border: '1px solid white' }}>
        <div style={{ backgroundColor: '#00ff00', height: '100%', width: `${(parseFloat(claimedSupply.data.displayValue) / 1350000) * 100}%`, borderRadius: '5px', transition: 'width 0.5s ease-in-out, background-color 0.5s ease-in-out' }}></div>
      </div>
    </div>
  )}
</div>


      
 
<p className={styles.heroSubtitle}>
  <span style={{ color: 'gold' }}>Next goal: </span>
  <span>{0.0144}</span>
  <br />
  
</p>

      

      <LineChart />

      




      










 
    



















      <div style={{ margin: '40px' }} />
      <p className={styles.heroSubtitle}>
        <span style={{ color: 'gold' }}></span>
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

      <FAQ />
    </div>
  );
};

export default BuyTime;
