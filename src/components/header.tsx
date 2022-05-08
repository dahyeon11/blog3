import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Icon } from '../img/search.svg'

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
                <MiddleSearchInput>
                    <InputContainer>
                        <SearchIcon />
                        <SearchBox>
                            
                        </SearchBox>
                    </InputContainer>
                </MiddleSearchInput>
                <Right>

                </Right>

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
    min-width: 150px;
`

const MiddleSearchInput = styled.div`
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    position: relative;
    width: 100%;
    overflow-x: clip;
    margin: 0 0 0 20px;
`

const Right = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 160px;
    max-width: 160px;
    padding: 0 100px;
    box-sizing: border-box;
`

const Logo = styled.div`
    height: 38px;
    position: relative;
    overflow: hidden;
`

const Title = styled.span`
    font-family: 'Nanum Brush Script', cursive;
    font-weight: 400;
    font-size: 28px;
    margin: auto auto auto 20px;
    line-height: 40px;
`

const InputContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid #ececec;
    border-radius: 40px;
    height: 38px;
    color: #000;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    max-width: 100%;
`

const SearchIcon = styled(Icon)`
    width: 30px;
    height: 100%;
    margin-left: 10px;
    margin-right: 2px;
    
`

const SearchBox = styled.input.attrs((props) => ({
    placeholder: '게시물 검색'
}))`
    border: 0;
    background: 0 0;
    height: 100%;
    padding-left: 10px;
    transition: all .2s;
    animation-name: fade;
    animation-duration: .3s;
    animation-delay: .1s;
`

export default Header;