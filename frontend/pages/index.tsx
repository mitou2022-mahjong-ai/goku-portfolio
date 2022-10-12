import {
  Text,
  Box,
  Heading,
  Link,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
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
        <Link
          pb="3"
          href="https://www.ipa.go.jp/jinzai/mitou/2022/gaiyou_sd-1.html"
          color="blue.500"
        >
          https://www.ipa.go.jp/jinzai/mitou/2022/gaiyou_sd-1.html
        </Link>
        <Heading color="blackAlpha.800" pt="10">
          メンバー
        </Heading>
        <UnorderedList pt="4">
          <ListItem p="1">大神卓也 (東京大学 工学部電子情報工学科)</ListItem>
          <ListItem p="1">今宿祐希 (東京大学 工学部電子情報工学科)</ListItem>
          <ListItem p="1">天野克敏 (東京大学 工学部電子情報工学科)</ListItem>
          <ListItem p="1">奈良亮耶 (東京大学 工学部電子情報工学科)</ListItem>
        </UnorderedList>
      </Box>
    </Layout>
  );
};

export default Page;
