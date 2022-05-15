import React, { useEffect, useRef, useState } from 'react';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { CommentsType } from '../types'
import moment from 'moment';
import { userState } from '../states/user';

type commentProps = {
    commentsData: [{
        comment: CommentsType
    }]
    article_id: number
};

type commentLineProps = {
    data: CommentsType
    id: number
}

const Comment: React.FC<commentProps> = (props) => {
    return (
        <>
            <Counter>
                <Label1>댓글</Label1>
                <Label2>{props.commentsData.length}</Label2>
            </Counter>
            
            {props.commentsData.map((elements, index) => {
                return (
                    <Line id={elements.comment.id} data={elements.comment} key={`line-${index}`} />
                )
            })}
            <Input />
        </>

    );
};

const Line: React.FC<commentLineProps> = (props) => {
    useEffect(() => {
        console.log(props.data)
    }, [])
    return (
        <div>
            <Box key={`box-${props.id}`}>
                <ImageBox key={`imagebox-${props.id}`}>image</ImageBox>
                <Content key={`content-${props.id}`}>
                    <HeaderGroup key={`headergroup-${props.id}`}>
                        <Author key={`author-${props.id}`}>{props.data.user_id ? props.data.user_id : props.data.guest_name}</Author>
                        <Date key={`date-${props.id}`}>{moment(props.data.createdAt).format('LL')}</Date>
                        <Patch key={`patch-${props.id}`}>수정</Patch>
                        <Remove key={`remove-${props.id}`}>삭제</Remove>

                    </HeaderGroup>
                    <Text key={`text-${props.id}`}>
                        {props.data.content}
                    </Text>

                </Content>
            </Box>

        </div>
    )
}

const Input: React.FC = (props: any) => {

    const [comments, setComments] = useState(null)
    const user = useRecoilValue(userState)

    const refInputName = useRef<HTMLInputElement>(null)
    const refInputPwd = useRef<HTMLInputElement>(null)
    const refInputContent = useRef<HTMLTextAreaElement>(null)


    const submitHandler = async () => {
        let data = {}

        if(user.isLogin) { //로그인 상태에 따라 비회원 댓글 입력
            data = {
                article_id: props.article_id,
                guest_id: refInputName.current?.value,
                guest_pwd: refInputPwd.current?.value,
                content: refInputContent.current?.value,
            }
        } else {
            data = {
                article_id: props.article_id,
                content: refInputContent.current?.value,
                user_id: user.info?.id,
            }
        }
        /*
        ajax 요청 부분 수정필요

        const newComment = await postdata('/article/comment', data, null, token)
        console.log('등록됨', newComment)
        if(newComment){
            
            //console.log(comments)
            setComments([
                ...comments,
                {comment: newComment.data.data},
            ])
            console.log(comments)
            
        }
        */
    }

    return (
        <div>
            <ColumnBox>
                <MLInput placeholder='댓글을 입력해주세요' ref={refInputContent} />
                <div></div>
                <GuestInfoContainer>
                    <>
                    {user.isLogin && <InputBox placeholder='이름' height='40px' ref={refInputName} />}
                    <Margin />
                    {user.isLogin && <InputBox placeholder='비밀번호' height='40px' ref={refInputPwd} />}
                    </>
                </GuestInfoContainer>
                
                <Btn1 onClick={submitHandler}>등록</Btn1>
            </ColumnBox>
            

        </div>
    )
}

const Counter = styled.div`
    margin: 20px 0 20px 0;
    font-family: 'NanumSquareRound',sans-serif;
    font-size: 18px;
    font-weight: 700;
`

const Label1 = styled.span`

`
const Label2 = styled.span`
    color: #133233;
`

const Box = styled.div`
    //height: 500px;
    display: flex;
    width: 70vw;
    font-family: "Spoqa Han Sans Neo", sans-serif;
    font-weight: 300;
    margin: 20px 0 0 0;
    @media only screen and (max-width: 768px) {
    width: 92%;
    margin: 20px 4% 0 4%;
  }
`
const ColumnBox = styled.div`
    //height: 500px;
    display: flex;
    flex-direction: column;
    width: 70vw;
    @media only screen and (max-width: 768px) {
    width: 92%;
    margin: 20px 4% 0 4%;
    }
`

const ImageBox = styled.div`
    height: 70px;
    width: 70px;
    background-color: #FFFFFF;
    margin: 0 20px 0 0;
    border: solid 1px #dadada;
    @media only screen and (max-width: 768px) {
    display: none;
    }
    
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const HeaderGroup = styled.div`
    display: flex;
    width: 100%;
    margin: 0 0 5px 0;
`

const Author = styled.div`
    margin: 0 10px 0 0;
    font-weight: 500;
`

const Date = styled.div`
    color: #b2b2b2;
    font-size: 14px;
    ::before {
        content: '|';
        margin: 0 10px 0 0;
    }
`

const Patch = styled.div`
    font-size: 14px;
    margin: 0 0 0 auto;
`

const Remove = styled.div`
    font-size: 14px;
    margin: 0 10px 0 20px;
`

const Text = styled.div`

`

const InputBox = styled.input.attrs(props => ({
    type: 'text',
    placeholder: props.placeholder,
    
}))`
  display: block;
  position: relative;
  //overflow: hidden;
  width: 100%;
  height: ${props => props.height || '70px'};
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
  -webkit-border-image: none;
  margin: 10px 0 0 0;
  //word-wrap: break-word;

`

const MLInput = styled.textarea.attrs(props => ({
    placeholder: props.placeholder,
}))`
  width: 100%;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
  -webkit-border-image: none;
  margin: 10px 0 0 0;
    height: 150px;
    padding: 10px;

`

const GuestInfoContainer = styled.div`
    display: flex;
`

const Margin = styled.div`
    margin: 0 20px 0 0;
`

const Btn1 = styled.button`
    font-size: 18px;
    font-weight: 300;
    line-height: 49px;
    display: block;
    width: 120px;
    height: 49px;
    cursor: pointer;
    text-align: center;
    color: #fff;
    border: none;
    border-radius: 0;
    background-color: #133233;
    margin: 20px 0 0 auto;
`

export default Comment;