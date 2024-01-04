import { ConnectWallet, MediaRenderer, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

/**
 * Navigation bar that shows up on all pages.
 * Rendered in _app.tsx file above the page content.
 */
export function Navbar() {
  const address = useAddress();

  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link href="/" className={`${styles.homeLink} ${styles.navLeft}`}>
          <MediaRenderer
  src="ipfs://QmYWJtuAkgEUFz8DMJwa4Lboj6U14dQt9DGZ3HFcaG93NN/wired-gradient-63-home%20(1).gif"
  width="48px"
  height="48px"
/>



          </Link>

          <div className={styles.navMiddle}>
            <Link href="/buy" className={styles.link}>
              
            </Link>
            <Link href="/sell" className={styles.link}>
              
            </Link>
            <Link href="/buy" className={styles.link}>
              MARKETPLACE
            </Link>
            <Link href="/$Time" className={styles.link}>
              $TIME
            </Link>
            <Link href="/evolve/evolve" className={styles.link}>
              EVOLVE
            </Link>
            <Link href="/aboutus" className={styles.link}>
              ABOUT US
            </Link>
          </div>
        </div>

        <div className={styles.navRight}>
          <div className={styles.navConnect}>
            <ConnectWallet theme="dark" btnTitle="Connect Wallet" />
          </div>
          {address && (
            <Link className={styles.link} href={`/profile/${address}`}>
                    <MediaRenderer
  src="ipfs://QmSeVCKvYdRZ22XfcXSRNSway6Co38ZdcXnfo4bJSpYwLk/wired-gradient-21-avatar%20(1).gif"
  width="48px"
  height="48px"
/>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
