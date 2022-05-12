import React from 'react';
import styled from 'styled-components';
import CardPost from '../components/cardPost';
import { selector, useRecoilStateLoadable, useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { articlesQuery, articlesState } from '../states/articles'
import { ArticlesType } from '../types';

function Main (): JSX.Element {

    //const recentArticle = useRecoilValue(articlesQuery);

    const articlesLoadable = useRecoilValueLoadable(articlesQuery)

    switch (articlesLoadable.state) {
        case 'hasValue':
            return (
                <Container className='Main' >
                    <Wrapper>
                        {
                            articlesLoadable.contents.map((elements: ArticlesType) => {
                                return (
                                    <CardPost data={elements}  key={`CardPost${elements.id}`} />    
                                )
                            })
                        }
                    </Wrapper>
                </Container>
            )
            case 'loading':
                return <div>Loading...</div>;
            case 'hasError':
                throw articlesLoadable.contents;
    }

}



const Container = styled.div`
    position: relative;
    width: 100%;
    //height: 100vh;
    top: 162px;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;
    margin: 0 auto;
    max-width: 1100px;
    height: 100%;
`

export default Main