import React from "react";
import { Flex, Accordion, Span } from "@chakra-ui/react";

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
    <Flex
      direction={"row"}
      gap={"2rem"}
      justifyContent={"flex-start"}
      alignItems={"center"}
    >
      <img src="/logo-transparent.svg" alt="Datakyu Logo" width={200} height={30} />

      {menuItems.map((menuItem, index) => (
        <Accordion.Root
          key={index}
          variant={"plain"}
          size={"lg"}
          multiple
        >
          <Accordion.Item value={menuItem.title}>
            <Accordion.ItemTrigger>
              <Span flex="1">{menuItem.title}</Span>
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Flex p={2} direction={"column"} gap={2}>
                {menuItem.items.map((item, subIndex) => (
                  <Span key={subIndex} flex="1">
                    {item}
                  </Span>
                ))}
              </Flex>
            </Accordion.ItemContent>
          </Accordion.Item>
        </Accordion.Root>
      ))}
    </Flex>
  );
}
