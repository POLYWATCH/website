import {
  MediaRenderer,
  ThirdwebNftMedia,
  useAddress,
  useContract,
  useOwnedNFTs,
} from "@thirdweb-dev/react";
import React, { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import NFTGrid from "../components/NFT/NFTGrid";
import SaleInfo from "../components/SaleInfo/SaleInfo";
import { NFT_COLLECTION_ADDRESS, TIME_COLLECTION_ADDRESS } from "../const/contractAddresses";
import tokenPageStyles from "../styles/Token.module.css";
import { NFT as NFTType } from "@thirdweb-dev/sdk";



export default function Sell() {
  const { contract } = useContract(NFT_COLLECTION_ADDRESS);
  const address = useAddress();
  const { data, isLoading } = useOwnedNFTs(contract, address);

  const [selectedNft, setSelectedNft] = useState<NFTType>();
  const [selectedCurrency, setSelectedCurrency] = useState<string>('0x40617B73b3115ba887405B503FeF32c98a7dB714');

  

  
  return (
    <Container maxWidth="lg">
      
      <h1>Sell NFTs</h1>
      {!selectedNft ? (
        <>
          <p>Select which NFT you would like to sell below.</p>
          <NFTGrid
            data={data}
            isLoading={isLoading}
            overrideOnclickBehavior={(nft) => {
              setSelectedNft(nft);
            }}
            emptyText={
              "Looks like you don't own any NFTs in this collection. Head to the buy page to buy some!"
            }
          />
        </>
      ) : (
        <div className={tokenPageStyles.container} style={{ marginTop: 0 }}>
          <div className={tokenPageStyles.metadataContainer}>
            <div className={tokenPageStyles.imageContainer}>
              <ThirdwebNftMedia
                metadata={selectedNft.metadata}
                
              />
              <button
                onClick={() => {
                  setSelectedNft(undefined);
                }}
                className={tokenPageStyles.crossButton}
              >
                X
              </button>
            </div>
          </div>

          <div className={tokenPageStyles.listingContainer}>
            <p>You re about to list the following item for sale.</p>
            <h1 className={tokenPageStyles.title}>
              {selectedNft.metadata.name}
            </h1>
            <p className={tokenPageStyles.collectionName}>
              Token ID #{selectedNft.metadata.id}
            </p>

            <div className={tokenPageStyles.pricingContainer}>
            <SaleInfo nft={selectedNft} currency={selectedCurrency} />

              <p>Choose the currency for the sale:</p>
              <div>
              <label style={{ display: 'flex', alignItems: 'center' }}>
  <input
    type="radio"
    value="matic"
    checked={selectedCurrency === 'matic'}
    onChange={() => setSelectedCurrency('matic')}
  />
  <span style={{ marginRight: '-28px' }}>MATIC</span>
  <MediaRenderer
    alt="MATIC"
    src="ipfs://QmeKXvWfaVj6TP5vKH7SEkwHLbYtnfREuSPBd6vkGRJiCN/maticlogo.png"
    style={{ width: '6.4em', height: '6.4em' }}
  />
</label>
</div>
<div>
<label style={{ display: 'flex', alignItems: 'center' }}>
  <input
    type="radio"
    value="time"
    checked={selectedCurrency === 'time'}
    onChange={() => setSelectedCurrency('time')}
  />
  <span style={{ marginRight: '-10px' }}>TIME</span>
  <MediaRenderer
    alt="TIME"
    src="ipfs://QmfZwP6Br9rY9AdiJrm3BRC91aJJzdLfAoEwfwfya7V64R/time1.png"
    style={{ width: '4.5em', height: '4.5em' }}
  />
</label>

 



              </div>
             
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}
