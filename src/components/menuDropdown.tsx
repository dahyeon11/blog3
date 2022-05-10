import React from 'react';
import styled from 'styled-components';

interface MenuPropdownProps {
    isOpen: boolean;
}

function MenuDropdown(props: MenuPropdownProps) {

    return (
        <>  
            { props.isOpen && 
            <MenuContainer>
                <MenuLabel>
                    로그인
                </MenuLabel>
                <MenuLabel>
                    글쓰기
                </MenuLabel>

            </MenuContainer>
            }
        </>
    )
}

const MenuContainer = styled.div`
    font-family: 'NanumSquareRound', 'sans-serif';
    font-weight: 500;

    right: 20px;
    top: 48px;
    width: 100px;

    position: absolute;
    border-radius: 0 0 10px 10px;
    transition: all .2s;
    transform-origin: top;
    z-index: 2;

    background: #fff;
    border: 1px solid #ececec;
    box-sizing: border-box;
    box-shadow: 0 10px 20px 0 rgb(0 0 0 / 5%);

    //font-family: poppins,sans-serif;
    font-size: 11px;
    color: rgba(0,0,0,.9);
    margin: 0;



`

const MenuLabel = styled.a`
    margin: 6px;
    color: #666666;

    font-size: 13px;
    height: 30px;
    background: #fff;

/*
    background-image: linear-gradient(90deg,#F4F4F4 0%,#EFEFEF 100%);
    color: #000;
    opacity: 1;
    border-color: transparent;
*/

    border: 0;
    display: flex;
    justify-content: center;

    cursor: pointer;
    padding: 0 14px;

    position: relative;
    overflow: hidden;
    transition: color .2s,opacity .2s;

    border-radius: 10px;
    //background: #F4F4F4;
    box-sizing: border-box;
    align-items: center;
    flex-shrink: 0;
    text-decoration: none;

    :hover{

        color: #000;
        ::after {
            opacity: .2;
        }
    }

    ::after {
        content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000;
    left: 0;
    top: 0;
    opacity: 0;
    transition: opacity .2s;
    border-radius: 10px;
    overflow: hidden;
    pointer-events: none;
        :hover {
            opacity: .02;
        }
    }

`

export default MenuDropdown;