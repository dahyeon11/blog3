import React from 'react';
import styled from 'styled-components';

type styleButtonProps = {
    onToggle: any
    active: any
    label: any
    style: any
}

const StyleButton: React.FC<styleButtonProps> = (props) => {
    const onToggle = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.preventDefault();
        props.onToggle(props.style)
    }
    return (
        <Button onMouseDown={onToggle} active={props.active}>
          {props.label}
        </Button>
    )
}

const Button = styled.span<{active: boolean}>`
    color: ${props => props.active ? "#5890FF" : "#999"};
    cursor: pointer;
    margin-right: 16px;
    padding: 2px 0;
    display: inline-block;
`

export default StyleButton;