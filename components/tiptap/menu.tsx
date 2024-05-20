"use client"
import { Editor } from '@tiptap/core'
import { useState, useEffect } from 'react'
import { SuggestionItem } from './slash-command'
import debounce from "lodash.debounce"

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
    const [searchItems, setSearchItems] = useState<SuggestionItem[]>(items)

    useEffect(() => {
        const updateItems = debounce(() => {
            if (query) {
                setSearchItems(
                    items.filter(
                        (item) =>
                            item?.searchTerms?.filter((search) => search?.includes(query))
                                .length !== 0,
                    ),
                );
            } else {
                setSearchItems(items);
            }
        }, 200);

        updateItems()
    }, [query])

    return (
        <ul className="p-2 rounded-md bg-popover h-80 w-max overflow-y-scroll">
            {searchItems?.map((item, index) => {
                return <MenuItem key={index} item={item} editor={editor} range={range} />;
            })}
        </ul>
    );
}

export default Menu

const MenuItem = ({ item, editor, range }: MenuItem) => {
    return (
        <button
            className="flex items-center gap-4 p-2 hover:bg-primary-foreground w-full rounded-md"
            onClick={() => {
                if (editor && range) {
                    // @ts-ignore
                    item.command({ editor, range } as any);
                }
            }}
        >
            <div className="rounded-md bg-primary-foreground p-2 border-[0.1rem]">{item?.icon}</div>
            <div className="grid gap-1 text-left">
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm opacity-75">{item.description}</p>
            </div>
        </button>
    );
}