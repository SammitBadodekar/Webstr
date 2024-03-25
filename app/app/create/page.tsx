"use client";
import { Editor, Frame, Element, useEditor } from '@craftjs/core';
import { SideMenu } from '@/components/side-menu';
import { Header } from '@/components/header';
import { Canvas } from '@/components/canvas';
import { NodeButton } from '@/components/node/button';
import {
  NodeCardHeader,
  NodeCard,
  NodeCardContent,
  NodeCardDescription,
  NodeCardTitle,
  NodeCardFooter,
} from '@/components/node/card';
import { ReactIframe } from '@/components/react-iframe';
import { ControlPanel } from '@/components/control-panel';
import { Viewport } from '@/components/viewport';
import { RenderNode } from '@/components/render-node';
import { componentsMap } from '@/components/node/components-map';
import { NodeOneBlock, NodeTwoBlocks } from '@/components/node/layout';

export default function Page() {
  return (
    <section className="w-full min-h-screen flex flex-col">
      <Editor
        resolver={{
          NodeButton,
          Canvas,
          NodeCardHeader,
          NodeCard,
          NodeCardContent,
          NodeCardDescription,
          NodeCardTitle,
          NodeCardFooter,
          NodeOneBlock,
          NodeTwoBlocks,
        }}
        onRender={RenderNode}
      >
        <div className="flex relative overflow-hidden">
          <SideMenu componentsMap={componentsMap} />
          <Viewport>
            <ReactIframe
              title="my frame"
              className="w-full h-full page-container"
            >
              <Frame>
                <Element is={Canvas} id="ROOT" canvas>
                  <NodeButton>Button 1</NodeButton>
                  <NodeButton>Button 2</NodeButton>
                  <NodeButton>Button 3</NodeButton>
                  <NodeButton>Button 4</NodeButton>
                </Element>
              </Frame>
            </ReactIframe>
          </Viewport>

          {/* <ControlPanel /> */}
        </div>
      </Editor>
    </section>
  );
}
