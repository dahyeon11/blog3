import React from 'react';
import styled from 'styled-components';
import { ArticlesType } from '../types';
import { useNavigate } from 'react-router-dom'

import moment from 'moment'
import "moment/locale/ko";
moment.locale('ko')

type CardPostProps = {
    data: ArticlesType;
}

const CardPost: React.FC<CardPostProps> = ({data})  => {

    const navigate = useNavigate();

    return (
        <>
        <Wrapper onClick={() => navigate(`/article/${data.id}`)} >
            <ImgBox>
            <Img img={data.thumbnail_image} />
            </ImgBox>
            <ContentBox>
                <Content>
                <ContentHeader>
                    {moment(data.createdAt).format('YYYY. MM. DD')}
                </ContentHeader>
                <ContentTitle>
                    {data.title}
                </ContentTitle>
                <ContentBody>
                    {data.content}
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
    width: 1000px;
    @media screen and (max-width: 768px) {
        width: 600px;
    }
    cursor: pointer;

`

const ImgBox = styled.div`
    min-width: 320px;
    min-height: 240px;
    width: 320px;
    height: 240px;
`

const ContentBox = styled.div`
    margin: 0 auto;
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
    overflow-x: hidden;
`

const Img = styled.div<{img: string}>`
    width: 100%;
    height: 100%;
    background-image: url(${props => props.img});
    overflow: hidden;
`

export default CardPost;