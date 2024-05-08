import {
  MediaRenderer,
  PackRewards,
  ThirdwebNftMedia,
  useAddress,
  useContract,
  useContractRead,
  useOwnedNFTs,
  useValidDirectListings,
  useValidEnglishAuctions,
} from "@thirdweb-dev/react";
import router, { useRouter } from "next/router";
import React, { Suspense, useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import ListingWrapper from "../../components/ListingWrapper/ListingWrapper";
import NFTGrid from "../../components/NFT/NFTGrid";
import Skeleton from "../../components/Skeleton/Skeleton";
import {
  MARKETPLACE_ADDRESS,
  NFT_COLLECTION_ADDRESS,
  PACK_ADDRESS,
  TRANSFER_CONTRACT_ADDRESS,
} from "../../const/contractAddresses";
import styles from "../../styles/Profile.module.css";
import randomColor from "../../util/randomColor";
import TransferCard from "../../components/TransferCard";
import { Flex, SimpleGrid, Spinner } from "@chakra-ui/react";
import BalanceCard from "../../components/BalanceCard";
import { Link } from "@mui/material";





const [randomColor1, randomColor2, randomColor3, randomColor4] = [
  randomColor(),
  randomColor(),
  randomColor(),
  randomColor(),
];

export default function ProfilePage() {



const address = useAddress();


function truncateAddress(address: string) {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
};

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





const { contract } = useContract(PACK_ADDRESS, "pack");
    const { data, isLoading } = useOwnedNFTs(contract, address);

    const [openPackRewards, setOpenPackRewards] = useState<PackRewards>();

    
















  const router = useRouter();
  const [tab, setTab] = useState<"nfts" | "listings" | "auctions">("nfts");
  const [listingId, setListingId] = useState("");
  
  
  const { contract: nftCollection } = useContract(NFT_COLLECTION_ADDRESS);

  const { contract: marketplace } = useContract(
    MARKETPLACE_ADDRESS,
    "marketplace-v3"
  );

  const { data: ownedNfts, isLoading: loadingOwnedNfts } = useOwnedNFTs(
    nftCollection,
    router.query.address as string
  );

  const { data: directListings, isLoading: loadingDirects } =
    useValidDirectListings(marketplace, {
      seller: router.query.address as string,
    });

  const { data: auctionListings, isLoading: loadingAuctions } =
    useValidEnglishAuctions(marketplace, {
      seller: router.query.address as string,
    });
  

  return (
    <Container maxWidth="lg">
    
    <div className={styles.profileHeader}>
      <div className={styles.coverImage}>
        <div className={styles.overlay}></div>
        
      </div>
      {/* Altri contenuti della sezione utente */}
    </div>

        <h1 className={styles.profileName}>
          {router.query.address ? (
            router.query.address.toString().substring(0, 4) +
            "..." +
            router.query.address.toString().substring(38, 42)
          ) : (
            <Skeleton width="320" />
          )}
        </h1>
      










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
                                  <Link href="/reveal" className={styles.saleButton}>Open Pack</Link>

                            </div>
                            
                        </div>
                    ))
                    ) : (
                    <p>Loading...</p>
                )}
           
                </div>
           
        </div>





        <div style={{ margin: '20px' }}>
  {/* Content of the first section */}
</div>
{/* Empty space */}
<div style={{ height: '20px' }} />









<div className={styles.container}>
            <h1>  $TIME BALANCE


              
    <MediaRenderer
                    src="ipfs://QmQ8ywg5bcgNGefKKk1Ur6FX8iDmVT2AKU3MB6vC1wRLCu/4g5.png"
                    style={{ width: "60%", height: "auto", maxWidth: "80px" }}
                  />   
            </h1>
           
    
                
           </div>



           {address ? (
           <Flex>
    <Flex flexDirection={"column"} mr={8} p={10}>
      
      
    </Flex>
   

<SimpleGrid columns={3} spacing={4} mt={4} width="100%" margin="auto">
        {!isVerifiedTokensLoading ? (
          verifiedTokens.map((token: string) => (
            <BalanceCard key={token} tokenAddress={"0x40617B73b3115ba887405B503FeF32c98a7dB714"} 
            
            />
                    
 
          ))
        ) : (
          <Spinner />
                  
      
        )}
                
     
      </SimpleGrid>
    </Flex>
  
) : (
  <Flex>
    <p>CONNECT YOUR WALLET TO SEE YOUR BALANCE</p>
  </Flex>
)}




        



        <div style={{ margin: '20px' }}>
  {/* Content of the first section */}
</div>
{/* Empty space */}
<div style={{ height: '20px' }} />








    
        {/* Terza sezione con l'accesso alle opportunità */}
       
        <div className={styles.hero}>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                
              </h1>
              

              <div style={{ margin: '10px' }}>
  {/* Content of the first section */}
</div>
{/* Empty space */}
<div style={{ height: '10px' }} />
              </div>
          </div>
             
         
             



</div>














      <div className={styles.tabs}>
        <h3
          className={`${styles.tab} 
        ${tab === "nfts" ? styles.activeTab : ""}`}
          onClick={() => setTab("nfts")}
        >
          NFTs
        </h3>
        <h3
          className={`${styles.tab} 
        ${tab === "listings" ? styles.activeTab : ""}`}
          onClick={() => setTab("listings")}
        >
          Listings
        </h3>
        <h3
          className={`${styles.tab}
        ${tab === "auctions" ? styles.activeTab : ""}`}
          onClick={() => setTab("auctions")}
        >
          Auctions
        </h3>
      </div>

      <div
        className={`${
          tab === "nfts" ? styles.activeTabContent : styles.tabContent
        }`}
      >
        <NFTGrid
          data={ownedNfts}
          isLoading={loadingOwnedNfts}
          emptyText="Looks like you don't have any NFTs from this collection. Head to the buy page to buy some!"
        />
      </div>

      <div className={`${tab === "listings" ? styles.activeTabContent : styles.tabContent}`}>
  {loadingDirects ? (
    <p>Loading...</p>
  ) : directListings && directListings.length === 0 ? (
    <p>Nothing for sale yet! Head to the sell tab to list an NFT.</p>
  ) : (
   
    
      directListings?.map((listing) => (
    

      
        <div key={listing.id}>
        <ListingWrapper listing={listing} />
        <div>
          <p>Listing ID: {listing.id}</p>
        </div>
      </div>
    ))
    
  )}
  

</div>


      <div
        className={`${
          tab === "auctions" ? styles.activeTabContent : styles.tabContent
        }`}
      >
        {loadingAuctions ? (
          <p>Loading...</p>
        ) : auctionListings && auctionListings.length === 0 ? (
          <p>Nothing for sale yet! Head to the sell tab to list an NFT.</p>
        ) : (
          auctionListings?.map((listing) => (
            <ListingWrapper listing={listing} key={listing.id}  />
            
          ))
        )}


<div>
      
    </div>


        
      </div>
      
    </Container>
  );
}
