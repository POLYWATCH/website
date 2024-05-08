import { useState } from 'react';
import { ThirdwebNftMedia, useContract, useNFT } from "@thirdweb-dev/react";
import { BigNumber } from "ethers";
import styles from "../styles/Home.module.css";
import { CONTRACT_ADDRESS } from '../const/contractAddresses';

type Props = {
    reward: {
        tokenId: string | number | bigint | BigNumber;
        contractAddress: string;
    };
};

export const PackRewardCard = ({ reward }: Props) => {
    const { contract } = useContract(CONTRACT_ADDRESS, "nft-drop");
    const { data } = useNFT(contract, reward.tokenId);
    const [isOpened, setIsOpened] = useState(false); // State per controllare se la carta è aperta

    // Funzione per gestire il click sulla carta per aprire
    const handleOpenCard = () => {
        setIsOpened(true);
    };

    return (
        <div
            className={`${styles.nftCard} ${isOpened ? styles.opened : ''}`}
            onClick={handleOpenCard} // Aggiungi il gestore onClick per aprire la carta
        >
            {data && (
                <>
                    <ThirdwebNftMedia
                        metadata={data.metadata}
                        height="200px"
                        width="200px"
                    />
                    <h3>{data.metadata.name}</h3>
                </>
            )}
        </div>
    );
};  
