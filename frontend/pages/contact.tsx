import { Link, Box, Heading, UnorderedList, ListItem } from "@chakra-ui/react";
import type { NextPage } from "next";
import Layout from "../components/Layout";

const Page: NextPage = () => {
  return (
    <Layout>
      <Box>
        <Heading color="blackAlpha.800">連絡先</Heading>
        <UnorderedList pt="4">
          <ListItem fontSize="xl" p="1">
            {" "}
            共有のメールアドレス:{" "}
            <Link href="mailto:suzakumjai@gmail.com" color="blue.600">
              {" "}
              suzakumjai(アットマーク)gmail.com
            </Link>
          </ListItem>
          <ListItem fontSize="xl" p="1">
            {" "}
            Twitter:{" "}
            <Link href="https://twitter.com/mitoumjai" color="blue.600" isExternal>
              {" "}
              mitoumjai
            </Link>
          </ListItem>
        </UnorderedList>
      </Box>
    </Layout>
  );
};

export default Page;
