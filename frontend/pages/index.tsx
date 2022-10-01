import { Text, Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Layout from "../components/Layout";
import Header from "../components/Header";
import { Stats } from "../gen";
import { useEffect, useState } from "react";
import { appClient } from "../hooks/appClient";

const Page: NextPage = () => {
  const [stats, setStats] = useState<Stats[] | null>();
  useEffect(() => {
    const f = async () => {
      const d =
        await appClient.default.getOverallGamestatsGameStatsOverallGet();
      setStats(d);
    };
    f();
  }, []);

  return (
    <Layout>
      <Header text="麻雀AI 極" />
      <Text>極</Text>
      <Box>{stats ? stats[0].ai_type : ""}</Box>
    </Layout>
  );
};

export default Page;
