import { LegalHtmlPage, buildLegalMetadata } from "@/lib/legal-page";

export const metadata = buildLegalMetadata(
  "Likewise — Privacy Policy",
  "Privacy Policy for Likewise.",
);

export default function LikewisePrivacyPolicyPage() {
  return <LegalHtmlPage filename="likewise/privacy-policy.html" />;
}
