import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Icon } from '../img/search.svg'
import { ReactComponent as Icon2 } from '../img/more-horizontal.svg'
import MenuDropdown from './menuDropdown';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchResultDropdown from './searchResutDropdown';
import { useRecoilValueLoadable, useRecoilValue,  useRecoilState } from 'recoil';
import { searchArticlesQuery, keywordState } from  '../states/search'

function Header() {

    const [ isOpen, setIsOpen ] = useState(false);
    const [ searchResultVisible, setSearchResultVisible ] = useState(false);
    const [ keyword, setKeyword ] = useRecoilState(keywordState);
    //const [ searchResult, setSearchResult ] = React.useState<any>({})

    const inputRef = useRef<HTMLInputElement>(null);

    const search = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && inputRef.current) {
            console.log('전송')
            setKeyword({ keyword: inputRef.current.value })
            setSearchResultVisible(true)
        }
    }

    const searchResult = useRecoilValueLoadable(searchArticlesQuery)


    //const searchResultLoadable = useRecoilValueLoadable(searchArticlesQuery(keyword))

    const menuDropdownToggle = () => {
        setIsOpen(!isOpen)
    }

    const navigate = useNavigate()

    return (
        <>
            <Container className='Header'>
            <Wrapper className='wrap flex'>
                <Left>
                    <Logo>
                        <Title onClick={() => navigate('/')}>
                            다현이의 개발일기
                        </Title>
                    </Logo>
                </Left>
                <MiddleSearchInput>
                    <InputContainer>
                        <SearchIcon />
                        <SearchBox onKeyPress={search} ref={inputRef} >
                            
                        </SearchBox>
                    </InputContainer>
                    {searchResultVisible && <SearchResultDropdown searchResult={searchResult} searchResultVisible={searchResultVisible} setSearchResultVisible={setSearchResultVisible} />}
                </MiddleSearchInput>
                <Right>
                    <KebobIcon onClick={menuDropdownToggle} />
                    <MenuDropdown isOpen={isOpen} />

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
    border-bottom: 2px solid #ececec;
    border-radius: 1px;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;
    margin: 0 auto;
    max-width: 1000px;
`

const Left = styled.div`
    min-width: 100px;
`

const MiddleSearchInput = styled.div`
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    position: relative;
    width: 80%; //사이즈 계산 필요
    overflow-x: clip;
    margin: 0 0 0 20px;
`

const Right = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;
    //min-width: 160px;
    //max-width: 160px;
    //padding: 0 100px;
    box-sizing: border-box;
    margin: 0 0 0 20px;
`

const Logo = styled.div`
    height: 48px;
    min-width: 230px;
    position: relative;
    overflow: hidden;
`

const Title = styled.span`
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    font-weight: 500;
    font-size: 17px;
    margin: auto 20px auto 0;
    line-height: 48px;
    cursor: pointer;
`

const InputContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid #e4e4e4;
    border-radius: 40px;
    height: 48px;
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

const KebobIcon = styled(Icon2)`
    width: 30px;
    cursor: pointer;

`

const SearchBox = styled.input.attrs((props) => ({
    placeholder: '게시물 검색'
}))`
    border: 0;
    background: 0 0;
    height: 100%;
    width: 100%;
    padding-left: 10px;
    transition: all .2s;
    animation-name: fade;
    animation-duration: .3s;
    animation-delay: .1s;
`

export default Header;