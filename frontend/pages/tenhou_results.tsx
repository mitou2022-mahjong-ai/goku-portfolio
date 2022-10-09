import {
  Table,
  TableContainer,
  Heading,
  Tr,
  Th,
  Td,
  Text,
  Link,
  Thead,
  Tbody,
  Box,
  Center,
  Spinner,
} from "@chakra-ui/react";

import { NextPage } from "next";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { appClient } from "../hooks/appClient";
import { Stats } from "../gen";

const DataTable = ({ stats }: { stats: Stats[] }) => {
  return (
    <Box w="100%">
      <TableContainer
        border="1px"
        borderColor="blackAlpha.300"
        p="3"
        borderRadius="10"
      >
        <Table variant="striped" colorScheme="teal">
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
                <Tr key={s.datetime}>
                  <Td>{s.datetime}</Td>
                  <Td>{s.ai_type}</Td>
                  <Td>{s.rank}</Td>
                  <Td>
                    <Link href={s.url} isExternal>
                      {s.url}
                    </Link>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
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
      <Heading color="blackAlpha.800">天鳳の対戦成績結果</Heading>
      <Box pt="10">
        <Text>
          オンライン麻雀
          <Link href="https://tenhou.net/" color="teal" isExternal>
            「天鳳」
          </Link>
          での対戦結果です。
          <Link href="https://tenhou.net/man/" color="teal" isExternal>
            利用規約
          </Link>
          に基づき、適切にAIによる対戦を行なっています。
        </Text>
      </Box>
      <Center pt="10">
        {stats ? (
          <DataTable stats={stats} />
        ) : (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        )}
      </Center>
    </Layout>
  );
};

export default Page;
