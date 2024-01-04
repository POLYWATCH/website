import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import Link from "next/link";
import { MediaRenderer, Web3Button, useAddress, useContract, useContractRead, useMintToken } from "@thirdweb-dev/react";

import { Flex, Avatar, Heading, SimpleGrid, Spinner,Text, Container } from "@chakra-ui/react";

import BalanceCard from "../components/BalanceCard";
import { TRANSFER_CONTRACT_ADDRESS } from "../const/contractAddresses";
import TransferCard from "../components/TransferCard";
import Events from "../components/Events";


type TokenParams = {
  to: string;
  amount: number;
  price: string;
};

const TimePage: NextPage = () => {
    




    const address = useAddress();
    function truncateAddress(address: string) {
        return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
    };
    const { contract } = useContract(TRANSFER_CONTRACT_ADDRESS); // Replace with your contract address
    
    const { 
        contract: transferContract,
    } = useContract(TRANSFER_CONTRACT_ADDRESS);

    const {
        data: verifiedTokens,
        isLoading: isVerifiedTokensLoading,
    } = useContractRead(
        transferContract,
        "getVerifiedTokens"
    );




  




    
    const {
      mutate: mintTokens,
      isLoading,
      error,
    } = useMintToken(contract);
  
    if (error) {
      console.error("Failed to mint tokens", error);
    }
    const handleMintClick = async () => {
      // Prezzo del minting: 1 MATIC per 1000 token
      const price = "1"; // Sostituisci con il prezzo effettivo
      const amount = 1000;
    
      try {
        const mintParams: TokenParams = {
          to: "0x5bf4638a312c0DecfAD4E59465C44a51DA0604e2",
          amount: amount,
          price: price,
        };
    
        await mintTokens(mintParams);
      } catch (error) {
        console.error("Failed to mint tokens", error);
      }
    };







  return (
    <>
      {/* Prima sezione con la GIF */}
      <div className={styles.container}>
      <div style={{ margin: '100px' }}>
  {/* Content of the first section */}
</div>

{/* Empty space */}
<div style={{ height: '100px' }} />
        <div className={styles.hero}>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  <MediaRenderer
                    src="ipfs://QmWPdszhCpzdi7DWw8ngyzN3Gi3xdC6UjPKFA8Utq8V1BB/ljkk%C3%B2n.gif"
                    style={{ width: "100%", height: "auto", maxWidth: "600px" }}
                    className={styles.gifImage}
                  />
                  <br />
                  $TIME Power Your Journey
                </span>
              </h1>
              
              <span className={styles.heroSubtitle}>
                      TIME token is the governance token of POLYWATCH needed to access various features such as buying or evolving other POLYWATCH , voting on new proposals or taking advantage of exclusive opportunities 
                    </span>
                    <Link className={styles.heroCta} href="/buytime">
                   BUY
                  </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Spazio tra le sezioni */}
      <div className={styles.sectionSpacer}></div>
{/* Seconda sezione con il grafico di TIME */}
<div className={styles.container}>
  <div className={styles.hero}>
    <div className={styles.heroBodyContainer}>
      <div className={styles.heroBody}>
        <h1 className={styles.heroTitle}>
          <span className={styles.heroTitleGradient}>
            TIME Price Chart
          </span>
          
        </h1>
        <div style={{ margin: '40px' }}>
  {/* Content of the first section */}
</div>

{/* Empty space */}
<div style={{ height: '40px' }} />
        <div className={styles.timeGraph}>
          <MediaRenderer
            src="ipfs://QmQai3JNsCZNJp46AUcGzTnKFQfcidn7CLUjiJFNyUuxLs/GRAFICO%20TIME.png"
            style={{ width: "100%", height: "auto", maxWidth: "800px" }}  // Adjust the maxWidth as needed
          />
        </div>
        <div style={{ margin: '10px' }}>
  {/* Content of the first section */}
</div>

{/* Empty space */}
<div style={{ height: '10px' }} />
        <p className={styles.heroSubtitle}>
          MAX SUPPLY 30 MILION</p>
       
          
        <p className={styles.heroSubtitle}>
          
          
          Price: 1 MATIC = 100 tIME
          <br />
          Every 500,000 TIME tokens minted increases the price by 20%.
        </p>
        <div style={{ margin: '60px' }}>
  {/* Content of the first section */}
</div>

{/* Empty space */}
<div style={{ height: '60px' }} />
       
        <MediaRenderer
                    src="ipfs://QmeNymQVjnsHZ9EbeDbDgBVGkiVe1P34sK64cCritbnf1T/EWFWW.png"
                    style={{ width: "100%", height: "auto", maxWidth: "800px" }}
                  />                 
      </div>
    </div>
    
  </div>
</div>

<div style={{ margin: '40px' }}>
  {/* Content of the first section */}
</div>

{/* Empty space */}
<div style={{ height: '40px' }} />
      {/* Spazio tra le sezioni */}
      <div className={styles.sectionSpacer}></div>

      {/* Terza sezione con l'accesso alle opportunità */}
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  $TIME PRIVATE USER SECTION
                </span>
              </h1>
              <p className={styles.heroSubtitle}>
                {/* Lascia spazio per il testo */}
              </p>


              <div style={{ margin: '100px' }}>
  {/* Content of the first section */}
</div>
{/* Empty space */}
<div style={{ height: '120px' }} />
              </div>
          </div>
             
         
              {address ? (
  <Flex>
    <Flex flexDirection={"column"} mr={8} p={10}>
      <Avatar size={"2xl"} mb={4} />
      <Text
        fontSize={"sm"}
        border={"1px solid black"}
        textAlign={"center"}
        borderRadius={4}
      >
        {truncateAddress(address)}
      </Text>
    </Flex>
   
    <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitle}>
                  YOUR $TIME BALANCE
                </span>
              </h1>
              
              </div>
          </div>


      <SimpleGrid columns={3} spacing={4} mt={4} width="100%" margin="auto">
        {!isVerifiedTokensLoading ? (
          verifiedTokens.map((token: string) => (
            <BalanceCard key={token} tokenAddress={token} />
          ))
        ) : (
          <Spinner />
        )}
      </SimpleGrid>
    </Flex>
  
) : (
  <Flex>
    <Text>CONNECT YOUR WALLET TO SEE YOUR BALANCE</Text>
  </Flex>
)}

<Container maxW={"1440px"}>
  <Flex
    flexDirection={"column"}
    justifyContent={"center"}
    alignItems={"center"}
    
    borderRadius="md"
    p={6}
    mt={8}
  >
    <TransferCard />
    <Events />
  </Flex>
</Container>


            
            

</div>
  </div>









           
      
    </>
  );
};

export default TimePage;
