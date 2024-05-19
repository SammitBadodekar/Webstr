import { Editor } from '@tiptap/react'
import { Bold, Heading1, Heading2, Heading3, Italic, List, ListOrdered, Strikethrough } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"
import React from 'react'

const Toolbar = ({ editor }: { editor: Editor }) => {
    return (
        <div className="flex items-center gap-2 p-4 mx-auto w-fit h-full rounded-md">
            <Toggle
                aria-label="Toggle heading 1"
                pressed={
                    editor?.getAttributes("heading").level === 1
                }
                onPressedChange={() =>
                    editor?.chain()?.focus()?.toggleHeading({ level: 1 }).run()
                }
            >
                <Heading1 className="h-4 w-4" />
            </Toggle>
            <Toggle
                aria-label="Toggle heading 2"
                pressed={
                    editor?.getAttributes("heading").level === 2
                }
                onPressedChange={() =>
                    editor?.chain()?.focus()?.toggleHeading({ level: 2 }).run()
                }
            >
                <Heading2 className="h-4 w-4" />
            </Toggle>
            <Toggle
                aria-label="Toggle heading 2"
                pressed={
                    editor?.getAttributes("heading").level === 3
                }
                onPressedChange={() =>
                    editor?.chain()?.focus()?.toggleHeading({ level: 3 }).run()
                }
            >
                <Heading3 className="h-4 w-4" />
            </Toggle>
            <Toggle
                aria-label="Toggle bold"
                pressed={editor?.isActive("bold")}
                onPressedChange={() => editor?.chain()?.focus()?.toggleBold().run()}
            >
                <Bold className="h-4 w-4" />
            </Toggle>
            <Toggle
                aria-label="Toggle italic"
                pressed={editor?.isActive("italic")}
                onPressedChange={() => editor?.chain()?.focus()?.toggleItalic().run()}
            >
                <Italic className="h-4 w-4" />
            </Toggle>
            <Toggle
                aria-label="Toggle italic"
                pressed={editor?.isActive("strike")}
                onPressedChange={() => editor?.chain()?.focus()?.toggleStrike().run()}
            >
                <Strikethrough className="h-4 w-4" />
            </Toggle>
            <Toggle
                aria-label="Toggle italic"
                pressed={editor?.isActive("bulletList")}
                onPressedChange={() => editor?.chain()?.focus()?.toggleBulletList().run()}
            >
                <List className="h-4 w-4" />
            </Toggle>
            <Toggle
                aria-label="Toggle italic"
                pressed={editor?.isActive("orderedList")}
                onPressedChange={() => editor?.chain()?.focus()?.toggleOrderedList().run()}
            >
                <ListOrdered className="h-4 w-4" />
            </Toggle>
        </div>
    );
}

export default Toolbar