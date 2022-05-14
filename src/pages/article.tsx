import React from "react";
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { selector, useRecoilStateLoadable, useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { articleDetailsQuery, articlesState } from '../states/articles'
import { ArticlesType } from '../types';


type ArticleProps = {

}

const Article: React.FC<ArticleProps> = () => {

    const urlParam = useParams()
    const articleId = urlParam.id

    const articleDetailsLoadable = useRecoilValueLoadable(articleDetailsQuery(articleId))

    return (
        <>
        <div>
            <Test>
            {(
            `urlParam은 ${articleId}`             
            )}
            {articleDetailsLoadable.state === 'hasValue' && articleDetailsLoadable.contents[0].title}
            <div>
            {articleDetailsLoadable.state === 'hasValue' && articleDetailsLoadable.contents[0].content}
            </div>
            
            </Test>
        </div>
        </>
    )
}

const Test = styled.div`
    margin-top: 100px;
    font-size: 20px;
`

export default Article