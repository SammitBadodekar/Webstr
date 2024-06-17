'use client'

import { useEditor, EditorContent, Extension, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from './toolbar';
import nodeButton from '@/components/nodes/nodeButton';
import { slashCommand } from '@/components/tiptap/slash-command';
import Placeholder from '@tiptap/extension-placeholder'
import Table from "@tiptap/extension-table"
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import { ColumnExtension } from "@gocapsule/column-extension";
import { useEffect, useState } from 'react';
import { SideBar } from './sidebar';
import MobileMenu from './mobile-menu';
import { Toggle } from '@/components/ui/toggle';
import { Bold, Italic, Strikethrough } from 'lucide-react';
import { Cell } from '@/components/nodes';

const Tiptap = () => {
    const [isEditorMounted, setIsEditorMounted] = useState(false)
    const [range, setRange] = useState<any>()

    const editor = useEditor({
        extensions: [
            StarterKit,
            ColumnExtension,
            nodeButton,
            slashCommand,
            Placeholder.configure({
                placeholder: `Press "/" for commands`,
            }),
            Table.configure({
                resizable: true,
                HTMLAttributes: {
                    class: 'w-full',
                },
            }),
            TableRow,
            TableHeader,
            Cell
        ],
        editorProps: {
            attributes: {
                class:
                    "w-full h-[calc(100dvh_-_3.5rem)] md:h-[100dvh] border-2 rounded shadow-inner p-4 overflow-y-scroll leading-[3rem]",
            },
        },
        content: ``,
        onUpdate: ({ editor }) => {
            console.log(editor.getJSON());
        },
    });
    return (
        <div className='flex flex-col'>
            <MobileMenu editor={editor} />
            <div className="flex w-[100vw] bg-primary-foreground">
                {/* <Toolbar editor={editor!} /> */}
                <SideBar editor={editor} />
                <div className="w-full">
                    <EditorContent editor={editor} />
                    {/* <BubbleMenu
                        editor={editor}
                        tippyOptions={{ duration: 100, trigger: "click" }}
                        className='bg-popover p-2 rounded-md'
                    >
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
                            pressed={editor?.isActive("strike")}
                            onPressedChange={() => { editor?.commands?.deleteSelection() }}
                        >
                            delete
                        </Toggle>

                    </BubbleMenu> */}
                </div>
            </div></div>

    );
}

export default Tiptap