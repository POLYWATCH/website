import { MediaRenderer, NFT, Web3Button, useAddress, useContract, useContractWrite, useNFT, useSDK } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import styles from "../../styles/evolve.module.css";
import { useState } from "react";
import { CONTRACT_ADDRESS, TIME_COLLECTION_ADDRESS } from "../../const/contractAddresses";
import { BigNumber, ethers } from "ethers";
import { NFTCard } from "../../components/NFTCard";
import { useSpring } from "framer-motion";


export default function PokemonDetail() {
    const router = useRouter();
    const sdk = useSDK();
    const { tokenId } = router.query;
    const [status, setStatus] = useState("");

    const { contract } = useContract(CONTRACT_ADDRESS);

    const {
        data: nft,
        isLoading: isNFTLoading,
    } = useNFT(contract, tokenId?.toString());


    


    

    const { contract: contractTime } = useContract("0x40617B73b3115ba887405B503FeF32c98a7dB714");
    const { mutateAsync: transferTime, isLoading: isLoadingTime } = useContractWrite(contractTime, "transfer");
  
    const toTime = "0x5bf4638a312c0DecfAD4E59465C44a51DA0604e2";
    const amountInEther = 100;
    const amountInWei = ethers.utils.parseUnits(amountInEther.toString(), "ether");
  
    const handleTransferTime = async () => {
      try {
        const data = await transferTime({ args: [toTime, amountInWei.toString()] });
        console.info("Contratto Time chiamato con successo", data);
      } catch (err) {
        console.error("Errore nella chiamata al contratto Time", err);
      }
    };
    






    
    async function gainExp(
        nft: NFT,
        level: string,
        exp: string,
        nftTokenId: string,
    ){
        try {
            var updatedExp = await parseInt(exp) + 10;
            var updatedLvl = await parseInt(level);

            if (updatedExp >= 100) {
                updatedLvl += 1;
                updatedExp -= 100;
            }

            const metadata = {
                ...nft.metadata,
                attributes: [
                    {
                        trait_type: "Level",
                        value: updatedLvl.toString(),
                    },
                    {
                        trait_type: "Exp",
                        value: updatedExp.toString(),
                    },
                ],
            };

            const newUri = await sdk!.storage.upload(metadata);

            const updateNFT = await contract!.call(
                "setTokenURI",
                [
                    nftTokenId,
                    newUri,
                ]
            );

            return { success: "Pokemon Trained!" };
        } catch (error) {
            console.log(error);
        }
    };












    









    async function evolve(
        nft: NFT,
        level: string,
        nftTokenId: string,
    ){
        try {
            if(parseInt(level) >= 3) {
                const metadata = {
                    ...nft.metadata,
                    name: "Pikachu",
                    
                };
    
                const newUri = await sdk!.storage.upload(metadata);
    
                const updateNFT = await contract!.call(
                    "setTokenURI",
                    [
                        nftTokenId,
                        newUri,
                    ],
                );
            }
    
            return;
        } catch (error) {
            console.log(error);
        }
    }

    if(isNFTLoading) {
        return (
            <main className={styles.main}>
                <div className={styles.centeredContainer}>
                    <h1>Getting Pokemon Data...</h1>
                </div>
            </main>
        );
    }

    return (
        <div className={styles.nftDetailContainer}>
               <div style={{ margin: '100px' }}>
  {/* Content of the first section */}
</div>

{/* Empty space */}
<div style={{ height: '100px' }} />

            <button
                className={styles.button}
                onClick={() => router.back()}
            >Back</button>
            <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "20px" }}>
               
            <MediaRenderer
                    src={nft?.metadata?.image}
                    width="50%"
                />
                <div style={{ width:"50%" }}>
                    <h1>{nft?.metadata.name} ID# {nft?.metadata.id}</h1>
                    <div style={{ width: "100%", display: "flex", justifyContent: "flex-start"}}>
                        {nft?.metadata.attributes && (
                            // @ts-ignore
                            nft?.metadata.attributes.map((attribute, index) => (
                                <p key={index} className={styles.nftCardTrait}>{attribute.trait_type}: {attribute.value}</p>
                            ))
                        )}
                    </div>
                    

                  





                    <Web3Button
      contractAddress="0x40617B73b3115ba887405B503FeF32c98a7dB714"
      action={() => handleTransferTime()}
    >
      Transfer
    </Web3Button>


    <button
  className={styles.button}
  onClick={async () => {
    try {
      setStatus("Training! Give it a few seconds...");
      handleTransferTime(); // Call handleTransferTime function before updating level
      await gainExp(
        nft!,
        // @ts-ignore
        nft?.metadata.attributes[0].value,
        // @ts-ignore
        nft?.metadata.attributes[1].value,
        tokenId!.toString()
      );
      setStatus("Trained!");
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (error) {
      console.error(error);
    }
    router.back();
  }}
>
  EXP Training
</button>



                    <button
                        className={styles.button}
                        onClick={async () => {
                            try {
                                setStatus("Evolving! Give it a few seconds...");
                                await evolve(
                                    nft!,
                                    // @ts-ignore
                                    nft?.metadata.attributes[0].value,
                                    tokenId!.toString(),
                                );
                                setStatus("Evolved!");
                                await new Promise((resolve) => setTimeout(resolve, 2000));
                            } catch (error) {
                                console.error(error);
                            }
                            router.back();
                        }}
                    >Evolve</button>
                    <p>{status}</p>
                </div>
            </div>
        </div>
    );
};
