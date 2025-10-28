/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Typography from "@tiptap/extension-typography";
import { useEffect, useMemo } from "react";
import { MenuBar } from "./MenuBar";

interface NewsDescriptionEditorProps {
  field: any;
}

function isJson(str: string): boolean {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
}

export default function NewsDescriptionEditor({
  field,
}: NewsDescriptionEditorProps) {
  // Compute initial content based on whether field.value is valid JSON
  const initialContent = useMemo(() => {
    if (field.value && isJson(field.value)) {
      return JSON.parse(field.value);
    }
    // If not JSON, show plain text
    return {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [{ type: "text", text: field.value || "" }],
        },
      ],
    };
  }, [field.value]);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Heading.configure({ levels: [1, 2, 3] }),
      Link.configure({ openOnClick: false }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "center", "right", "justify"],
      }),
      Typography,
    ],
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-xl focus:outline-none min-h-[300px] p-4 max-w-none dark:prose-invert",
      },
    },
    content: initialContent,
    onUpdate: ({ editor }) => {
      field.onChange(JSON.stringify(editor.getJSON()));
    },
    immediatelyRender: false,
  });

  // Sync editor content if field.value changes externally
  useEffect(() => {
    if (!editor) return;

    const currentJson = JSON.stringify(editor.getJSON());
    const newJson = JSON.stringify(initialContent);

    if (currentJson !== newJson) {
      editor.commands.setContent(initialContent);
    }
  }, [editor, initialContent]);

  return (
    <div className="w-full">
      <div className="border rounded-lg overflow-hidden bg-card">
        <MenuBar editor={editor} />
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
