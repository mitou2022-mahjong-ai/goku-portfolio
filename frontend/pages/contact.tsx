import { Link, Box, Heading, UnorderedList, ListItem } from "@chakra-ui/react";
import type { NextPage } from "next";
import Layout from "../components/Layout";

const Page: NextPage = () => {
  return (
    <Layout>
      <Box>
        <Heading color="blackAlpha.800">連絡先</Heading>
        <UnorderedList pt="4">
          <ListItem>
            {" "}
            共有のメールアドレス:{" "}
            <Link href="mailto:suzakumjai@gmail.com" color="blue.600">
              {" "}
              suzakumjai(アットマーク)gmail.com
            </Link>
          </ListItem>
        </UnorderedList>
      </Box>
    </Layout>
  );
};

export default Page;
