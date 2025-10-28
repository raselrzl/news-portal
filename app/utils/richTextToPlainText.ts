// utils/richTextToPlainText.ts

export function richTextToPlainText(json: any): string {
  let text = "";

  function extractText(node: any) {
    if (!node) return;

    if (node.type === "text" && node.text) {
      text += node.text + " ";
    }

    if (node.content && Array.isArray(node.content)) {
      node.content.forEach(extractText);
    }
  }

  extractText(json);
  return text.trim();
}
