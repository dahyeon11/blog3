import React from 'react';
import styled from 'styled-components';
import CardPost from '../components/cardPost';

function Main () {

    return (
        <Container className='Main' >
            <Wrapper>
                <CardPost />    
                <CardPost />
                <CardPost />
                <CardPost />
            </Wrapper>
        </Container>
    )
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