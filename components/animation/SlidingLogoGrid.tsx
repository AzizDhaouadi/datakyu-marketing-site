import Image from "next/image";
import { Flex, Box } from "@chakra-ui/react";

type SlidingLogoGridProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export default function SlidingLogoGrid({
  logoStack,
}: {
  logoStack: SlidingLogoGridProps[];
}) {
  return (
    <Flex direction={"row"} gap={10} wrap={"wrap"} mt={"3rem"} justifyContent={"space-evenly"} alignItems={"center"}>
      {logoStack.map((logo, index) => (
        <Box key={index} position="relative">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            unoptimized
            style={{
              objectFit: "contain",
              animation: "slide 0.5s ease-in-out",
              transition: "transform 0.2s",
            }}
          />
        </Box>
      ))}
    </Flex>
  );
}
