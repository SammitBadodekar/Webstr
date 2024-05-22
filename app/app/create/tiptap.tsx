'use client'

import { useEditor, EditorContent, Extension } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from './toolbar';
import nodeButton from '@/components/nodes/nodeButton';
import { slashCommand } from '@/components/tiptap/slash-command';
import Placeholder from '@tiptap/extension-placeholder'
import { ColumnExtension } from "@gocapsule/column-extension";

const Tiptap = () => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            ColumnExtension,
            nodeButton,
            slashCommand,
            Placeholder.configure({
                placeholder: `Press "/" for commands`,
            }),
        ],
        editorProps: {
            attributes: {
                class:
                    "w-full h-[100dvh] border-2 rounded shadow-inner p-4 overflow-y-scroll leading-[3rem]",
            },
        },
        content: ``,
        onUpdate: ({ editor }) => {
            // console.log(editor.getJSON());
        },
    });

    return (
        <div className="bg-primary-foreground w-full">
            {/* <Toolbar editor={editor!} /> */}
            <EditorContent editor={editor} />
        </div>
    );
}

export default Tiptap