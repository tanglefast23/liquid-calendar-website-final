import { LegalHtmlPage, buildLegalMetadata } from "@/lib/legal-page";

export const metadata = buildLegalMetadata(
  "Liquid Calendar — Privacy Policy",
  "Privacy Policy for Liquid Calendar.",
);

export default function PrivacyPolicyPage() {
  return <LegalHtmlPage filename="privacy-policy.html" />;
}
