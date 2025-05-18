"use client";
import { useEffect, useMemo } from "react";
import React from "react";
import { Box, SkeletonText } from "@chakra-ui/react";
import Typed from "typed.js";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

type TypedCodeSectionProps = {
  codeToType: string | string[];
  smartBackspace?: boolean;
  className?: string;
  isHeader?: boolean;
  isGen?: boolean;
};

export default function TypedCodeSection({
  codeToType,
  smartBackspace,
  isHeader,
  isGen,
}: TypedCodeSectionProps) {
  const el = React.useRef(null);

  // let highlightedCodeToType = "";

  // if (typeof codeToType == "string") {
  //   highlightedCodeToType = Prism.highlight(
  //     codeToType,
  //     Prism.languages.javascript,
  //     "javascript"
  //   );
  // }

  const highlightedCodeToType = useMemo(() => {
    if (typeof codeToType === "string") {
      return Prism.highlight(
        codeToType,
        Prism.languages.javascript,
        "javascript"
      );
    }
    return "";
  }, [codeToType]);

  // let highlightedCodes: string[] = [];

  // if (Array.isArray(codeToType)) {
  //   highlightedCodes = codeToType.map((code: string) =>
  //     Prism.highlight(code, Prism.languages.javascript, "javascript")
  //   );
  // }

  const highlightedCodes = useMemo(() => {
    if (Array.isArray(codeToType)) {
      return codeToType.map((code) =>
        Prism.highlight(code, Prism.languages.javascript, "javascript")
      );
    }
    return [];
  }, [codeToType]);

  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: !smartBackspace ? [highlightedCodeToType] : highlightedCodes,
  //     typeSpeed: 50,
  //     showCursor: false,
  //     contentType: "html",
  //     smartBackspace: smartBackspace,
  //     loop: smartBackspace ? true : false,
  //   });

  //   return () => {
  //     // Destroy Typed instance during cleanup to stop animation
  //     typed.destroy();
  //   };
  // }, [highlightedCodeToType, highlightedCodes]);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: !smartBackspace ? [highlightedCodeToType] : highlightedCodes,
      typeSpeed: 50,
      showCursor: false,
      contentType: "html",
      smartBackspace: smartBackspace,
      loop: smartBackspace ? true : false,
    });

    return () => typed.destroy();
  }, [highlightedCodeToType, highlightedCodes, smartBackspace]);

  return (
    <Box ref={el} p={isHeader ? 0 : 4} pl={isHeader ? 2 : 0} borderRadius="md">
      {isGen ? <></> : <SkeletonText noOfLines={1} gap="4" />}
    </Box>
  );
}
