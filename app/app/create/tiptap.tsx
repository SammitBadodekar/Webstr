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

const Tiptap = () => {
    const [isEditorMounted, setIsEditorMounted] = useState(false)

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
            }),
            TableRow,
            TableHeader,
            TableCell,
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
                    >
                        <button
                            onClick={() => editor?.chain().focus().toggleBold().run()}
                            className={editor?.isActive("bold") ? "is-active" : ""}
                        >
                            bold
                        </button>
                        <button
                            onClick={() => editor?.chain().focus().toggleItalic().run()}
                            className={editor?.isActive("italic") ? "is-active" : ""}
                        >
                            italic
                        </button>
                        <button
                            onClick={() => editor?.chain().focus().toggleStrike().run()}
                            className={editor?.isActive("strike") ? "is-active" : ""}
                        >
                            strike
                        </button>
                    </BubbleMenu> */}
                </div>
            </div></div>

    );
}

export default Tiptap