import React from 'react';
import styled from 'styled-components';

function Header() {

    return (
        <>
            <Container className='Header'>
            <Wrapper className='wrap flex'>
                <Left>
                    <Logo>
                        <Title>
                            Dahyeon's Blog
                        </Title>
                    </Logo>
                </Left>

            </Wrapper>
            </Container>
        </>
    );
}

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background: #FFFFFF;
    padding: 10px 0;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;
    margin: 0 auto;
    max-width: 1700px;
`

const Left = styled.div`
    
`

const MiddleSearchInput = styled.div`
    
`

const Right = styled.div`
    
`

const Logo = styled.div`
    height: 38px;
    position: relative;
    overflow: hidden;
`

const Title = styled.span`
    font-family: 'NanumSquareRound', 'sans-serif';
    font-weight: 700;
    font-size: 18px;
`

export default Header