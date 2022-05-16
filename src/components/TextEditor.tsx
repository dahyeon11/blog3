import { Editor, convertToRaw, ContentState } from 'draft-js';
import React, { LegacyRef, useRef, useState, forwardRef } from 'react';
import styled from 'styled-components';
import DraftEditor from './draft/draftEditor';
import EditorAside from './editorAside';
import axios from 'axios';

const TextEditor: React.FC = () => {
    const editorRef = useRef<Editor>(null)
    const refInputTitle = useRef<HTMLInputElement>(null)

    //let contentState: ContentState

    const submitHandler = async () => {
        let contentState: ContentState
        if(editorRef.current && editorRef.current.props.editorState.getCurrentContent().getPlainText()) {
            //위 조건의 뒷부분은 에디터에 아무 것도 입력되지 않았을 경우
            //getPlainText()가 undefined를 반환하는 것을 이용하여 빈 게시글이 전송되는 경우를 방지
            contentState = editorRef.current.props.editorState.getCurrentContent()
            const raw_contentstate = convertToRaw(contentState)
            const plainText = contentState.getPlainText()

            const newPost = await axios.post(process.env.REACT_APP_API_URL+'/articles', {
                user_id: 1,
                category_id: 1,
                title: refInputTitle.current?.value,
                content: plainText,
                raw_contentstate: raw_contentstate,
            })
            console.log(newPost)
            console.log(raw_contentstate)
            console.log(contentState.getPlainText())
        }        
    }

    return (
        <>
        <Container>
        <EditorArea>
          <TitleInput ref={refInputTitle} />
        <EditorBox>
            <DraftEditor ref={editorRef} />
        </EditorBox>
        </EditorArea>
        </Container>
        <EditorAside submitHandler={submitHandler} />
        </>

    );
};

const Container = styled.div`
    margin: 100px 0 0 0;
`

const EditorArea = styled.div`
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