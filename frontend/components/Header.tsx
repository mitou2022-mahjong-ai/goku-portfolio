import { Box, Divider } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box bg="white.100" w="100%">
      <Box p="4" pl="20" h="100px">
        <Flex align="center" h="100%" color="blackAlpha.800">
          <Box
            color="blackAlpha.700"
            bg="whiteAlpha.100"
            fontWeight="900"
            fontSize="4xl"
          >
            麻雀AI 極
          </Box>
        </Flex>
      </Box>
      <Divider borderColor="gray.100" />
    </Box>
  );
};

export default Header;
