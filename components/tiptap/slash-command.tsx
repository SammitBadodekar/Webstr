import { Extension } from "@tiptap/core";
import type { Editor, Range } from "@tiptap/core";
import { ReactRenderer } from "@tiptap/react";
import Suggestion, { type SuggestionOptions } from "@tiptap/suggestion";
import { Component, type ReactNode } from "react";
import tippy, { type GetReferenceClientRect, type Instance, type Props } from "tippy.js";
import Menu from "./menu";
import {
    CheckSquare,
    Code,
    Heading1,
    Heading2,
    Heading3,
    ImageIcon,
    List,
    ListOrdered,
    MessageSquarePlus,
    Text,
    TextQuote,
    Youtube,
    DiamondIcon
} from "lucide-react";


const Command = Extension.create({
    name: "slash-command",
    addOptions() {
        return {
            suggestion: {
                char: "/",
                command: ({ editor, range, props }) => {
                    props.command({ editor, range });
                },
            } as SuggestionOptions,
        };
    },
    addProseMirrorPlugins() {
        return [
            Suggestion({
                editor: this.editor,
                ...this.options.suggestion,
            }),
        ];
    },
});

const renderItems = () => {
    let component: ReactRenderer | null = null;
    let popup: Instance<Props>[] | null = null;

    return {
        onStart: (props: { editor: Editor; clientRect: DOMRect }) => {
            component = new ReactRenderer(Menu, {
                props,
                editor: props.editor,
            });

            const { selection } = props.editor.state;

            const parentNode = selection.$from.node(selection.$from.depth);
            const blockType = parentNode.type.name;

            if (blockType === "codeBlock") {
                return false;
            }

            // @ts-ignore
            popup = tippy("body", {
                getReferenceClientRect: props.clientRect,
                appendTo: () => document.body,
                content: component.element,
                showOnCreate: true,
                interactive: true,
                trigger: "manual",
                placement: "bottom-start",
            });
        },
        onUpdate: (props: { editor: Editor; clientRect: GetReferenceClientRect }) => {
            component?.updateProps(props);

            popup?.[0]?.setProps({
                getReferenceClientRect: props.clientRect,
            });
        },

        onKeyDown: (props: { event: KeyboardEvent }) => {
            if (props.event.key === "Escape") {
                popup?.[0]?.hide();

                return true;
            }

            // @ts-ignore
            return component?.ref?.onKeyDown(props);
        },
        onExit: () => {
            popup?.[0]?.destroy();
            component?.destroy();
        },
    };
};

export interface SuggestionItem {
    title: string;
    description: string;
    icon: ReactNode;
    searchTerms?: string[];
    command?: (props: { editor: Editor; range: Range }) => void;
}

export const createSuggestionItems = (items: SuggestionItem[]) => items;

export const handleCommandNavigation = (event: KeyboardEvent) => {
    if (["ArrowUp", "ArrowDown", "Enter"].includes(event.key)) {
        const slashCommand = document.querySelector("#slash-command");
        if (slashCommand) {
            return true;
        }
    }
};

export { Command, renderItems };

export const suggestionItems = createSuggestionItems([
    // {
    //     title: "Send Feedback",
    //     description: "Let us know how we can improve.",
    //     icon: <MessageSquarePlus size={18} />,
    //     command: ({ editor, range }) => {
    //         editor.chain().focus().deleteRange(range).run();
    //         window.open("/feedback", "_blank");
    //     },
    // },
    {
        title: "Text",
        description: "Just start typing with plain text.",
        searchTerms: ["p", "paragraph"],
        icon: <Text size={18} />,
        command: ({ editor, range }) => {
            editor.chain().focus().deleteRange(range).toggleNode("paragraph", "paragraph").run();
        },
    },
    {
        title: "Button",
        description: "Button",
        searchTerms: ["button", "switch", "box"],
        icon: < DiamondIcon size={18} />,
        command: ({ editor, range }) => {
            editor.chain().focus().deleteRange(range).run();
            // editor.commands.insertContent('<node-button><p>Button</p></node-button>')
            editor.commands.insertContent({
                type: "nodeButton",
                attrs: {
                    count: 0,
                    id: Math.floor(Math.random() * 1000),
                },
                content: [
                    {
                        type: "text",
                        text: "Button ",
                    },
                ],
            });
        },
    },
    {
        title: "Heading 1",
        description: "Big section heading.",
        searchTerms: ["title", "big", "large"],
        icon: <Heading1 size={18} />,
        command: ({ editor, range }) => {
            editor.chain().focus().deleteRange(range).setNode("heading", { level: 1 }).run();
        },
    },
    {
        title: "Heading 2",
        description: "Medium section heading.",
        searchTerms: ["subtitle", "medium"],
        icon: <Heading2 size={18} />,
        command: ({ editor, range }) => {
            editor.chain().focus().deleteRange(range).setNode("heading", { level: 2 }).run();
        },
    },
    {
        title: "Heading 3",
        description: "Small section heading.",
        searchTerms: ["subtitle", "small"],
        icon: <Heading3 size={18} />,
        command: ({ editor, range }) => {
            editor.chain().focus().deleteRange(range).setNode("heading", { level: 3 }).run();
        },
    },
    {
        title: "Bullet List",
        description: "Create a simple bullet list.",
        searchTerms: ["unordered", "point"],
        icon: <List size={18} />,
        command: ({ editor, range }) => {
            editor.chain().focus().deleteRange(range).toggleBulletList().run();
        },
    },
    {
        title: "Numbered List",
        description: "Create a list with numbering.",
        searchTerms: ["ordered"],
        icon: <ListOrdered size={18} />,
        command: ({ editor, range }) => {
            editor.chain().focus().deleteRange(range).toggleOrderedList().run();
        },
    },
    {
        title: "Quote",
        description: "Capture a quote.",
        searchTerms: ["blockquote"],
        icon: <TextQuote size={18} />,
        command: ({ editor, range }) =>
            editor.chain().focus().deleteRange(range).toggleNode("paragraph", "paragraph").toggleBlockquote().run(),
    },
    {
        title: "Code",
        description: "Capture a code snippet.",
        searchTerms: ["codeblock"],
        icon: <Code size={18} />,
        command: ({ editor, range }) => editor.chain().focus().deleteRange(range).toggleCodeBlock().run(),
    },
    // {
    //     title: "Image",
    //     description: "Upload an image from your computer.",
    //     searchTerms: ["photo", "picture", "media"],
    //     icon: <ImageIcon size={18} />,
    //     command: ({ editor, range }) => {
    //         editor.chain().focus().deleteRange(range).run();
    //         // upload image
    //         const input = document.createElement("input");
    //         input.type = "file";
    //         input.accept = "image/*";
    //         input.onchange = async () => {
    //             if (input.files?.length) {
    //                 const file = input.files[0];
    //                 const pos = editor.view.state.selection.from;
    //                 // uploadFn(file, editor.view, pos);
    //             }
    //         };
    //         input.click();
    //     },
    // },
    // {
    //     title: "Youtube",
    //     description: "Embed a Youtube video.",
    //     searchTerms: ["video", "youtube", "embed"],
    //     icon: <Youtube size={18} />,
    //     command: ({ editor, range }) => {
    //         const videoLink = prompt("Please enter Youtube Video Link");
    //         //From https://regexr.com/3dj5t
    //         const ytregex = new RegExp(
    //             /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/,
    //         );

    //         if (ytregex.test(videoLink)) {
    //             editor
    //                 .chain()
    //                 .focus()
    //                 .deleteRange(range)
    //                 .setYoutubeVideo({
    //                     src: videoLink,
    //                 })
    //                 .run();
    //         } else {
    //             if (videoLink !== null) {
    //                 alert("Please enter a correct Youtube Video Link");
    //             }
    //         }
    //     },
    // },
]);

export const slashCommand = Command.configure({
    suggestion: {
        items: () => suggestionItems,
        render: renderItems,
    },
});