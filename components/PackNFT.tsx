import { MediaRenderer, Web3Button, useAddress, useContract, useNFT, useDirectListings } from "@thirdweb-dev/react";
import { useEffect, useState } from 'react';
import styles from "../styles/Home.module.css";
import { MARKETPLACE_ADDRESS1, PACK_ADDRESS } from "../const/contractAddresses";

type Props = {
    contractAddress: string;
    tokenId: any;
};

export const PackNFTCard = ({ contractAddress, tokenId }: Props) => {
    const address = useAddress();
    const { contract: marketplace, isLoading: loadingMarketplace } = useContract(MARKETPLACE_ADDRESS1, "marketplace-v3");
    const { contract: packContract } = useContract(contractAddress);
    const { data: packNFT, isLoading: loadingNFT } = useNFT(packContract, tokenId);
    const { data: packListings, isLoading: loadingPackListings } = useDirectListings(
        marketplace,
        { tokenContract: PACK_ADDRESS }
    );
    const [quantity, setQuantity] = useState<number>(1); // Default quantity is set to 1
    
    const [isEligible, setIsEligible] = useState<boolean>(true); // Assume sempre l'utente come autorizzato

    async function buyPack() {
        let txResult;

        const directListingId = 8; // Imposta il direct listing ID desiderato

        if (packListings && packListings[directListingId]) {
            const listing = packListings[directListingId];
            try {
                txResult = await marketplace?.directListings.buyFromListing(listing.id, quantity);
            } catch (error) {
                console.error("Error buying pack:", error);
                // Gestisci l'errore dell'acquisto del pacchetto
            }
        } else {
            throw new Error("No valid listing found");
        }
            
        return txResult;
    };

    return (
        <div className={styles.packCard}>
            {!loadingNFT && !loadingPackListings ? (
                <div className={styles.shopPack}>
                    <div>
                        <MediaRenderer
                            src={packNFT?.metadata.image}
                            width="30%"
                            height="60%"
                        />
                    </div>
                    <div className={styles.packInfo}>
                    <p>POLYWATCH BOX</p>
                        
                        {packListings && packListings[8] ? (
                            <>
                                <p>Cost: {packListings[8].currencyValuePerToken.displayValue} {` ` + packListings[8].currencyValuePerToken.symbol}</p>
                                <p>Supply: {packListings[8].quantity}</p>
                            </>
                        ) : (
                            <p>No valid listing found</p>
                        )}

                        <div className={styles.quantitySelector}>
                            <label htmlFor="quantity">Select quantity:</label>
                            <input
                                type="number"
                                id="quantity"
                                name="quantity"
                                min="1"
                                max="200" // Imposta la quantità massima consentita
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                                className={styles.quantityInput} // Applica lo stile CSS personalizzato
                            />
                        </div>
                        {!address ? (
                            <p>Login to buy</p>
                        ) : (
                            <div className={styles.buyButtonContainer}>
                                <p>
                                    All ready!</p>
                                <Web3Button
                                    contractAddress={MARKETPLACE_ADDRESS1}
                                    action={() => buyPack()}
                                >Buy Pack</Web3Button>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
};
