import React, { useState } from 'react';
import { Editor, EditorState } from 'draft-js';
import "draft-js/dist/Draft.css"

const DraftEditor: React.FC = () => {
    const [ editorState, setEditorState ] = useState<EditorState>(EditorState.createEmpty())

    return (
        <Editor editorState={editorState} onChange={setEditorState} />
    );
};

export default DraftEditor;

