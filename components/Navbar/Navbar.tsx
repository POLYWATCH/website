import React, { useState } from 'react';
import { ConnectWallet, MediaRenderer, useAddress } from "@thirdweb-dev/react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export function Navbar() {
  const [isNavOpen, setNavOpen] = useState(false);
  const address = useAddress();

  const toggleMobileNav = () => {
    setNavOpen(!isNavOpen);
  };

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

          <div className={styles.burgerIcon} onClick={toggleMobileNav}>
            <div className={styles.burgerLine}></div>
            <div className={styles.burgerLine}></div>
            <div className={styles.burgerLine}></div>
          </div>
        </div>

        <div className={`${styles.navMiddle} ${isNavOpen ? styles.mobileNavShow : ''}`}>
          <Link href="/buy" className={styles.link}>
            Buy
          </Link>
          <Link href="/sell" className={styles.link}>
            Sell
          </Link>
          <Link href="/marketplace" className={styles.link}>
            Marketplace
          </Link>
          <Link href="/$Time" className={styles.link}>
            $TIME
          </Link>
          <Link href="/evolve/evolve" className={styles.link}>
            Evolve
          </Link>
<<<<<<< HEAD
          <Link href="/watches" className={styles.link}>
            Watches
          </Link>
=======
>>>>>>> 43b5e525dc783fe9df05e5635b20a44a1918026e
          <Link href="/aboutus" className={styles.link}>
            About Us
          </Link>
        </div>
        
        <div className={styles.navRight}>
          {address && (
            <Link className={styles.link} href={`/profile/${address}`}>
              <MediaRenderer
                src="ipfs://QmSeVCKvYdRZ22XfcXSRNSway6Co38ZdcXnfo4bJSpYwLk/wired-gradient-21-avatar%20(1).gif"
                width="48px"
                height="48px"
              />
            </Link>
          )}

          <div className={styles.navConnect}>
            <ConnectWallet theme="dark" btnTitle="Connect Wallet" />
          </div>
        </div>
      </nav>
    </div>
  );
}
