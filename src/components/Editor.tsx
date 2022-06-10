import { FormEvent, useRef, useState } from "react";
import "./editor.css";

const Editor = () => {
    const [text, setText] = useState("Default text");
    const editorRef = useRef<HTMLDivElement | null>(null);

    return (
        <div className="editor-container">
            <div contentEditable className="editor" ref={editorRef} dangerouslySetInnerHTML={{ __html: text }} />
        </div>
    )
}

export default Editor;