import { LegalHtmlPage, buildLegalMetadata } from "@/lib/legal-page";

export const metadata = buildLegalMetadata(
  "Likewise — Support",
  "Support for Likewise.",
);

export default function LikewiseSupportPage() {
  return <LegalHtmlPage filename="likewise/support.html" />;
}
