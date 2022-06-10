import { useState } from "react";

const Editor = () => {
    const [text, setText] = useState("Default text");

    return <div contentEditable>{text}</div>
}

export default Editor;