import React from "react";
import { Table, Flex, Heading } from "@chakra-ui/react";

export default function MarketingToolsTable() {
  const tableContent = [
    {
      id: 1,
      useCase: "Marketing",
      identity: "Cross-device attribution, ad platform syncing",
      funnels: "Conversion + drop-off measurement",
      retention: "Campaign lift, audience re-engagement",
      media: "Consent Mode, server-side conversions",
      warehouse: "Export for BI + paid media",
      governance: "Tag QA, consent compliance",
    },
    {
      id: 2,
      useCase: "Product",
      identity: "User ID design, anonymous to known stitching",
      funnels: "Onboarding flow, feature adoption",
      retention: "Cohort survival, churn prediction",
      media: "Product-led growth experiments",
      warehouse: "Event models for PM dashboards",
      governance: "Schema enforcement, taxonomy",
    },
    {
      id: 3,
      useCase: "Data",
      identity: "ID graph, deduplication",
      funnels: "Standardized metrics across teams",
      retention: "SQL-ready tables for LTV modeling",
      media: "Clean feeds to ad platforms",
      warehouse: "dbt models, freshness SLAs",
      governance: "PII handling, lineage, logging",
    },
  ];

  return (
    <Flex
      direction={"column"}
      gap={4}
      my={"3rem"}
      width={{ lg: "80%" }}
      margin={{ lg: "4rem auto" }}
    >
      <Heading my={6} size={"lg"} textAlign={"center"} letterSpacing={"tight"}>
        The right tool for the right job
      </Heading>
      <Table.Root size="sm">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader p={2} fontWeight={"bold"}>
              Category
            </Table.ColumnHeader>
            {tableContent.map((item) => (
              <Table.ColumnHeader key={item.id} p={2} fontWeight={"bold"}>
                {item.useCase}
              </Table.ColumnHeader>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell p={2} fontWeight={"bold"}>
              Identity
            </Table.Cell>
            {tableContent.map((item) => (
              <Table.Cell key={item.id} p={2}>
                {item.identity}
              </Table.Cell>
            ))}
          </Table.Row>
          <Table.Row>
            <Table.Cell p={2} fontWeight={"bold"}>
              Funnels
            </Table.Cell>
            {tableContent.map((item) => (
              <Table.Cell key={item.id} p={2}>
                {item.funnels}
              </Table.Cell>
            ))}
          </Table.Row>
          <Table.Row>
            <Table.Cell p={2} fontWeight={"bold"}>
              Retention
            </Table.Cell>
            {tableContent.map((item) => (
              <Table.Cell key={item.id} p={2}>
                {item.retention}
              </Table.Cell>
            ))}
          </Table.Row>
          <Table.Row>
            <Table.Cell p={2} fontWeight={"bold"}>
              Media
            </Table.Cell>
            {tableContent.map((item) => (
              <Table.Cell key={item.id} p={2}>
                {item.media}
              </Table.Cell>
            ))}
          </Table.Row>
          <Table.Row>
            <Table.Cell p={2} fontWeight={"bold"}>
              Warehouse
            </Table.Cell>
            {tableContent.map((item) => (
              <Table.Cell key={item.id} p={2}>
                {item.warehouse}
              </Table.Cell>
            ))}
          </Table.Row>
          <Table.Row>
            <Table.Cell p={2} fontWeight={"bold"}>
              Governance
            </Table.Cell>
            {tableContent.map((item) => (
              <Table.Cell key={item.id} p={2}>
                {item.governance}
              </Table.Cell>
            ))}
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </Flex>
  );
}
