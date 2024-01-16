import React from 'react';
import './Button.module.scss';

const ButtonTypes = {
    back: 'back',
    border: 'border'
}
export const ButtonComponent = ({ onClick, children, buttonType }) => {
    return (
        <button className={`buttons  ${ButtonTypes[buttonType]} alt-bg text`} onClick={onClick}>
            {children}
        </button>
    )
}
