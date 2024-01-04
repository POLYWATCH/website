import { Card, Flex, Heading, Spinner, Stack, Text } from "@chakra-ui/react";
import { useAddress, useContract, useContractEvents, useContractMetadata, useTokenBalance } from "@thirdweb-dev/react";

type Props = {
    tokenAddress: string;
};

export default function BalanceCard({ tokenAddress }: Props) {
    const address = useAddress();

    const {
        contract
    } = useContract(tokenAddress);

    const {
        data: contractMetadata,
        isLoading: isContractMetadataLoading,
    } = useContractMetadata(contract);

    const {
        data: tokenBalance,
        isLoading: isTokenBalanceLoading,
    } = useTokenBalance(contract, address);

    const {
        data: events,
        isLoading: isEventsLoading,
    } = useContractEvents(
        contract,
        "get"
    );

    return (
        <Card
          p={4}
          width={"100%"}
          height={"100%"}
          border={"2px solid"}
          position="relative"
          _before={{
            content: "''",
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            pointerEvents: "none",
            border: "2px solid",
            borderColor: "transparent",
            borderRadius: "md",
            animation: "glow 1.5s infinite alternate",
          }}
        >
          {!isContractMetadataLoading && contractMetadata ? (
            <Stack textAlign={"center"} spacing={4}>
              <Heading size="md" fontWeight={"bold"}>
                {contractMetadata.symbol}
              </Heading>
              <Text>Balance:</Text>
              {!isTokenBalanceLoading ? (
                <Text fontSize={"xl"} fontWeight={"bold"}>
                  {tokenBalance?.displayValue}
                </Text>
              ) : (
                <Spinner />
              )}
            </Stack>
          ) : (
            <Flex align="center" justify="center" height="100%">
              <Spinner />
            </Flex>
          )}
        </Card>
      );
    };