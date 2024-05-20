'use client'

import { useEditor, EditorContent, Extension } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from './toolbar';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import axios from 'axios';
import nodeButton from '@/components/nodes/nodeButton';
import Suggestion, { type SuggestionOptions } from "@tiptap/suggestion";
import { slashCommand } from '@/components/tiptap/slash-command';
import Placeholder from '@tiptap/extension-placeholder'

const Tiptap = () => {
    const editor = useEditor({
        extensions: [
            StarterKit,
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
