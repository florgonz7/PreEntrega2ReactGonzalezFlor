import React from 'react';
import style from './button.module.css';

const Button = ({ value, onClick, type }) => {
    return (
        <button type={type} className={style.buttonAddToCard} onClick={onClick}>{value}</button>
    );
};

export default Button;
