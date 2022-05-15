import React, { useEffect, useState } from 'react';
import { Editor, EditorState, convertFromRaw, RawDraftContentState, ContentState } from 'draft-js';
import "draft-js/dist/Draft.css"

type draftViewerProps = {
    rawDraftContentState: RawDraftContentState
}

const DraftViewer: React.FC<draftViewerProps> = (props) => {

    const [ editorState, setEditorState ] = useState<EditorState>(EditorState.createEmpty())

    useEffect(() => {
        const contentState: ContentState = convertFromRaw(props.rawDraftContentState)
        setEditorState(EditorState.createWithContent(contentState))
    }, [])
    

    return (
        <Editor editorState={editorState} readOnly={true} onChange={setEditorState} />
    );
};

export default DraftViewer;