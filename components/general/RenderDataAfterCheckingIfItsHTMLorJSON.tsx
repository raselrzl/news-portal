import { JsonToHtml } from "../richTextEditor/JsonToHtml";

function isJson(str: string) {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
}

function isHtml(str: string) {
  return /<\/?[a-z][\s\S]*>/i.test(str);
}

export function RenderDataAfterCheckingIfItsHTMLorJSON({ content }: { content: string }) {
  if (!content) return null;

  if (isJson(content)) {
    const json = JSON.parse(content);
    return <JsonToHtml json={json} />;
  }

  if (isHtml(content)) {
    return <p dangerouslySetInnerHTML={{ __html: content }} />;
  }

  return <p style={{ whiteSpace: "pre-line" }}>{content}</p>;
}
