import { useEffect, useState } from "react";
import styles from "../styles/Listings.module.css";


export async function getAllValidListings(MARKETPLACE_ADDRESS: string) {
  // Implementa qui la logica per ottenere tutti i listing validi
  // ad esempio, chiamate API, accesso al database, ecc.

  // Esempio di dati di listing mock
  const listings = [
    { id: 14, title: 'Listing 1', tokenId: '4' },
    { id: 15, title: 'Listing 2', tokenId: 'tokenId1' },
    { id: 16, title: 'Listing 3', tokenId: 'tokenId2' },
  ];

  return listings;
}

const ListingsPage = ({ tokenId }: { tokenId: string }) => {
  const MARKETPLACE_ADDRESS = '0x111Ef313994a94525c142e32c70F6Ca5C4A5eC07';

  const [listings, setListings] = useState<any[]>([]);
  const [loadingListings, setLoadingListings] = useState(true);
  const [filteredListings, setFilteredListings] = useState<any[]>([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const data = await getAllValidListings(MARKETPLACE_ADDRESS);
        setListings(data);
        setLoadingListings(false);
      } catch (error) {
        console.error('Failed to fetch listings:', error);
      }
    };

    fetchListings();
  }, []);

  useEffect(() => {
    if (listings && tokenId) {
      const filtered = listings.filter((listing) => listing.tokenId === tokenId);
      setFilteredListings(filtered);
    }
  }, [listings, tokenId]);

  if (loadingListings) {
    return <div>Loading listings...</div>;
  }

  return (
    <div>
      
      <h1>Listings for Token ID: {tokenId}</h1>
      {filteredListings.map((listing) => (
        <div key={listing.id} className={styles.listing}>
          <p>ID: {listing.id}</p>
          <p className={styles.title}>Title: {listing.title}</p>
          {/* Add any additional listing information you want to display */}
          
        </div>
      ))}
       
    </div>
    
  );
};

export default ListingsPage;