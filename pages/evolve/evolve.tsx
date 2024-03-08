import { ConnectWallet, useAddress, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import styles from "../../styles/evolve.module.css";
import { NextPage } from "next";
import { CONTRACT_ADDRESS } from "../../const/contractAddresses";
import { NFTCard } from "../../components/NFTCard";

const Home: NextPage = () => {
  const address = useAddress();

  const { contract } = useContract(CONTRACT_ADDRESS);

  const {
    data: ownedNFTs,
    isLoading: isOwnedNFTsLoading,
  } = useOwnedNFTs(contract, address);

  if(!address) {
    return (
      <div className={styles.main}>
        <div className={styles.centeredContainer}>
          <div className={styles.centeredCard}>
            <h1>Evolving POLYWATCH</h1>
            <ConnectWallet />
          </div>
        </div>
      </div>
    );
  };
  return (
    <main className={styles.main}>
      <div style={{ margin: '100px' }}>
  {/* Content of the first section */}
</div>

{/* Empty space */}
<div style={{ height: '100px' }} />

      <div className={styles.container}>
        <div  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", maxHeight:"48px", marginTop: "10px"}}>
          <h1>MY POLYWATCH</h1>

            
         
          
        </div>
        <div className={styles.grid} style={{ marginTop: "20px"}}>
          {!isOwnedNFTsLoading && (
            ownedNFTs && ownedNFTs.length > 0 ? (
              ownedNFTs.map((nft) => (
                <NFTCard
                  key={nft.metadata.id}
                  nft={nft}
                />
              ))
            ) : (
              <p>No Polywatch</p>
            )
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;