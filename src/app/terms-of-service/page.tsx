import { LegalHtmlPage, buildLegalMetadata } from "@/lib/legal-page";

export const metadata = buildLegalMetadata(
  "Liquid Calendar — Terms of Service",
  "Terms of Service for Liquid Calendar.",
);

export default function TermsOfServicePage() {
  return <LegalHtmlPage filename="terms-of-service.html" />;
}
