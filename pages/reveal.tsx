import { useState, useEffect } from 'react';
import { MediaRenderer, PackRewards, ThirdwebNftMedia, Web3Button, useAddress, useContract, useOwnedNFTs, usePack } from '@thirdweb-dev/react';
import styles from '../styles/Home.module.css';
import { PACK_ADDRESS } from '../const/contractAddresses';
import { PackRewardCard } from '../components/PackRewardCard';

export default function MyPacks() {
    const address = useAddress();
    const { contract: pack } = useContract(PACK_ADDRESS, "pack");
    const { data, isLoading } = useOwnedNFTs(pack, address);
    const [openPackRewards, setOpenPackRewards] = useState<PackRewards>();
    const [showVideo, setShowVideo] = useState(false);
    const [videoPlayed, setVideoPlayed] = useState(false); // Aggiunto stato per tenere traccia della riproduzione del video
    const [packsToOpen, setPacksToOpen] = useState(1); // Imposta il valore predefinito a 1





    const [rotationY, setRotationY] = useState(0); // Stato per controllare la rotazione orizzontale del modello
    const rotationYSpeed = 1; // Velocità di rotazione orizzontale
  
    // Funzione per aggiornare la rotazione orizzontale del modello in modo continuo
    useEffect(() => {
      const intervalId = setInterval(() => {
        setRotationY(prevRotationY => prevRotationY + rotationYSpeed);
      }, 16); // Intervallo di aggiornamento (circa 60 FPS)
  
      return () => clearInterval(intervalId); // Pulizia dell'intervallo quando il componente viene smontato
    }, []); // Esegui l'effetto solo una volta all'inizio


    async function openPack(packId: string) {
        const cardRewards = await pack?.open(parseInt(packId), 1);
        console.log(cardRewards);
        setOpenPackRewards(cardRewards);
        setShowVideo(true); // Mostra il video dopo aver aperto il pacchetto
    };
    
    // Funzione per gestire la chiusura del video
    const handleVideoEnd = () => {
        setShowVideo(false);
        setVideoPlayed(true); // Imposta lo stato di riproduzione del video a true
    };
    

    // Resetta lo stato del video quando cambiano i premi del pacchetto
    useEffect(() => {
        setVideoPlayed(false);
    }, [openPackRewards]);

    return (
        
        <div className={styles.container}>
            <div style={{ margin: '30px' }}>
                {/* Content of the first section */}
            </div>
            {/* Empty space */}
            <div style={{ height: '30px' }} />
            <h1>OPEN YOUR BOXES</h1>
            <h2>Open your POLYWATCH BOX and see what you found!</h2>
            <div className={styles.grid}>
                {!isLoading ? (
                    data?.map((pack, index) => (
                        <div key={index} className={styles.nftCard}>
                           <ThirdwebNftMedia
                            metadata={pack.metadata}
                            />                 <div className={styles.myCardInfo}>
                                <h3>{pack.metadata.name}</h3>
                                <p>Qty: {pack.quantityOwned}</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Web3Button
                                    contractAddress={PACK_ADDRESS}
                                    action={() => openPack(pack.metadata.id)}
                                    className={styles.saleButton}
                                >Open Pack</Web3Button>
                                {/* Aggiungi l'input sotto il pulsante Web3Button */}
                                <input
                                    type="number"
                                    value={packsToOpen}
                                    onChange={(e) => setPacksToOpen(parseInt(e.target.value))}
                                    min={1}
                                    max={10} // Imposta un valore massimo ragionevole
                                    style={{
                                        marginLeft: '10px',
                                        borderRadius: '8px',
                                        padding: '5px 10px',
                                        border: '1px solid #ccc',
                                        backgroundColor: '#fff',
                                        color: '#000',
                                        fontSize: '16px',
                                    }}
                                />
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            {openPackRewards && openPackRewards.erc721Rewards?.length && (
                <div className={styles.container}>
                    <h3>POLYWATCH BOX Rewards:</h3>
                    <div className={styles.grid}>
                        {openPackRewards.erc721Rewards.map((card, index) => (
                            <PackRewardCard
                                reward={card}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            )}
          
         
{showVideo && !videoPlayed && (
    <div className={styles.videoContainer}>
        <video className={styles.video} autoPlay onEnded={handleVideoEnd} controls={false}>
            <source src="./images/4564.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
)}


        </div>
    );
}

