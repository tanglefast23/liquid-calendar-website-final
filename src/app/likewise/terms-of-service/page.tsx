import { LegalHtmlPage, buildLegalMetadata } from "@/lib/legal-page";

export const metadata = buildLegalMetadata(
  "Likewise — Terms of Service",
  "Terms of Service for Likewise.",
);

export default function LikewiseTermsOfServicePage() {
  return <LegalHtmlPage filename="likewise/terms-of-service.html" />;
}
