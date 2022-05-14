import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loadable, UnwrapRecoilValueLoadables } from 'recoil';
import styled from 'styled-components';

interface ArticleType {
    title: string;
    content: string;
    id: number;
}

type SearchResultDropdownProps = {
    searchResult: Loadable<ArticleType[]>
    searchResultVisible: boolean
    setSearchResultVisible: React.Dispatch<boolean>
};

const SearchResultDropdown: React.FC<SearchResultDropdownProps> = (props) => {

    const navigate = useNavigate();
    const searchResultDropdownRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (e: any) => {
        if (props.searchResultVisible && searchResultDropdownRef.current && !searchResultDropdownRef.current.contains(e.target)) props.setSearchResultVisible(false);
      };
    
    useEffect(() => {
      window.addEventListener("click", handleClickOutside);
      return () => {
        window.removeEventListener("click", handleClickOutside);
      };
    }, []);

    return (
        <>
        <SearchResultContainer ref={searchResultDropdownRef} >
            <ResultSection>
                {
                    props.searchResult.state === 'hasValue' && props.searchResult.contents.map((elements, index)=> {
                        return (
                            <>
                            <ResultBox onClick={() => {
                                navigate(`/article/${elements.id}`)
                                props.setSearchResultVisible(false)
                                }} >
                                <ResultTitle>
                                    <ResultTitleLine>
                                        {index+1}. {elements.title}
                                    </ResultTitleLine>
                                </ResultTitle>
                                <ResultContent>
                                        {elements.content}
                                </ResultContent>
                            </ResultBox>
                            </>
                        )
                    })
                }
            </ResultSection>
            <LabelBox1>
            <Label1>
                검색결과 더 보기
            </Label1>
            </LabelBox1>

        </SearchResultContainer>
        </>
    )
};

const SearchResultContainer = styled.div`
        width: calc(100%);
    left: 0;
    right: 0;
    margin: auto;
    margin-top: 10px;

    position: absolute;
    border-radius: 0 0 10px 10px;
    transition: all .2s;
    transform-origin: top;
    z-index: 2;

    background: white;
    border: 1px solid #ECECEC;
    border-radius: 20px;
    box-sizing: border-box;
    box-shadow: 0 10px 20px 0 rgb(0 0 0 / 5%);

    font-size: 12px;
    color: rgba(0,0,0,0.9);
    padding-top: 5px;
`

const ResultSection = styled.div`
        padding: 22px;

`

const ResultBox = styled.div`
    margin: 10px auto 0 20px;
    position: relative;
    text-align: left;
`

const ResultTitle = styled.div`
    font-weight: 500;
    font-size: 14px;
`

const ResultContent = styled.div`
    font-weight: 300;
    font-size: 14px;
    margin: 10px 0 0 15px;
`

const ResultTitleLine = styled.span`
    
`

const ResultContentLine = styled.span`
    margin-right: auto;
`
const LabelBox1 = styled.div`
    margin: 30px 0;
`
const Label1 = styled.span`

`




export default SearchResultDropdown;