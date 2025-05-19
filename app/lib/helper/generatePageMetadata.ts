// lib/getPageMetadata.ts
import { Metadata } from "next";
import { seoMetaDataMap } from "../metaDataMap";

export function getPageMetadata(path: keyof typeof seoMetaDataMap): Metadata {
    const meta = seoMetaDataMap[path];
    return {
        title: meta.title,
        description: meta.description,
        alternates: {
            canonical: meta.canonical,
        },
    };
}


