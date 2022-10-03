import { Text, Box, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Layout from "../components/Layout";

const Page: NextPage = () => {
  return (
    <Layout>
      <Box>
        <Heading color="blackAlpha.800">このプロジェクトについて</Heading>
        <Text color="blackAlpha.800" pt="10" fontSize="xl">
          このプロジェクトは、未踏事業2022「麻雀プロのためのAI牌譜解析ツール」のポートフォリオサイトです。
        </Text>
      </Box>
    </Layout>
  );
};

export default Page;
