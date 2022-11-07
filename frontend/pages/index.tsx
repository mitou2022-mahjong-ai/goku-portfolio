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
          <ListItem p="1" color="blackAlpha.800" fontSize="xl">
            大神卓也 (東京大学 工学部電子情報工学科)
          </ListItem>
          <ListItem p="1" color="blackAlpha.800" fontSize="xl">
            今宿祐希 (東京大学 工学部電子情報工学科)
          </ListItem>
          <ListItem p="1" color="blackAlpha.800" fontSize="xl">
            天野克敏 (東京大学 工学部電気電子工学科)
          </ListItem>
          <ListItem p="1" color="blackAlpha.800" fontSize="xl">
            奈良亮耶 (東京大学 工学部電子情報工学科)
          </ListItem>
        </UnorderedList>
        <Heading color="blackAlpha.800" pt="10">
          コンセプト
        </Heading>
        <Text color="blackAlpha.800" pt="10" fontSize="xl">
          近年、競技としての麻雀が非常に人気を集めています。一方で、将棋や囲碁などの世界ではAIが様々な場面で活用されているものの、麻雀においてはプロ雀士にAIが活用されているとは十分には言えない状態です。そこで我々は、ネット麻雀において活躍できることはもちろん、プロに活用してもらうための麻雀AIの研究を行っています。
        </Text>
      </Box>
    </Layout>
  );
};

export default Page;
