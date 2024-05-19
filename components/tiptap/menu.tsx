import { Editor } from '@tiptap/core'
import React from 'react'
import { SuggestionItem } from './slash-command'

interface MenuProps {
    editor: Editor,
    items: SuggestionItem[]
    readonly query: string;
    readonly range: Range;
}

interface MenuItem {
    item: SuggestionItem,
    editor: Editor,
    range: any;
}

const Menu = (props: MenuProps) => {
    const { items, editor, range, query } = props
    return (
        <ul className="p-2 rounded-md bg-primary-foreground h-80 overflow-y-scroll">
            {items?.map((item, index) => {
                return <MenuItem key={index} item={item} editor={editor} range={range} />;
            })}
        </ul>
    );
}

export default Menu

const MenuItem = ({ item, editor, range }: MenuItem) => {
    return (
        <button className="flex items-center gap-4 p-2" onClick={() => {
            if (editor && range) {
                // @ts-ignore
                item.command({ editor, range } as any)
            }
        }}>
            <div className='p-4 bg-popover rounded-md'>{item?.icon}</div>
            <div className='grid gap-1 text-left'>
                <p className='font-semibold'>{item.title}</p>
                <p className='text-sm opacity-75'>{item.description}</p>
            </div>
        </button>
    );
}