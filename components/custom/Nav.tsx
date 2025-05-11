"use client";
import { useState } from "react";

import {
  Box,
  Flex,
  Text,
  CloseButton,
  Stack,
  Button,
  Drawer,
  Link,
  Container,
  Image,
  HStack,
  VStack,
  Portal,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";

const navItems = [
  {
    title: "Services",
    items: [
      { name: "Auditing & Implementation", href: "/services/martech-audits" },
      { name: "Stack Migration", href: "/services/marketing-tech-migration" },
      { name: "Consulting", href: "/services/custom-marketing-analytics" },
    ],
  },
  {
    title: "Resources",
    items: [
      { name: "Blog", href: "https://datajournal.datakyu.co/" },
      { name: "GA4 Generator", href: "#" },
      { name: "GTM Templates", href: "#" },
      { name: "Looker Studio Templates", href: "#" },
    ],
  },
  {
    title: "About",
    href: "/about",
  },
];

type NavItemWithSubItems = {
  name: string;
  href?: string;
};

export default function SimpleNav() {
  const [isOpen, setOpen] = useState(false);
  return (
    <Box as="nav">
      <Container maxW="container.xl" py={4}>
        <Flex justify="space-between" align="center">
          {/* Logo */}
          <Link href={"/"}>
            <Image
              display={{ base: "none", md: "initial" }}
              src="/logo-transparent.svg"
              alt="Logo"
              height="100px"
            />
          </Link>

          {/* Desktop navigation */}
          <HStack gap={8} display={{ base: "none", md: "flex" }}>
            {navItems.map((item, i) => (
              <Box key={i} position="relative">
                {item.items ? (
                  <Box
                    position="relative"
                    className="nav-dropdown"
                    _hover={{ "& > .dropdown-content": { display: "block" } }}
                  >
                    <HStack gap={1} cursor="pointer">
                      <Text fontWeight="medium">{item.title}</Text>
                      <Box>
                        <FiChevronDown />
                      </Box>
                    </HStack>
                    <Box
                      className="dropdown-content"
                      position="absolute"
                      top="100%"
                      left="0"
                      mt={2}
                      boxShadow="md"
                      borderRadius="md"
                      minW="200px"
                      display="none"
                      zIndex={1}
                      p={2}
                      bg={"white"}
                    >
                      <VStack align="stretch" gap={1}>
                        {item.items.map((subItem: any, j) => (
                          <Link
                            key={j}
                            href={subItem.href || "#"}
                            px={3}
                            py={2}
                            borderRadius="md"
                          >
                            <Text>{subItem.name}</Text>
                          </Link>
                        ))}
                      </VStack>
                    </Box>
                  </Box>
                ) : (
                  <Link
                    href={item.href || "#"}
                    fontWeight="medium"
                    _hover={{
                      textDecoration: "none",
                    }}
                  >
                    {item.title}
                  </Link>
                )}
              </Box>
            ))}
          </HStack>
        </Flex>

        {/* Mobile navigation */}
        <Drawer.Root
          size={"sm"}
          open={isOpen}
          onOpenChange={(e) => setOpen(e.open)}
        >
          <Drawer.Trigger asChild>
            <Button p={4} variant="outline" size="sm" display={{ md: "none" }}>
              Menu
            </Button>
          </Drawer.Trigger>
          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner padding={4}>
              <Drawer.Content rounded="md">
                <Drawer.Body p={6}>
                  <Stack gap={6}>
                    {navItems.map((item, i) => (
                      <Box key={i}>
                        {item.items ? (
                          <Box>
                            <Text fontWeight="medium" mb={4}>
                              {item.title}
                            </Text>
                            <VStack
                              align="start"
                              pl={4}
                              borderLeft="1px"
                              gap={4}
                            >
                              {item.items.map((subItem: any, j) => (
                                <Link key={j} href={subItem.href} fontSize="sm">
                                  {subItem.name}
                                </Link>
                              ))}
                            </VStack>
                          </Box>
                        ) : (
                          <Link href={item.href || "#"} fontWeight="medium">
                            {item.title}
                          </Link>
                        )}
                      </Box>
                    ))}
                  </Stack>
                </Drawer.Body>
                <Drawer.CloseTrigger asChild>
                  <CloseButton size="sm" />
                </Drawer.CloseTrigger>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>
      </Container>
    </Box>
  );
}
