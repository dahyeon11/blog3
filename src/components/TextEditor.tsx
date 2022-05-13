import React, { useState } from 'react';
import styled from 'styled-components';
import DraftEditor from './draft/draftEditor';

const TextEditor: React.FC = () => {
    return (
        <Container>
        <Editor>
          <TitleInput />
        <EditorBox>
            <DraftEditor />
        </EditorBox>
        </Editor>
        </Container>

    );
};

const Container = styled.div`
    margin: 100px 0 0 0;
`

const Editor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 20px 0;
`

const TitleInput = styled.input.attrs(props => ({
  type: 'text',
  size: props.size || '100px',
  placeholder: '제목을 입력해주세요'
}))`
border: 1px solid #bbb;
width: 60vw;
height: 40px;
font-family: 'NanumSquareRound', 'sans-serif';
    font-size: 22px;
    padding: 10px;
`

const CategoryInput = styled.input`

`

const EditorBox = styled.div`
    width: 80%;
    height: 600px;
`

export default TextEditor;