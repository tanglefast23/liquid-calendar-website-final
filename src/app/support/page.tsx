import { LegalHtmlPage, buildLegalMetadata } from "@/lib/legal-page";

export const metadata = buildLegalMetadata(
  "Liquid Calendar — Support",
  "Support information for Liquid Calendar.",
);

export default function SupportPage() {
  return <LegalHtmlPage filename="support.html" />;
}
