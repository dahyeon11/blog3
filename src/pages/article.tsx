import React from "react";
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { selector, useRecoilStateLoadable, useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { articleDetailsQuery, articlesState } from '../states/articles'
import { ArticlesType } from '../types';
import DraftViewer from "../components/draft/draftViewer";
import moment from "moment";


type ArticleProps = {

}

const Article: React.FC<ArticleProps> = () => {

    const urlParam = useParams()
    const articleId = urlParam.id

    const articleDetailsLoadable = useRecoilValueLoadable(articleDetailsQuery(articleId))

    switch (articleDetailsLoadable.state) {
        case 'hasValue':
            const article = articleDetailsLoadable.contents[0]
            console.log(article)
          return (
              <>
                <MainContainer>
            <ConetntArea>
             <ContentHeader>
                 <AreaCategory> {article.category} </AreaCategory>
                 <AreaTitle> {article.title} </AreaTitle>
                 <ContentInfoWrapper>
                     {/* 컨텐츠 정보 구역*/}
                     <Author>{article.user_id}1</Author>
                     <Timestamp>{moment(article.createdAt).format('LL')}</Timestamp>

                 </ContentInfoWrapper>

             </ContentHeader>
             <ContentWrapper>
                 {/* 주 컨텐츠 구역 */}
                 <DraftViewer rawDraftContentState={article.raw_contentstate}></DraftViewer>
             </ContentWrapper>
             <ContentFooter>
                 {/* 컨텐츠 최하단 구역 */}
                 {/*<Comment article_id={article.id} />*/}

             </ContentFooter>
             </ConetntArea>
            </MainContainer>
              </>
          )
        case 'loading':
          return <div>Loading...</div>;
        case 'hasError':
          throw articleDetailsLoadable.contents.title;
      }
}

const Test = styled.div`
    margin-top: 100px;
    font-size: 20px;
`

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    max-width: 100%;
    margin: 150px 0 100px 0;
    @media only screen and (max-width: 768px) {
    margin: 75px 0 50px 0;
    }
`

const ConetntArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70vw;
    @media only screen and (max-width: 768px) {
    width: 90vw;
    }

`

const ContentHeader = styled.div`
    display: flex;
    width: 100%;
    //height: 20vh;
    margin: 0 10px 0 10px;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    flex-direction: column;
`

const ContentWrapper = styled.div`
    display: grid;
    width: 100%;
    max-width: 100%;
    justify-content: space-around;
    margin: 20px 30px 20px 30px;
    align-items: center;
    align-content: center;
`

const ContentFooter = styled.div`
    display:flex;
`

const AreaTitle = styled.div`
font-family: "Spoqa Han Sans Neo", sans-serif;
font-size: 40px;
font-weight: 700;
text-align: center;
@media only screen and (max-width: 768px) {
    font-size: 28px;
}

`

const AreaCategory = styled.div`
font-family: "Spoqa Han Sans Neo", sans-serif;
font-size: 16px;
font-weight: 500;
text-align: center;
margin: 0 0 10px 0;
`

const ContentInfoWrapper = styled.div`
display: flex;
justify-content: center;
margin: 10px 0 10px 0;
`



const Timestamp = styled.div`
font-family: "Spoqa Han Sans Neo", sans-serif;
font-size: 16px;
font-weight: 300;
text-align: center;
`

const Author = styled.div`
font-family: "Spoqa Han Sans Neo", sans-serif;
font-size: 16px;
font-weight: 300;
text-align: center;
margin-right: 10px;

`

const AreaView = styled.div`

`

export default Article