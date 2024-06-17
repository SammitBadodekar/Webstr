import TableCell from '@tiptap/extension-table-cell'
import { Editor } from '@tiptap/react';
import { Button } from '../ui/button';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MdOutlineFormatAlignCenter, MdOutlineFormatAlignLeft, MdOutlineFormatAlignRight } from "react-icons/md";
import { StretchHorizontal, StretchVertical } from 'lucide-react';

export const Cell = TableCell.extend({
    addAttributes() {
        return {
            justify: {
                default: ""
            },
            orientation: {
                default: "flex-col"
            },
            class: {
                default: "p-4 w-full flex gap-8",
                renderHTML: (attributes) => {
                    return {
                        class: `${attributes.class} ${attributes.justify} ${attributes.orientation}`,
                    };
                },
            },
        };
    },
})

export const CellEditor = ({ editor }: { editor: Editor }) => {

    const setJustify = (position: string) => {
        editor.commands.updateAttributes("tableCell", {
            justify: position
        });
    }
    const setOrientation = (orientation: string) => {
        editor.commands.updateAttributes("tableCell", {
            orientation
        });
    }

    const isOrientationRow = editor.getAttributes("tableCell")?.orientation === "flex-row"
    return (
        <div className="grid gap-4 pt-8">
            <div>
                <p className='text-sm font-medium'>Align</p>
                <Tabs
                    defaultValue={editor.getAttributes("tableCell")?.justify}
                    className="w-full px-4"
                >
                    <TabsList className="w-full">
                        <TabsTrigger
                            value={isOrientationRow ? "justify-start" : "items-start"}
                            className="w-full"
                            onClick={() => setJustify(isOrientationRow ? "justify-start" : "items-start")}
                        >
                            <MdOutlineFormatAlignLeft size={18} />
                        </TabsTrigger>
                        <TabsTrigger
                            value={isOrientationRow ? "justify-center" : "items-center"}
                            className="w-full"
                            onClick={() => setJustify(isOrientationRow ? "justify-center" : "items-center")}
                        >
                            <MdOutlineFormatAlignCenter size={18} />
                        </TabsTrigger>
                        <TabsTrigger
                            value={isOrientationRow ? "justify-end" : "items-end"}
                            className="w-full"
                            onClick={() => setJustify(isOrientationRow ? "justify-end" : "items-end")}
                        >
                            <MdOutlineFormatAlignRight size={18} />
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>
            <div>
                <p className='text-sm font-medium'>Orientation</p>
                <Tabs
                    defaultValue={editor.getAttributes("tableCell")?.orientation}
                    className="w-full px-4"
                >
                    <TabsList className="w-full">
                        <TabsTrigger
                            value="flex-row"
                            className="w-full"
                            onClick={() => setOrientation("flex-row")}
                        >
                            Row
                            {/* <StretchVertical size={18} /> */}
                        </TabsTrigger>
                        <TabsTrigger
                            value="flex-col"
                            className="w-full"
                            onClick={() => setOrientation("flex-col")}
                        >
                            Column
                            {/* <StretchHorizontal size={18} /> */}
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>
            <Button variant="destructive" onClick={() => { editor.commands.deleteNode("tableCell") }}>Delete</Button>
        </div>
    );
}