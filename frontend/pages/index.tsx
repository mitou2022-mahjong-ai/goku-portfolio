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
        <Heading color="blackAlpha.800" pt="10">
          このプロジェクトについて
        </Heading>
        <Text color="blackAlpha.800" pt="10" fontSize="xl">
          このプロジェクトは、未踏事業2022「麻雀プロのためのAI牌譜解析ツール」のポートフォリオサイトです。
        </Text>
        <Link
          pb="3"
          href="https://www.ipa.go.jp/jinzai/mitou/2022/gaiyou_sd-1.html"
          color="blue.500"
          isExternal
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
        <Heading color="blackAlpha.800" pt="10">
          「極」という名前の由来
        </Heading>
        <Text color="blackAlpha.800" pt="10" fontSize="xl">
          麻雀の情報集合の数は10の48乗程度、すなわち1極程度とも言われています(
          <Link
            pb="3"
            href="https://openreview.net/forum?id=DTXZqTNV5nW"
            color="blue.500"
            isExternal
          >
            https://openreview.net/forum?id=DTXZqTNV5nW
          </Link>
          )。このとてつもなく膨大な情報集合を正確に分析し、麻雀を極めて欲しいという願いから、
          「極（ごく）」という名前が付けられました。
        </Text>
        <Heading color="blackAlpha.800" pt="10">
          連絡先
        </Heading>
        <UnorderedList pt="4">
          <ListItem fontSize="xl" p="1">
            {" "}
            公式Twitter:{" "}
            <Link
              href="https://twitter.com/mitoumjai"
              color="blue.600"
              isExternal
            >
              {" "}
              @mitoumjai
            </Link>
          </ListItem>
          <ListItem fontSize="xl" p="1">
            {" "}
            対戦結果通知用Twitter:{" "}
            <Link
              href="https://twitter.com/goku_log"
              color="blue.600"
              isExternal
            >
              {" "}
              @goku_log
            </Link>
          </ListItem>
        </UnorderedList>
      </Box>
    </Layout>
  );
};

export default Page;
