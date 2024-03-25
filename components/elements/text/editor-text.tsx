import { Editor } from "novel";

const EditorText = () => {
  return (
    <Editor
      className=" h-full w-full bg-background"
      defaultValue={{}}
      onUpdate={(editor) => console.log(editor?.getJSON())}
      disableLocalStorage={true}
    />
  );
};

export default EditorText;
