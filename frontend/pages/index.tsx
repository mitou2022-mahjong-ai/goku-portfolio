import { Text, Box, VStack, Heading, Flex, Center } from "@chakra-ui/react";
import type { NextPage } from "next";
import Layout from "../components/Layout";
import Header from "../components/Header";
import { Stats } from "../gen";
import { useEffect, useState } from "react";
import { appClient } from "../hooks/appClient";

const Page: NextPage = () => {
  return (
    <Layout>
      <Header />
      <Box w="90%" p="20">
        <Box>
          <Heading color="blackAlpha.800">このプロジェクトについて</Heading>
          <Text color="blackAlpha.800" pt="10" fontSize="xl">
            このプロジェクトは、未踏事業2022「麻雀プロのためのAI牌譜解析ツール」のポートフォリオサイトです。
          </Text>
        </Box>
      </Box>
    </Layout>
  );
};

export default Page;
