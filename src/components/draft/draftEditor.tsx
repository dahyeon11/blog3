import React, { useState, forwardRef, ForwardRefExoticComponent, RefAttributes, useEffect } from 'react';
import { DraftEditorCommand, Editor, EditorState, RichUtils } from 'draft-js';
import "draft-js/dist/Draft.css"
import BlockStyleControls from './blockStyleControls';
import InlineStyleControls from './inlineStyleControls';

type draftEditorProps = {
    test: any;
}

const DraftEditor: ForwardRefExoticComponent<Pick<draftEditorProps, never> & RefAttributes<Editor>> = forwardRef((props, ref) => {
    const [ editorState, setEditorState ] = useState<EditorState>(EditorState.createEmpty())


    const toggleBlockType = (blockType: string) => {
        setEditorState(RichUtils.toggleBlockType(editorState, blockType))
    };

    const toggleInlineStyle = (inlineStyle: string) => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle))
    };

    const handleKeyCommand = (command: DraftEditorCommand) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
      
        if (newState) {
          setEditorState(newState);
          return 'handled';
        }
        return 'not-handled';
    }

    return (
        <>
        <BlockStyleControls editorState={editorState} onToggle={toggleBlockType} />
        <InlineStyleControls editorState={editorState} onToggle={toggleInlineStyle} />
        <Editor editorState={editorState} onChange={setEditorState} handleKeyCommand={handleKeyCommand} ref={ref} />
        </>
    );
});

export default DraftEditor;

