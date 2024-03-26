import { ReactElement, ReactNode } from 'react';
import { Button } from '../ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../ui/card';
import { OneBlock, NodeOneBlock, NodeTwoBlocks, NodeThreeBlocks } from './layout';
import { NodeButton } from './button';
import { NodeCard } from './card';
import { Element } from '@craftjs/core';

export type Components = {
  name: string;
  items: {
    name: string;
    props?: {
      variant?:
      | 'link'
      | 'default'
      | 'destructive'
      | 'outline'
      | 'secondary'
      | 'ghost'
      | null
      | undefined;
      className?: string;
      children?: ReactNode | string;
    };
    node: ReactElement;
    demo?: ReactNode;
  }[];
};

export const componentsMap: Components[] = [
  {
    name: "Layout",
    items: [
      {
        name: "One Block",
        demo: (
          <OneBlock className="bg-white p-4 text-center italic outline-dashed outline-gray-500">
            One Block
          </OneBlock>
        ),
        node: (
          <Element
            canvas
            is={NodeOneBlock as typeof NodeOneBlock & string}
            id="one-block"
          />
        ),
      },
      {
        name: "Two Blocks",
        demo: (
          <OneBlock className="flex flex-row bg-white p-2 text-center w-full italic outline-dashed outline-gray-500">
            <OneBlock className="bg-white text-center italic outline-dashed outline-gray-500 p-2">
              First Block
            </OneBlock>
            <OneBlock className="bg-white text-center italic outline-dashed outline-gray-500 p-2">
              Second Block
            </OneBlock>
          </OneBlock>
        ),
        node: <NodeTwoBlocks></NodeTwoBlocks>,
      },
      {
        name: "Three Blocks",
        demo: (
          <OneBlock className="flex flex-row bg-white p-2 text-center w-full italic outline-dashed outline-gray-500">
            <OneBlock className="bg-white text-center italic outline-dashed outline-gray-500 p-1">
              First Block
            </OneBlock>
            <OneBlock className="bg-white text-center italic outline-dashed outline-gray-500 p-1">
              Second Block
            </OneBlock>
            <OneBlock className="bg-white text-center italic outline-dashed outline-gray-500 p-1">
              third Block
            </OneBlock>
          </OneBlock>
        ),
        node: <NodeThreeBlocks></NodeThreeBlocks>,
      },
    ],
  },
  {
    name: "Buttons",
    items: [
      {
        name: "Default",
        demo: <Button>Default</Button>,
        node: <NodeButton>Default</NodeButton>,
      },
      {
        name: "Outline",
        props: { variant: "outline", children: "Outline" },
        demo: <Button variant={"outline"}>Outline</Button>,
        node: <NodeButton variant={"outline"}>Outline</NodeButton>,
      },
      {
        name: "Destructive",
        props: { variant: "destructive", children: "Destructive" },
        demo: <Button variant={"destructive"}>Destructive</Button>,
        node: <NodeButton variant={"destructive"}>Destructive</NodeButton>,
      },
    ],
  },
  {
    name: "Cards",
    items: [
      {
        name: "Default",
        demo: (
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>Empty Container</CardContent>
            <CardFooter>
              <Button className="w-full">Footer button</Button>
            </CardFooter>
          </Card>
        ),
        node: <NodeCard></NodeCard>,
      },
    ],
  },
];
