import React, { useContext } from 'react';
import style from './main.module.css';
import { CartContext } from '../../contexts/CartContext';

const AddItemButton = ({ onClick }) => {
    const { addToCart } = useContext(CartContext); // Corregido: Cambiado de addToCard a addToCart
    return (
        <button onClick={onClick} className={style.buttonAddToCard}>ADD TO CART</button>
    );
};

export default AddItemButton;
