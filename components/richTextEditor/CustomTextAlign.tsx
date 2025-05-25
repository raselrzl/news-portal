import TextAlign from "@tiptap/extension-text-align";

const CustomTextAlign = TextAlign.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      types: ["heading", "paragraph"],
      alignments: ["left", "center", "right", "justify"],
    };
  },
});
