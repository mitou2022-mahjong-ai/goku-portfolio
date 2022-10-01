import { Box, Divider, Text } from "@chakra-ui/react";

const Header = ({text}: {text: string}) => {
    return (
        <Box>
            <Box pt="4" pb="2">
                <Text fontSize="2xl" fontWeight="900">
                    {text}
                </Text>
            </Box>
            <Divider borderColor="gray.400" />
        </Box>
    );
    };

export default Header;
