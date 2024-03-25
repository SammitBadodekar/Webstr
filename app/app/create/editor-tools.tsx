"use client";
// @ts-ignore
import CheckList from "@editorjs/checklist";
// @ts-ignore
import Code from "@editorjs/code";
// @ts-ignore
import Delimiter from "@editorjs/delimiter";
// @ts-ignore
import Embed from "@editorjs/embed";
// @ts-ignore
import Image from "@editorjs/image";
// @ts-ignore
import InlineCode from "@editorjs/inline-code";
// @ts-ignore
import Link from "@editorjs/link";
// @ts-ignore
import List from "@editorjs/list";
// @ts-ignore
import Quote from "@editorjs/quote";
// @ts-ignore
import SimpleImage from "@editorjs/simple-image";
// @ts-ignore
import Paragraph from "@editorjs/paragraph";
// @ts-ignore
import Header from "@editorjs/header";
// @ts-ignore
import { ToolSettings } from "@editorjs/editorjs";

interface HeaderConfig {
  placeholder: string;
  levels: number[];
  defaultLevel: number;
}

export const EDITOR_TOOLS: Record<
  string,
  ToolSettings | { class: typeof Header; config: HeaderConfig }
> = {
  code: Code,
  header: {
    class: Header,
    config: {
      placeholder: "Enter a Header",
      levels: [2, 3, 4],
      defaultLevel: 2,
    },
  },
  paragraph: Paragraph,
  checklist: CheckList,
  embed: Embed,
  image: Image,
  inlineCode: InlineCode,
  link: Link,
  list: List,
  quote: Quote,
  simpleImage: SimpleImage,
  delimiter: Delimiter,
};
