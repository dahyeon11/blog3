import React from 'react';
import styled from 'styled-components';

type editorAsideProps = {
    submitHandler: VoidFunction
}


const EditorAside: React.FC<editorAsideProps> = (props) => {
    return (
        <>
        <Aside>
        <Btn2>미리보기</Btn2>
        <Btn2>맞춤법 검사</Btn2>
        <Btn1 onClick={props.submitHandler}>전송</Btn1>
      </Aside>
        </>
    )
}

const Aside = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  height: 60px;
  //width: 100%;
  padding: 0 20px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  background-color: #F0F0F0;
`

const Btn1 = styled.button`
font-size: 13px;
font-weight: 500;
    width: 80px;
    height: 40px;
    margin: 0 0 0 auto;
    line-height: 30px;
    transition: border-color .2s,color .2s,background-color .2s;
    box-sizing: border-box;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    color: rgb(255, 255, 255);
    background-color: rgb(0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-image-outset: 0;
    border-image-repeat: stretch;
    border-image-slice: 100%;
    border-image-source: none;
    border-image-width: 1;
    border-left-color: rgb(0, 0, 0);
    border-left-style: solid;
    border-left-width: 1px;
    border-right-color: rgb(0, 0, 0);
    border-right-style: solid;
    border-right-width: 1px;
    border-top-color: rgb(0, 0, 0);
    border-top-style: solid;
    border-top-width: 1px;
    -webkit-border-image: none;
    transition-delay: 0s, 0s, 0s;
    transition-duration: 0.2s, 0.2s, 0.2s;
    transition-property: border-color, color, background-color;
    transition-timing-function: ease, ease, ease;
  .focus {
    border-color: #f54;
    color: #fff;
    background-color: #f54;
  }
  :hover {
    border-color: #f54;
    color: #fff;
    background-color: #f54;
  }
}
`

const Btn2 = styled.button`
    font-size: 13px;
    font-weight: 500;
    width: 80px;
    height: 40px;
    margin: 0 4px;
    line-height: 30px;
    transition: border-color .2s,c  olor .2s,background-color .2s;
    box-sizing: border-box;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    color: rgb(100, 100, 100);
    background-color: rgba(0, 0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-bottom-style: none;
    border-bottom-width: 0px;
    border-image-outset: 0;
    border-image-repeat: stretch;
    border-image-slice: 100%;
    border-image-source: none;
    border-image-width: 1;
    border-left-color: rgb(0, 0, 0);
    border-left-style: none;
    border-left-width: 0px;
    border-right-color: rgb(0, 0, 0);
    border-right-style: none;
    border-right-width: 0px;
    border-top-color: rgb(0, 0, 0);
    border-top-style: none;
    border-top-width: 0px;
    -webkit-border-image: none;

`

export default EditorAside;