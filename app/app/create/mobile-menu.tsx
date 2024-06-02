import { NodeButtonEditor } from '@/components/nodes';
import { Button } from '@/components/ui/button';
import { Editor } from '@tiptap/react';
import Link from 'next/link';
import React from 'react'
import { FaLocationArrow } from 'react-icons/fa';
import { IoMdHome } from 'react-icons/io';
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { IoIosArrowUp } from "react-icons/io";

const MobileMenu = ({ editor }: { editor: Editor | null }) => {
    return (
        <div className="md:hidden">
            <div className="flex w-full items-center gap-8 p-2">
                <Link
                    href="/"
                    className="rounded-md bg-lightTheme p-2 transition-opacity hover:opacity-75"
                >
                    <IoMdHome className="text-2xl text-darkGray" />
                </Link>
                <Drawer>
                    <DrawerTrigger className='flex gap-2 items-center'>
                        <IoIosArrowUp /> <p>Options</p>
                    </DrawerTrigger>
                    <DrawerContent className="p-4">
                        <div>
                            {editor?.isActive("nodeButton") && (
                                <NodeButtonEditor editor={editor} />
                            )}
                        </div>
                    </DrawerContent>
                </Drawer>
                <Button className="ml-auto flex items-center gap-4 bg-[#eb761c] text-white">
                    <FaLocationArrow /> Publish
                </Button>
            </div>
        </div>
    );
}

export default MobileMenu