import React from "react";
import { Table, Flex, Image } from "@chakra-ui/react";
import { FiCheckCircle, FiCircle } from "react-icons/fi";

type TableComponentProps = {
  service: string;
  basic: boolean;
  full: boolean;
};

export default function TableComponent({
  tableBodyContent,
}: {
  tableBodyContent: TableComponentProps[];
}) {
  return (
    <Flex
      // display={{ base: "none", md: "none", lg: "flex" }}
      direction={"row"}
      gap={4}
      my={"3rem"}
    >
      <Image
        src="/images/thinking.png"
        width={400}
        display={{ base: "none", md: "none", lg: "initial" }}
        alt={"A lady thinking"}
      />
      <Table.Root size="sm">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader p={2} fontWeight={"bold"}>
              Auditing Area
            </Table.ColumnHeader>
            <Table.ColumnHeader p={2} fontWeight={"bold"}>
              Basic Audit
            </Table.ColumnHeader>
            <Table.ColumnHeader p={2} fontWeight={"bold"}>
              Full Audit
            </Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tableBodyContent.map((item, index) => (
            <Table.Row key={index}>
              <Table.Cell p={2}>{item.service}</Table.Cell>
              <Table.Cell p={2}>
                {item.basic ? <FiCheckCircle /> : <FiCircle />}
              </Table.Cell>
              <Table.Cell p={2}>
                {item.full ? <FiCheckCircle /> : <FiCircle />}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Flex>
  );
}
