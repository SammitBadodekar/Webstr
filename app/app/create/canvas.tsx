import React, { useEffect, useRef } from "react";
import EditorJS, {
  OutputData,
  EditorConfig,
  ToolSettings,
  ToolConstructable,
} from "@editorjs/editorjs";
import { EDITOR_TOOLS } from "./editor-tools";

interface EditorProps {
  data: OutputData | undefined;
  onChange: (data: OutputData) => void;
  holder: string;
}

const Editor: React.FC<EditorProps> = ({ data, onChange, holder }) => {
  const ref = useRef<EditorJS>();

  useEffect(() => {
    if (!ref.current) {
      const editorConfig: EditorConfig = {
        holder: holder,
        tools: EDITOR_TOOLS as {
          [toolName: string]: ToolSettings | ToolConstructable;
        },
        data,
        onChange: async (api, event) => {
          const savedData = await api.saver.save();
          onChange(savedData);
        },
      };
      const editor = new EditorJS(editorConfig);
      ref.current = editor;
    }

    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);

  return <div id={holder} className="prose max-w-full overflow-y-scroll" />;
};

export default Editor;
