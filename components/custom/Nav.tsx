import React from "react";
import styles from "../../app/page.module.css";
import { Flex, Accordion, Span } from "@chakra-ui/react";
import Image from "next/image";

export default function Nav() {
  const menuItems = [
    {
      title: "Services",
      items: [
        "Auditing and Implementation",
        "MarTech Stack Migration",
        "Consulting",
      ],
    },
    {
      title: "Resources",
      items: [
        "Blog",
        "Google Analytics 4 Tracking Generator",
        "Google Tag Manager Container Templates",
        "Looker Studio Templates",
      ],
    },
  ];
  return (
    <Flex direction={"row"} gap={"5rem"} justifyContent={"space-between"} alignItems={"center"}>
        <Image
          className={styles.logo}
          src="/logo-transparent.svg"
          alt="Official Datakyu logo"
          width={90}
          height={19}
          priority
        />
        <Accordion.Root variant={"plain"} size={"lg"} multiple>
      <Flex gap={10} direction={"row"} flexWrap={"wrap"}>
      {menuItems.map((menuItem, index) => (
        <Accordion.Item key={index} value={menuItem.title}>
          <Accordion.ItemTrigger>
            <Span flex="1">{menuItem.title}</Span>
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Flex direction={"column"} gap={2}>
              {menuItem.items.map((item, index) => (
                <Span key={index} flex="1">
                  {item}
                </Span>
              ))}
            </Flex>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
      </Flex>
    </Accordion.Root>
    </Flex>
  );
}
