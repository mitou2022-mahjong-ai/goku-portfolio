import {
  Table,
  Heading,
  Tr,
  Th,
  Td,
  Thead,
  Tbody,
  Box,
  Text,
  Center,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { appClient } from "../hooks/appClient";
import { Stats } from "../gen";

const DataTable = ({ stats }: { stats: Stats[] }) => {
  return (
    <Box w="90%">
      <Table variant="striped" colorScheme="facebook">
        <Thead>
          <Tr>
            <Th>日時</Th>
            <Th>モデルの種類</Th>
            <Th>着順</Th>
            <Th>URL</Th>
          </Tr>
        </Thead>
        <Tbody>
          {stats.map((s) => {
            return (
              <Tr>
                <Td>{s.datetime}</Td>
                <Td>{s.ai_type}</Td>
                <Td>{s.rank}</Td>
                <Td>{s.url}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
};

const Page: NextPage = () => {
  const [stats, setStats] = useState<Stats[]>();
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
      <Header />
      <Box w="90%" p="20">
        <Box>
          <Heading color="blackAlpha.800">天鳳の対戦成績結果</Heading>
        </Box>
      </Box>
      <Center>{stats ? <DataTable stats={stats} /> : <></>}</Center>
    </Layout>
  );
};

export default Page;
