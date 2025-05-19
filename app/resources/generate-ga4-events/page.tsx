// ⚛️ Dynamic SEO metadata generation
import { getPageMetadata } from "@/app/lib/helper/generatePageMetadata";

import GenerateGA4Events from "./EventGenerator";

export async function generateMetadata() {
  return getPageMetadata("/resources/generate-ga4-events");
}

export default function Page() {
  return <GenerateGA4Events />;
}
