import React from 'react';
import styled from 'styled-components';

type SearchResultDropdownProps = {
    keyword: string
};

const SearchResultDropdown: React.FC<SearchResultDropdownProps> = () => {

    return (
        <>
        <SearchResultContainer>
            <ResultSection>
                weqw213
            </ResultSection>
        </SearchResultContainer>
        </>
    )
};

const SearchResultContainer = styled.div`
        width: calc(100% - 20px);
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
    box-sizing: border-box;
    box-shadow: 0 10px 20px 0 rgb(0 0 0 / 5%);

    font-size: 12px;
    color: rgba(0,0,0,0.9);
    margin: 0;
    padding-top: 70px;
`

const ResultSection = styled.div`
        padding: 22px;

`



export default SearchResultDropdown;