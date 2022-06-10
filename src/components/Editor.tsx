import { FormEvent, useRef, useState } from "react";
import FormattingControls from "./FormattingControls";
import "./editor.css";

const Editor = () => {
    const [text, setText] = useState("Default text");
    const editorRef = useRef<HTMLDivElement | null>(null);

    const applyFormat = () => {
        
    }

    return (
        <div className="editor-container">
            <div contentEditable className="editor" ref={editorRef} dangerouslySetInnerHTML={{ __html: text }} />
            <FormattingControls applyFormat={applyFormat} />
        </div>
    )
}

export default Editor;