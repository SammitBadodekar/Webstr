"use client"
import React, { ReactElement, ReactNode, SetStateAction, useState } from 'react';

import {
  NavigationMenuLink,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuViewport,
} from './ui/vertical-navigation-menu';
import { cn } from '@/lib/utils';
import { useEditor } from '@craftjs/core';
import { Components } from './node/components-map';
import { Button } from './ui/button';
import lz from "lzutf8";
import copy from 'copy-to-clipboard';
import { IoMdHome } from "react-icons/io";
import { RxComponent1 } from "react-icons/rx";
import { FaLocationArrow } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineDone } from "react-icons/md";
import Link from 'next/link';

export interface SideMenuProps {
  componentsMap: Components[];
}

export const SideMenu = ({ componentsMap }: SideMenuProps) => {
  const { connectors, query } = useEditor();
  const { active, related } = useEditor((state, query) => {
    const currentlySelectedNodeId = query.getEvent("selected").first();
    return {
      active: currentlySelectedNodeId,
      related:
        currentlySelectedNodeId && state.nodes[currentlySelectedNodeId].related,
    };
  });
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<string | null>(null)
  const isItemSelected = active && related?.toolbar

  return (
    <aside className="h-[100dvh] w-[28rem] bg-popover p-4">
      {/* <Button onClick={() => {
          const json = query.serialize();
          copy(lz.encodeBase64(lz.compress(json)));
        }}>get json</Button> */}

      {isItemSelected && React.createElement(related.toolbar)}

      {!isItemSelected && !activeSection && (
        <div className="grid gap-8 p-4">
          <div className="flex w-full items-center justify-around gap-8">
            <Link
              href="/"
              className="rounded-md bg-lightTheme p-2 transition-opacity hover:opacity-75"
            >
              <IoMdHome className="text-2xl text-darkGray" />
            </Link>
            <Button className="flex w-full items-center gap-4 bg-[#eb761c] text-white">
              <FaLocationArrow /> Publish
            </Button>
          </div>

          <div className="grid gap-4">
            <SidebarItem
              activeSection={activeSection!}
              title="Components"
              setActiveSection={setActiveSection}
            >
              <RxComponent1 />
            </SidebarItem>
          </div>
        </div>
      )}

      {!isItemSelected && activeSection === "Components" && (
        <div className=''>
          {!activeTab && <BackButton set={setActiveSection} />}
          {componentsMap.map((menuItem, index) => (
            <>
              <div key={index} className="">
                {!activeTab && (
                  <button
                    className="flex w-full justify-between gap-8 items-center rounded-md p-4 my-2 dark:bg-white/5 bg-white/60 shadow"
                    onClick={() => setActiveTab(menuItem.name)}
                  >
                    {menuItem.name} <span><IoIosArrowForward /></span>
                  </button>
                )}
              </div>
              <div>
                {activeTab === menuItem.name && (
                  <div className="w-full">
                    <BackButton set={setActiveTab} />
                    <ul className="flex w-full flex-wrap gap-4 pt-8">
                      {menuItem.items.map((component, index) => (
                        <div
                          key={index}
                          ref={(ref) => {
                            if (ref) {
                              connectors.create(ref, component.node);
                            }
                          }}
                        >
                          {component.demo ? component.demo : component.name}
                        </div>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </>
          ))}
        </div>
      )}
    </aside>
  );
};

const BackButton = ({ set }: { set: Function }) => {
  return (
    <Button
      className="flex w-full items-center gap-4 mb-4"
      variant="secondary"
      onClick={() => set(null)}
    >
      <IoMdArrowBack />
      Back
    </Button>
  );
}

const SidebarItem = ({
  title,
  activeSection,
  children,
  setActiveSection,
}: {
  title: string;
  activeSection: string;
  children: React.ReactNode;
  setActiveSection: React.Dispatch<SetStateAction<string | null>>
}) => {
  return (
    <button
      onClick={() => {
        setActiveSection(title)
      }}
      className={`${title === activeSection
        ? "bg-black/10 dark:bg-background"
        : "hover:bg-black/5 dark:hover:bg-black/[0.15]"
        } flex items-center gap-2 rounded-md p-1 px-2 transition-colors ease-in md:p-2 `}
    >
      <span className="text-lg md:text-xl">{children}</span><p>{title}</p>
    </button>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, children, ...props }, ref) => {
  return (
    <li className="w-full p-2">
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block w-full select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm w-full font-medium leading-none">
            {children}
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
