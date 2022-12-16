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
          近年、Mリーグが人気を集めるなど、競技としての麻雀が非常に注目されています。
          同じく競技として盛り上がりをみせている将棋などの世界では、
          放送対局における解説やプロ棋士の方々の勉強といった、様々な場面でAIが活用されている一方、
          麻雀の世界においては、AIが十分に活用されているとは言えない状況です。
          そこで私たちのプロジェクトでは、人間よりも強いAIを作ることはもちろん、
          プロ雀士の方々にも認められ多くの場面で活躍されるようなAIを作りたいと考えています。
        </Text>
      </Box>
    </Layout>
  );
};

export default Page;
