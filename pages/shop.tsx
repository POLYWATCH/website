import { ThirdwebNftMedia, useAddress, useContract, useOwnedNFTs, useValidDirectListings } from "@thirdweb-dev/react";
import { PackNFTCard } from "../components/PackNFT";
import { MARKETPLACE_ADDRESS1, PACK_ADDRESS } from "../const/contractAddresses";

import styles from "../styles/Home.module.css";
import Higlits from "../components/Higlits";



export default function Shop() {
    const {
        contract: marketplace,
        isLoading: loadingMarketplace,
    } = useContract(MARKETPLACE_ADDRESS1, "marketplace-v3");

    const {
        data: validDirectListings,
        isLoading: loadingValidDirectListings,
    } = useValidDirectListings(
        marketplace,
        {
            tokenContract: PACK_ADDRESS,
        }
    );

    console.log("Valid Direct Listings", validDirectListings);
    const address = useAddress();

    const { contract } = useContract(PACK_ADDRESS, "pack");

    const { data, isLoading } = useOwnedNFTs(contract, address);

    return (
       
      
      


        <div className={styles.container}>







<div style={{ margin: '40px' }}>
  {/* Content of the first section */}
</div>

{/* Empty space */}
<div style={{ height: '40px' }} />







            <h1>Shop Packs</h1>
            <div className={styles.grid}>
                {loadingValidDirectListings ? (
                    <p>Loading...</p>
                ) : (
                    validDirectListings && validDirectListings.map((validListing, index) => (
                        <div key={index}>
                            <PackNFTCard
                                contractAddress={validListing.assetContractAddress}
                                tokenId={validListing.tokenId}
                            />
                            
        
                        </div>
                        
                    ))
                   

                )}


<div style={{ margin: '30px' }}>
  {/* Content of the first section */}
</div>

{/* Empty space */}
<div style={{ height: '30px' }} />
 <Higlits/>








  <div className={styles.container}>
            <h1>My Packs</h1>
            <div className={styles.grid}>
                {!isLoading ? (
                    data?.map((pack, index) => (
                        <div key={index} className={styles.nftCard}>
                            <ThirdwebNftMedia
                            metadata={pack.metadata}
                            />
                            <div className={styles.myCardInfo}>
                                <h3>{pack.metadata.name}</h3>
                                <p>Qty owned: {pack.quantityOwned}</p>
                            </div>
                            
                        </div>
                    ))
                    ) : (
                    <p>Loading...</p>
                )}
           
                </div>
           
        </div>







            </div>




  <MediaRenderer
  src="images/989.gif"  
  width="30%"
  height="30%"
  style={{ maxWidth: '100%', maxHeight: '100%' }}
 
/> 
        
       




            </div>
            <h1>Watch loading...</h1>


            
        </div>
    );
}
