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
  Flex,
  Select,
  Tooltip,
  IconButton,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  UnorderedList,
  ListItem,
  Input,
  HStack,
  Checkbox,
} from "@chakra-ui/react";

import {
  ArrowRightIcon,
  ArrowLeftIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";

import { usePagination, useTable, CellProps } from "react-table";

import { NextPage } from "next";
import Layout from "../components/Layout";
import { useState, useEffect, useMemo } from "react";
import { appClient } from "../hooks/appClient";
import { Stats } from "../gen";

const DataTable = ({ stats }: { stats: Stats[] }) => {
  const columns = useMemo(() => {
    return [
      {
        Header: "対局一覧",
        columns: [
          {
            Header: "日時",
            accessor: "datetime",
            Cell: ({ row }: CellProps<Stats>) =>
              new Date(row.original.datetime).toLocaleString(),
          },
          {
            Header: "モデルの種類",
            accessor: "ai_type",
          },
          {
            Header: "順位",
            accessor: "rank",
          },
          {
            Header: "url",
            accessor: "url",
            Cell: ({ row }: CellProps<Stats>) => (
              <>
                <Link
                  href={row.original.url}
                  display={{ base: "none", md: "block" }}
                  color="blue.600"
                  isExternal
                >
                  {row.original.url}
                </Link>
                <Link
                  href={row.original.url}
                  display={{ base: "block", md: "none" }}
                  color="blue.600"
                  isExternal
                >
                  url
                </Link>
              </>
            ),
          },
        ],
      },
    ];
  }, [stats]);

  const data = useMemo(() => {
    return stats;
  }, [stats]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );
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
            {headerGroups.map((headerGroup, i) => (
              <Tr {...headerGroup.getHeaderGroupProps()} key={i}>
                {headerGroup.headers.map((column, j) => (
                  <Th {...column.getHeaderProps()} key={j}>
                    {column.render("Header")}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()} key={i}>
                  {row.cells.map((cell, j) => {
                    return (
                      <Td {...cell.getCellProps()} key={j}>
                        {cell.render("Cell")}
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
        <Flex justifyContent="space-between" m={4} alignItems="center">
          <Flex>
            <Tooltip label="First Page">
              <IconButton
                aria-label="first-page"
                onClick={() => gotoPage(0)}
                isDisabled={!canPreviousPage}
                icon={<ArrowLeftIcon h={3} w={3} />}
                mr={4}
              />
            </Tooltip>
            <Tooltip label="Previous Page">
              <IconButton
                aria-label="previous-page"
                onClick={previousPage}
                isDisabled={!canPreviousPage}
                icon={<ChevronLeftIcon h={6} w={6} />}
              />
            </Tooltip>
          </Flex>

          <Flex alignItems="center">
            <Text flexShrink="0" mr={8}>
              Page{" "}
              <Text fontWeight="bold" as="span">
                {pageIndex + 1}
              </Text>{" "}
              of{" "}
              <Text fontWeight="bold" as="span">
                {pageOptions.length}
              </Text>
            </Text>
            <Text flexShrink="0">Go to page:</Text>{" "}
            <NumberInput
              ml={2}
              mr={8}
              w={28}
              min={1}
              max={pageOptions.length}
              onChange={(value) => {
                const page = value ? parseInt(value) - 1 : 0;
                gotoPage(page);
              }}
              defaultValue={pageIndex + 1}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Select
              w={32}
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </Select>
          </Flex>

          <Flex>
            <Tooltip label="Next Page">
              <IconButton
                aria-label="next-page"
                onClick={nextPage}
                isDisabled={!canNextPage}
                icon={<ChevronRightIcon h={6} w={6} />}
              />
            </Tooltip>
            <Tooltip label="Last Page">
              <IconButton
                aria-label="last-page"
                onClick={() => gotoPage(pageCount - 1)}
                isDisabled={!canNextPage}
                icon={<ArrowRightIcon h={3} w={3} />}
                ml={4}
              />
            </Tooltip>
          </Flex>
        </Flex>
      </TableContainer>
    </Box>
  );
};

const Page: NextPage = () => {
  const [stats, setStats] = useState<Stats[]>();

  const [start, setStart] = useState<Date>(new Date());
  const [end, setEnd] = useState<Date>(new Date());

  const [timeChecked, setTimeChecked] = useState(false);

  const [aiChecked, setAiChecked] = useState<Map<string, boolean>>(new Map());
  const [aiCheckCnt, setAICheckCnt] = useState(0);

  const gameId = {
    一般卓: 9,
    上級卓: 137,
    特上卓: 42,
  };

  const chosenStats = useMemo(() => {
    const retval = stats
      ?.filter((stat) => {
        if (!timeChecked) return true;
        return (
          start <= new Date(stat.datetime) && new Date(stat.datetime) <= end
        );
      })
      .filter((stat) => {
        return aiChecked.get(stat.ai_type);
      });
    return retval;
  }, [stats, start, end, timeChecked, aiCheckCnt]);

  const meldPercentage = useMemo(() => {
    let meldCnt = 0;
    let roundCnt = 0;
    chosenStats?.forEach((s) => {
      meldCnt += s.meld_cnt;
      roundCnt += s.round_num;
    });
    if (roundCnt == 0) return 0;
    return meldCnt / roundCnt;
  }, [chosenStats]);

  const riichiPercentage = useMemo(() => {
    let riichiCnt = 0;
    let roundCnt = 0;
    chosenStats?.forEach((s) => {
      riichiCnt += s.riichi_cnt;
      roundCnt += s.round_num;
    });
    if (roundCnt == 0) return 0;
    return riichiCnt / roundCnt;
  }, [chosenStats]);

  const houjuPercentage = useMemo(() => {
    let houjuCnt = 0;
    let roundCnt = 0;
    chosenStats?.forEach((s) => {
      houjuCnt += s.houju_cnt;
      roundCnt += s.round_num;
    });
    if (roundCnt == 0) return 0;
    return houjuCnt / roundCnt;
  }, [chosenStats]);

  const aveAgariPoint = useMemo(() => {
    let agariCnt = 0;
    let sumAgari = 0;
    chosenStats?.forEach((s) => {
      agariCnt += s.agari_cnt;
      sumAgari += s.ave_agari * s.agari_cnt;
    });
    return sumAgari / agariCnt;
  }, [chosenStats]);

  const ryuukyokuTenpaiPercent = useMemo(() => {
    let ryuukyokuCnt = 0;
    let ryuukyokuTenpaiCnt = 0;
    chosenStats?.forEach((s) => {
      ryuukyokuCnt += s.ryuukyoku_cnt;
      ryuukyokuTenpaiCnt += s.ryuukyoku_cnt * s.ryuukyoku_tenpai_percentage;
    });
    return ryuukyokuTenpaiCnt / ryuukyokuCnt;
  }, [chosenStats]);

  useEffect(() => {
    const f = async () => {
      let d = await appClient.default.getOverallGamestatsGameStatsOverallGet();
      d = d.reverse();
      setStart(new Date(d[d.length - 1].datetime));
      setEnd(new Date(d[0].datetime));
      setStats(d);
      const aiTypes: Set<string> = new Set();
      d.forEach((dd) => {
        aiTypes.add(dd.ai_type);
      });

      aiTypes.forEach((aiType) => {
        aiChecked.set(aiType, true);
      });
      setAiChecked(aiChecked);
    };
    f();
  }, []);

  return (
    <Layout>
      <Heading color="blackAlpha.800">天鳳の対戦成績結果</Heading>
      <Box pt="10" w="90%">
        <Text fontSize="xl">
          オンライン麻雀
          <Link href="https://tenhou.net/" color="teal" isExternal>
            「天鳳」
          </Link>
          での対戦結果です。
          <Link href="https://tenhou.net/man/" color="teal" isExternal>
            利用規約
          </Link>
          に基づき、適切にAIによる対戦を行なっています。対戦結果は
          <Link href="https://twitter.com/goku_log" color="teal" isExternal>
            こちらのTwitterアカウント
          </Link>
          でも公開しています。今後さらにアルゴリズムをアップデートしていく予定です。
          <br />
          元々「GOKURIN」というアカウントで対戦させており、一般卓での対戦のみで4段に到達することが出来ました。天鳳の運営の方から
          今回特別に許可をいただき、今後は「ⓝGOKU」というアカウントで上級卓以上で打たせていこうと考えています。同卓いただく皆様、よろしくお願いいたします。
        </Text>
      </Box>
      <HStack mt="2">
        <Box>
          <Text fontSize="lg" m="1" fontWeight="bold">
            副露率
          </Text>
          <Text fontSize="lg" m="1">
            {Math.round(meldPercentage * 1000) / 10}%
          </Text>
        </Box>
        <Box>
          <Text fontSize="lg" m="1" fontWeight="bold">
            立直率
          </Text>
          <Text fontSize="lg" m="1">
            {Math.round(riichiPercentage * 1000) / 10}%
          </Text>
        </Box>
        <Box>
          <Text fontSize="lg" m="1" fontWeight="bold">
            放銃率
          </Text>
          <Text fontSize="lg" m="1">
            {Math.round(houjuPercentage * 1000) / 10}%
          </Text>
        </Box>
        <Box>
          <Text fontSize="lg" m="1" fontWeight="bold">
            平均和了得点
          </Text>
          <Text fontSize="lg" m="1">
            {Math.round(aveAgariPoint)}
          </Text>
        </Box>
        <Box>
          <Text fontSize="lg" m="1" fontWeight="bold">
            平均流局聴牌率
          </Text>
          <Text fontSize="lg" m="1">
            {Math.round(ryuukyokuTenpaiPercent * 1000) / 10}%
          </Text>
        </Box>
      </HStack>
      <Box mt="3">
        <Checkbox
          m="1"
          onChange={() => {
            setTimeChecked(!timeChecked);
          }}
        >
          時刻で絞る
        </Checkbox>
        <HStack m="1">
          <Input
            placeholder="Select Date and Time"
            size="md"
            type="datetime-local"
            w="25"
            disabled={!timeChecked}
            onChange={(e) => {
              setStart(new Date(e.target.value));
            }}
          />
          <Text>~</Text>
          <Input
            placeholder="Select Date and Time"
            size="md"
            w="25"
            type="datetime-local"
            disabled={!timeChecked}
            onChange={(e) => {
              setEnd(new Date(e.target.value));
            }}
          />
        </HStack>
        <Text mt="4">AIの種類で絞る</Text>
        <HStack mt="4">
          {Array.from(aiChecked.entries())
            .reverse()
            .map(([aiType, _]) => {
              return (
                <Box m="1" key={aiType}>
                  <Checkbox
                    defaultChecked
                    onChange={() => {
                      aiChecked.set(aiType, !aiChecked.get(aiType));
                      setAiChecked(aiChecked);
                      setAICheckCnt(aiCheckCnt + 1);
                    }}
                  >
                    {aiType}
                  </Checkbox>
                </Box>
              );
            })}
        </HStack>
      </Box>
      <Center pt="10" w="90%" overflowX="auto">
        {chosenStats ? (
          <DataTable stats={chosenStats} />
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
      <Box pt="4">
        <Heading color="blackAlpha.800">モデルのアップデート</Heading>
        <UnorderedList pt="4">
          <ListItem p="1" color="blackAlpha.800" fontSize="xl">
            gokurin:0.2
          </ListItem>
          <Text fontSize="xl">副露モデルを大幅アップデートしました</Text>
          <ListItem p="1" color="blackAlpha.800" fontSize="xl">
            GOKU:v1
          </ListItem>
          <Text fontSize="xl">
            アカウントをⓝGOKUに切り替えました。打牌モデルをアップデートしました
          </Text>
          <ListItem p="1" color="blackAlpha.800" fontSize="xl">
            GOKU:v2
          </ListItem>
          <Text fontSize="xl">
            副露をしにくくなるようにしました。立直モデルをアップデートしました。
          </Text>
        </UnorderedList>
      </Box>
    </Layout>
  );
};

export default Page;
