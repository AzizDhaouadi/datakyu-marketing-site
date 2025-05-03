import React from "react";
import { Button } from "@chakra-ui/react";

export default function CallToActionButton({ text, toCenter }: { text: string, toCenter?: boolean }) {
    return (
        <Button
            style={{
                backgroundColor: "#9B7FC8",
                color: "white",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
            }}
            mx={toCenter ? "auto" : undefined}
            display={toCenter ? "block" : undefined}
        >
            {text}
        </Button>
    );
}