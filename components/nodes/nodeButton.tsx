import { NodeViewWrapper, NodeViewContent } from '@tiptap/react'
import { mergeAttributes, Node } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'
import React from 'react'
import { Button } from '../ui/button'

export const nodeButton = (props: any) => {
    return (
        <NodeViewWrapper className="node-button">
            <div className="content">
                <Button /* onClick={increase} */ className='h-full'>
                    <NodeViewContent className="content" />
                </Button>
            </div>
        </NodeViewWrapper>
    )
}

export default Node.create({
    name: 'nodeButton',

    group: 'block',

    content: 'inline*',

    addAttributes() {
        return {
            count: {
                default: 0,
            },
            id: {
                default: Math.floor(Math.random() * 10)
            }
        }
    },

    parseHTML() {
        return [
            {
                tag: 'node-button',
            },
        ]
    },

    renderHTML({ HTMLAttributes }) {
        return ['node-button', mergeAttributes(HTMLAttributes), 0]
    },

    addNodeView() {
        return ReactNodeViewRenderer(nodeButton);
    },
})