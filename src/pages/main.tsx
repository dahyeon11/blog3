import React from 'react';
import styled from 'styled-components';

function Main () {

    return (
        <Container>
            <Wrapper>

            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;
    margin: 0 auto;
    max-width: 1100px;
    height: 100%;
`

export default Main