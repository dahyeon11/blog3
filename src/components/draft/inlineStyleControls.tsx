import React from 'react';
import StyleButton from './styledButton';
import { EditorState } from 'draft-js';

type inlineStyleControlProps = {
  editorState: EditorState
  onToggle: any
};

const InlineStyleControls: React.FC<inlineStyleControlProps> = (props) => {
  var currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map(type =>
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  );
};

var INLINE_STYLES = [
  { label: '굵게', style: 'BOLD' },
  { label: '기울임', style: 'ITALIC' },
  { label: '밑줄', style: 'UNDERLINE' },
  { label: '스포카한산스', style: 'CODE' },
  { label: '나눔스퀘어라운드', style: 'NANUM' },
];

export default InlineStyleControls;