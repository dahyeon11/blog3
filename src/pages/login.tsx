import React, { useRef, useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Login() {

    const refId = useRef<HTMLInputElement>(null)
    const refPwd = useRef<HTMLInputElement>(null)

    const [ loginInfo, setLoginInfo ] = useState<{email: string, password: string}>()

    useLayoutEffect( () => {
        if(refId.current && refPwd.current) {
            setLoginInfo({
                email: refId.current.value,
                password: refPwd.current.value
            });
        };
    }, [])

    const navigate = useNavigate()

    const loginHandler = async () => {
        // 요청 보내기
        return 0
    }

    return (
        <>
        <Box>            
            <LoginContainer>
                
                <Label>로그인</Label>

                <IdInput ref={refId}></IdInput>
                <PWDInput ref={refPwd}></PWDInput>
                <Btn1
                onClick={loginHandler}
                >확인</Btn1>
                <Btn1 onClick={() => navigate('/signup')}>회원가입</Btn1>
                <Label2>비밀번호 찾기</Label2>

            </LoginContainer>
        </Box>
        </>
    )
}

const Test = styled.div`
    margin: 100px 0 0 0;
    font-size: 20px;
`

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
const LoginContainer = styled.div`
//margin: auto;
width: 350px;
-webkit-text-stroke: 0.45px;//폰트 안티앨리어싱;
`

const Label = styled.div`
    font-size: 36px;
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 500;
    color: #666666;
    margin: 10px 0 20px 0;
`
const Label2 = styled.div`
    font-size: 16px;
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 300;
    color: #666666;
    width: 100px;
    margin: 10px 0 20px auto;
`

const IdInput = styled.input.attrs({
    type: 'text',
    placeholder: '아이디',
    
})`
display: block;
position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
    -webkit-border-image: none;

`

const PWDInput = styled.input.attrs({
    type: 'password',
    placeholder: '비밀번호',
})`
display: block;
position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
    -webkit-border-image: none;
    //border-top-left-radius: 20px;
    //border-top-right-radius: 20px;
`

const Btn1 = styled.button`
margin: 15px 0 0 0;
font-size: 18px;
  font-weight: 300;
  line-height: 49px;
  display: block;
  width: 100%;
  height: 49px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 0;
  background-color: var(--ui-blue-f);
`

export default Login;