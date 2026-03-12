import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";

export function buildLegalMetadata(title: string, description: string): Metadata {
  return { title, description };
}

export function readLegalHtml(filename: string) {
  const sourcePath = path.join(process.cwd(), "public", filename);
  const html = fs.readFileSync(sourcePath, "utf8");

  const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/i);
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);

  return {
    styles: styleMatch?.[1] ?? "",
    body: bodyMatch?.[1] ?? html,
  };
}

export function LegalHtmlPage({ filename }: { filename: string }) {
  const { styles, body } = readLegalHtml(filename);

  return (
    <>
      {styles ? <style dangerouslySetInnerHTML={{ __html: styles }} /> : null}
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </>
  );
}
