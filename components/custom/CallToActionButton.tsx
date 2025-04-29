import React from "react";

export default function CallToActionButton({ text }: { text: string }) {
    return (
        <button
            style={{
                backgroundColor: "#2B6CB0",
                color: "white",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
            }}
        >
            {text}
        </button>
    );
}