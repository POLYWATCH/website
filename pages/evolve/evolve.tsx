import styles from "../../styles/evolve.module.css";
import { NextPage } from "next";
import { CONTRACT_ADDRESS } from "../../const/contractAddresses";
import { NFTCard } from "../../components/NFTCard";
import Link from "next/link";

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
          <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", maxHeight: "48px", marginTop: "10px" }}>
            <h1>MY POLYWATCH</h1>
          </div>
          <div className={styles.nftGrid}> {/* Aggiungi questa classe per la griglia */}
            {!isOwnedNFTsLoading && (
              ownedNFTs && ownedNFTs.length > 0 ? (
                ownedNFTs.map((nft) => (
                  <div key={nft.metadata.id} className={styles.nftCard}>
                    <p className={styles.nftCardName}>{nft.metadata.name}</p>
                    <Link href={`/evolve/${nft.metadata.id}`} style={{ width: "100%" }}>
                      <button className={styles.button}>Train</button>
                    </Link>
                    <NFTCard nft={nft} />
                  </div>
                ))
              ) : (
                <p>No Polywatch</p>
              )
            )}
          </div>
          
        </div>
        <div style={{ height: '200px' }} />



      </main>
      

    );
};

export default Home;
