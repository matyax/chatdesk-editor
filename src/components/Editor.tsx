import { FormEvent, useRef, useState } from "react";
import FormattingControls from "./FormattingControls";
import "./editor.css";

const Editor = () => {
  const [text, setText] = useState("Default text");

  return (
    <div className="editor-container">
      <div
        contentEditable
        className="editor"
        dangerouslySetInnerHTML={{ __html: text }}
      />
      <FormattingControls />
    </div>
  );
};

export default Editor;
