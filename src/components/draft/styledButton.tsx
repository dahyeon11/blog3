import React, { Component } from 'react';

type styleButtonProps = {
    onToggle: any
    active: any
    label: any
    style: any
}

const StyleButton: React.FC<styleButtonProps> = (props) => {
    let className = 'RichEditor-styleButton';
    if (props.active) {
      className += ' RichEditor-activeButton';
    }

    const onToggle = (e: React.MouseEvent) => {
        e.preventDefault();
        props.onToggle(props.style)
    }
    return (
        <span className={className} onMouseDown={onToggle}>
          {props.label}
        </span>
    )
}

export default StyleButton;