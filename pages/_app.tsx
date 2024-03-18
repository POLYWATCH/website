import type { AppProps } from "next/app";
import { ThirdwebProvider, coinbaseWallet, embeddedWallet, metamaskWallet, phantomWallet, smartWallet, trustWallet } from "@thirdweb-dev/react";
import Navbar from "../components/Navbar/Navbar";

import { NETWORK } from "../const/contractAddresses";
import "../styles/globals.css";


const activeChain = "polygon";
const smartWalletConfig ={

  factoryAddress : "" ,
  gasless: false

}
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider 
    clientId="1f9299646db2cb55a1505c9032a58601"
    activeChain={activeChain}
    
    supportedWallets={[
      smartWallet(metamaskWallet(),smartWalletConfig),
      smartWallet(coinbaseWallet(),smartWalletConfig),
      smartWallet(trustWallet(),smartWalletConfig),
      smartWallet(phantomWallet(),smartWalletConfig),
      embeddedWallet()
    
    ]}
    >
      
      <Navbar/>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
