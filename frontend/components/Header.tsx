import { Heading, Box, Divider } from "@chakra-ui/react";

const Header = ({ text }: { text: string }) => {
  return (
    <Box bg="gray.400">
      <Box p="4" pl="10">
        <Heading fontSize="2xl" fontWeight="900">
          {text}
        </Heading>
      </Box>
      <Divider borderColor="gray.400" />
    </Box>
  );
};

export default Header;
