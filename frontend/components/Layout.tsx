import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Flex>
      <Box w="100%">{children}</Box>
    </Flex>
  );
};

export default Layout;
