import React, { useState } from 'react';
import { Editor, EditorState } from 'draft-js';
import "draft-js/dist/Draft.css"

const DraftViewer: React.FC = () => {
    const [ editorState, setEditorState ] = useState<EditorState>(EditorState.createEmpty())

    return (
        <Editor editorState={editorState} readOnly={true} onChange={setEditorState} />
    );
};

export default DraftViewer;