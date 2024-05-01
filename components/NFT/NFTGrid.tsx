import * as React from 'react';
import { NFT as NFTType } from "@thirdweb-dev/sdk";
import Link from "next/link";
import { NFT_COLLECTION_ADDRESS } from "../../const/contractAddresses";
import Skeleton from "../Skeleton/Skeleton";
import NFT from "./NFT";
import styles from "../../styles/Buy.module.css";

type Props = {
  isLoading: boolean;
  data: NFTType[] | undefined;
  overrideOnclickBehavior?: (nft: NFTType) => void;
  emptyText?: string;
};

export default function NFTCarousel({
  isLoading,
  data,
  overrideOnclickBehavior,
  emptyText = "No NFTs found for this collection.",
}: Props) {
  return (
    <div className={styles.nftCarouselContainer}>
      {isLoading ? (
        <div className={styles.skeletonContainer}>
          {[...Array(20)].map((_, index) => (
            <div key={index} className={styles.nftContainer}>
              <Skeleton key={index} width={"100%"} height="312px" />
            </div>
          ))}
        </div>
      ) : data && data.length > 0 ? (
        <div className={styles.nftCarousel}>
          {data.map((nft, index) =>
            !overrideOnclickBehavior ? (
              <Link
                href={`/token/${NFT_COLLECTION_ADDRESS}/${nft.metadata.id}`}
                key={nft.metadata.id}
                className={styles.nftContainer}
              >
                <div className={styles.nftItem}>
                  <NFT nft={nft} />
                </div>
              </Link>
            ) : (
              <div
                key={nft.metadata.id}
                className={styles.nftContainer}
                onClick={() => overrideOnclickBehavior(nft)}
              >
                <div className={styles.nftItem}>
                  <NFT nft={nft} />
                </div>
              </div>
            )
          )}
        </div>
      ) : (
        <p>{emptyText}</p>
      )}
    </div>
  );
}
