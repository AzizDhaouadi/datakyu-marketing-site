"use client";
import { useEffect } from "react";
import React from "react";
import { Box, SkeletonText } from "@chakra-ui/react";
import Typed from "typed.js";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

type TypedCodeSectionProps = {
  codeToType: any;
  smartBackspace?: boolean;
};

export default function TypedCodeSection({
  codeToType,
  smartBackspace,
}: TypedCodeSectionProps) {
  const el = React.useRef(null);

  const highlightedCodeToType = Prism.highlight(
    codeToType,
    Prism.languages.javascript,
    "javascript"
  );

  let highlightedCodes: any = [];

  if (Array.isArray(codeToType)) {
    highlightedCodes = codeToType.map((code) =>
      Prism.highlight(code, Prism.languages.javascript, "javascript")
    );
  }

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: !smartBackspace ? [highlightedCodeToType] : highlightedCodes,
      typeSpeed: 50,
      showCursor: false,
      contentType: "html",
      smartBackspace: smartBackspace,
      loop: smartBackspace ? true : false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <Box ref={el} p={4} borderRadius="md">
      <SkeletonText noOfLines={1} gap="4" />
    </Box>
  );
}
