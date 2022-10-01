import { Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Header from "../components/Header";

const Page: NextPage = () => {
  return (
    <Layout>
      <Header text="麻雀AI 極" />
      <Text>極</Text>
    </Layout>
  );
};

export default Page;
