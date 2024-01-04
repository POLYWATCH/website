import { Box, Card, Flex, Heading, Input, Text } from "@chakra-ui/react";
import { MediaRenderer, useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import { TRANSFER_CONTRACT_ADDRESS } from "../const/contractAddresses";
import TokenSelection from "./TokenSelection";
import { useState } from "react";
import TokenBalance from "./TokenBalance";
import TransferButton from "./TransferButton";
import styles from "../styles/Homes.module.css";

export default function TransferCard() {
    const address = useAddress();

    const {
        contract
    } = useContract(TRANSFER_CONTRACT_ADDRESS);

    const {
        data: verifiedTokens,
        isLoading: isVerifiedTokensLoading,
    } = useContractRead(contract, "getVerifiedTokens");

    const [formData, setFormData] = useState({
        receiver: '',
        amount: '',
        message: ''
    });

    const [selectedToken, setSelectedToken] = useState('');

    const handleChange = (event: any, name: any) => {
        setFormData((prevState) => ({
            ...prevState,
            [name]: event.target.value
        }));
    };

    const handleTokenSelection = (tokenAddress: string) => {
        setSelectedToken(tokenAddress);
    };

    return (
        <Card w={"50%"} p={20}>
            <Heading color="white">Transfer:</Heading>

            <Text mt={4} fontWeight={"bold"} color="white">Select Token:</Text>
            <Flex flexDirection={"row"} mt={4}>
                {!isVerifiedTokensLoading && 
                    verifiedTokens.map((token: string) => (
                        <Box
                            key={token}
                            onClick={() => handleTokenSelection(token)}
                            className={styles.tokenButton}
                        >
                            <TokenSelection
                                tokenAddress={token}
                                isSelected={selectedToken === token}

                               
                            />
                            
                        </Box>
                        
                    ))}
            </Flex>

            <TokenBalance tokenAddress={selectedToken} />

            <Text mt={4} fontWeight={"bold"} color="white">Send To:</Text>
            <Input
                placeholder="0x0000000"
                type="text"
                value={formData.receiver}
                onChange={(event) => handleChange(event, "receiver")}
                bg="black"
                color="white"
                border="1px solid white"
                borderRadius="md"
                p={6} // Aumentato il padding
            />
            <Text mt={4} fontWeight={"bold"} color="white">Amount:</Text>
            <Input
                placeholder="0.0"
                type="number"
                value={formData.amount}
                onChange={(event) => handleChange(event, "amount")}
                bg="black"
                color="white"
                border="1px solid white"
                borderRadius="md"
                p={6} // Aumentato il padding
            />
            <Text mt={4} fontWeight={"bold"} color="white">Message:</Text>
            <Input
                placeholder="Add a short message here."
                type="text"
                value={formData.message}
                onChange={(event) => handleChange(event, "message")}
                bg="black"
                color="white"
                border="1px solid white"
                borderRadius="md"
                p={6} // Aumentato il padding
            />
            <Box mt={8}>
                {address ? (
                    <TransferButton
                        tokenAddress={selectedToken}
                        receiver={formData.receiver}
                        amount={formData.amount.toString()}
                        message={formData.message}
                    />
                ) : (
                    <Text color="white">Please connect your wallet to make a transfer.</Text>
                )}
            </Box>
        </Card>
    );
};
