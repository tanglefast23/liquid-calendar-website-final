import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liquid Calendar — Privacy Policy",
  description: "Privacy Policy for Liquid Calendar.",
};

function readPrivacyPolicyHtml() {
  const sourcePath = path.join(process.cwd(), "public", "privacy-policy.html");
  const html = fs.readFileSync(sourcePath, "utf8");

  const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/i);
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);

  return {
    styles: styleMatch?.[1] ?? "",
    body: bodyMatch?.[1] ?? html,
  };
}

export default function PrivacyPolicyPage() {
  const { styles, body } = readPrivacyPolicyHtml();

  return (
    <>
      {styles ? <style dangerouslySetInnerHTML={{ __html: styles }} /> : null}
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </>
  );
}
