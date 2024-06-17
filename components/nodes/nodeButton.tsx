import { NodeViewWrapper, NodeViewContent, Editor } from '@tiptap/react'
import { mergeAttributes, Node, NodePos } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'
import React from 'react'
import { Button } from '../ui/button'
import { RxDragHandleDots2 } from "react-icons/rx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export const nodeButton = (props: any) => {
    const attributes = props?.node?.attrs
    return (
        <NodeViewWrapper className="node-button">
            <div className="content flex">
                {/* <div
                    contentEditable={false}
                    data-drag-handle=""
                    className='flex justify-center items-center px-2'
                >
                    <RxDragHandleDots2 />
                </div> */}
                <Button className={`w-${attributes?.width} p-0`} variant={attributes?.variant} size={attributes?.size}>
                    <NodeViewContent className={`content ${attributes?.size === "sm" ? "px-3" : attributes?.size === "lg" ? "px-8" : "px-4"} w-${attributes?.width}`} />
                </Button>
            </div>
        </NodeViewWrapper>
    )
}

export default Node.create({
    name: 'nodeButton',

    group: 'block',

    content: 'inline*',

    draggable: true,

    addAttributes() {
        return {
            id: {
                default: Math.floor(Math.random() * 10)
            },
            variant: {
                default: "default"
            },
            size: {
                default: "default",
            },
            width: {
                default: "fit"
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
        return ['node-button', mergeAttributes(HTMLAttributes, { 'data-type': 'draggable-item' }), 0]
    },

    addNodeView() {
        return ReactNodeViewRenderer(nodeButton);
    },
})

export const NodeButtonEditor = ({ editor }: { editor: Editor }) => {
    const setSize = (size: string) => {
        editor?.commands?.updateAttributes("nodeButton", { size })
    }
    const setWidth = (width: string) => {
        editor?.commands?.updateAttributes("nodeButton", { width })
    }
    const setVariant = (variant: string) => {
        editor?.commands?.updateAttributes("nodeButton", { variant })
    }

    return (
        <div className="grid gap-4 pt-8">
            <div>
                <p className='text-sm font-medium'>Size</p>
                <Tabs
                    defaultValue={editor.getAttributes("nodeButton")?.size}
                    className="w-full px-4"
                >
                    <TabsList className="w-full">
                        <TabsTrigger
                            value="sm"
                            className="w-full"
                            onClick={() => setSize("sm")}
                        >
                            Small
                        </TabsTrigger>
                        <TabsTrigger
                            value="default"
                            className="w-full"
                            onClick={() => setSize("default")}
                        >
                            Medium
                        </TabsTrigger>
                        <TabsTrigger
                            value="lg"
                            className="w-full"
                            onClick={() => setSize("lg")}
                        >
                            Large
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>
            <div>
                <p className='text-sm font-medium'>Width</p>
                <Tabs
                    defaultValue={editor.getAttributes("nodeButton")?.width}
                    className="w-full px-4"
                >
                    <TabsList className="w-full">
                        <TabsTrigger
                            value="fit"
                            className="w-full"
                            onClick={() => setWidth("fit")}
                        >
                            Fit
                        </TabsTrigger>
                        <TabsTrigger
                            value="full"
                            className="w-full"
                            onClick={() => setWidth("full")}
                        >
                            Full
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>
            <div>
                <p className='text-sm font-medium'>Variant</p>
                <Tabs
                    defaultValue={editor.getAttributes("nodeButton")?.variant}
                    className="w-full px-4"
                >
                    <TabsList className="w-full">
                        <TabsTrigger
                            value="default"
                            className="w-full"
                            onClick={() => setVariant("default")}
                        >
                            Primary
                        </TabsTrigger>
                        <TabsTrigger
                            value="outline"
                            className="w-full"
                            onClick={() => setVariant("outline")}
                        >
                            Secondary
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>
            <Button variant="destructive" onClick={() => { editor.commands.deleteNode("nodeButton") }}>Delete</Button>
        </div>
    );
}