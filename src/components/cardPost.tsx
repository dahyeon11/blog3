import React from 'react';
import styled from 'styled-components';

function CardPost() {

    return (
        <>
        <Wrapper>
            <ImgBox>
            <Img img={'https://public.dahyeon.us/sample.jpg.jpg'} />
            </ImgBox>

            <ContentBox>
                <Content>
                <ContentHeader>
                콘텐츠 헤더
                </ContentHeader>
                <ContentTitle>
                React 에서 하위 컴포넌트의 상태 참조하기
                </ContentTitle>
                <ContentBody>
                콘텐츠 내용
                </ContentBody>
                </Content>
            </ContentBox>
        </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;
    max-width: 1000px;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    border: 1px solid #e4e4e4;
    border-radius: 1px;
    margin: 20px 0;
`

const ImgBox = styled.div`
    width: 320px;
    height: 240px;
`

const ContentBox = styled.div`
    
`

const Content = styled.div`
    margin: 30px;
`

const ContentHeader = styled.div`
    
`

const ContentTitle = styled.div`
    font-size: 27px;
    font-weight: 500;
    margin: 10px 0 20px 0;
`


const ContentBody = styled.div`
    
`

const Img = styled.div<{img: string}>`
    width: 100%;
    height: 100%;
    background-image: url(${props => props.img})
`

export default CardPost;