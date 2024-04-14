import { useEffect, useState } from 'react';
import { useAddress, useContract, useNFT, useDirectListings, Web3Button, MediaRenderer } from "@thirdweb-dev/react";
import { MARKETPLACE_ADDRESS1, PACK_ADDRESS } from "../const/contractAddresses";
import styles from "../styles/Home.module.css";

type Props = {
    contractAddress: string;
    tokenId: any;
};

export const PackNFTCard = ({ contractAddress, tokenId }: Props) => {
    const address = useAddress();
    const { contract: packContract } = useContract(contractAddress);
    const { data: packNFT, isLoading: loadingNFT } = useNFT(packContract, tokenId);
    const { contract: marketplace } = useContract(MARKETPLACE_ADDRESS1, "marketplace-v3");
    const { data: packListings } = useDirectListings(marketplace, {
        tokenContract: PACK_ADDRESS,
    });
    const [validPackListings, setValidPackListings] = useState<any[] | null>(null);
    const [quantity, setQuantity] = useState<number>(1); // Default quantity is set to 1
    const [isEligible, setIsEligible] = useState<boolean>(false); // State to track eligibility

    const authorizedWallets = [
        '0x5bf4638a312c0DecfAD4E59465C44a51DA0604e2',
        '0x3d6d1E0580131819E795bAE5D222f43b99e2dC29', // Aggiungi qui il secondo wallet autorizzato
        '0x5d6d1DF57E8D25434F92E8Ff87B9343E2326C621'  // Aggiungi qui il terzo wallet autorizzato
    ];

    useEffect(() => {
        if (packListings && tokenId) {
            const filteredListings = Object.values(packListings).filter(
                (listing: any ) => listing.tokenId === tokenId
            );
            setValidPackListings(filteredListings);
        }
    }, [packListings, tokenId]);

    useEffect(() => {
        // Verifica se l'indirizzo del wallet è autorizzato
        if (authorizedWallets.includes(address || '')) {
            setIsEligible(true); // Imposta la variabile di stato su true se è idoneo
        } else {
            setIsEligible(false); // Imposta la variabile di stato su false se non è idoneo
        }
    }, [address, authorizedWallets]);

    async function buyPack() {
        let txResult;

        if (validPackListings && validPackListings.length > 0) {
            // Trova il listing valido per il pacchetto desiderato
            const validListing = validPackListings[0]; // Seleziona il primo listing valido

            if (validListing) {
                // Verifica che l'indirizzo del wallet sia autorizzato
                if (isEligible) {
                    try {
                        txResult = await marketplace?.directListings.buyFromListing(
                            validListing.id, // Usa l'ID del listing qui
                            quantity // Usa la quantità selezionata qui
                        );
                    } catch (error) {
                        console.error("Error buying pack:", error);
                        // Gestisci l'errore dell'acquisto del pacchetto
                    }
                } else {
                    throw new Error("Unauthorized wallet address");
                }
            } else {
                throw new Error("No valid listing found");
            }
        } else {
            throw new Error("No valid listings found");
        }
            
        return txResult;
    }

    return (
        <div className={styles.packCard}>
            {!loadingNFT && validPackListings ? (
                <div className={styles.shopPack}>
                    <div>
                        <MediaRenderer
                            src={packNFT?.metadata.image}
                            width="40%"
                            height="100%"
                        />
                    </div>
                    <div className={styles.packInfo}>
                        <h3>{packNFT?.metadata.name}</h3>
                        {validPackListings.length > 0 ? (
                            <>
                                <p>Cost: {validPackListings[0].currencyValuePerToken.displayValue} {` ` + validPackListings[0].currencyValuePerToken.symbol}</p>
                                <p>Supply: {validPackListings[0].quantity}</p>
                            </>
                        ) : (
                            <p>1 PACK</p>
                        )}
                        <div className={styles.quantitySelector}>
                            <label htmlFor="quantity">Select quantity:</label>
                            <input
                                type="number"
                                id="quantity"
                                name="quantity"
                                min="1"
                                max="5" // Imposta la quantità massima consentita
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                                className={styles.quantityInput} // Applica lo stile CSS personalizzato
                            />
                        </div>
                        {!address ? (
                            <p>Login to buy</p>
                        ) : (
                            <div className={styles.buyButtonContainer}>
                                {isEligible ? (
                                    <p>You're eligible!</p>
                                ) : (
                                    <p>You're not eligible, head over to the public mint</p>
                                )}
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
    );
}
