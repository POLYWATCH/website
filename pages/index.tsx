import Image from "next/image";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import Link from "next/link";
import { ConnectWallet, MediaRenderer, useAddress } from "@thirdweb-dev/react";
import { CSSProperties, StrictMode, useEffect, useRef, useState } from "react";
import EmailSignIn from "../components/EmailLogin";
import { SocialLoginButton } from "../components/SocialLoginButton";
import Spline from '@splinetool/react-spline';
import Highlights from "../components/Highlights";
import LoadingSpinner from "../components/LoadingSpinner";




const Home: NextPage = () => {
  return (
    <>
      <LoadingSpinner />
      <div style={{ padding: "20px", textAlign: "center" }}>
        {/* Media Renderer */}
        <div style={{ marginBottom: "20px" }}>
          <MediaRenderer src="/images/DROP27.glb" style={{ width: "100%", maxWidth: "500px", margin: "0 auto" }} />
        </div>

        {/* Title */}
        <h1 className={styles.heroTitle} style={{ marginBottom: "10px", fontSize: "3em" }}>
          <span className={styles.heroTitleGradient}>
            POLYWATCH
          </span>
        </h1>

        {/* Subtitle with Explore */}
        <p style={{ marginBottom: "10px", fontSize: "0.8em" }}>
          <Highlights />
        </p>
      </div>
    </>
  );
};

export default Home;
