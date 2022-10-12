import { Box, Flex, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { SimpleSidebar } from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <VStack w="100%" overflowX="scroll" overflowY="scroll">
      <Header />
      <Flex w="100%">
        <SimpleSidebar />
        <Box p="10">{children}</Box>
      </Flex>
    </VStack>
  );
};

export default Layout;
