import { Box, Flex, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { SimpleSidebar } from "./Sidebar";
import Header from "./Header";
import Head from "next/head";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>麻雀AI 極</title>
        <link rel="icon" href="/goku-icon.png" />
      </Head>
      <VStack w="100%" overflowY="scroll">
        <Header />
        <Flex w="100%">
          <SimpleSidebar />
          <Flex w={{ base: "80%" }} flexDirection="column" p="10">
            {children}
          </Flex>
        </Flex>
      </VStack>
    </>
  );
};

export default Layout;
