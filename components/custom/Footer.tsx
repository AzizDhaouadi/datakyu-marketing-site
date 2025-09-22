import { Box, Flex, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer" py={8} px={6}>
      <Flex direction="row" align="center" gap={4}>
        {/* Copyright */}
        <Text fontSize="sm" color="gray.600">
          © {new Date().getFullYear()} Datakyu. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
}
