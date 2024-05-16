import React, { useContext, useState } from 'react'
// creamos el contexto 
export const CartContext = React.createContext();
// creamos un hook custom para no tener que importar useContext & CartContext
// const useCartContext = () => useContext(CartContext);
// creamos el componente que envuelve los hijos que consuman el context
const CartProvider = ({ children }) => {
    //A continuacion toda la logica que queremos compartir como value : 
    const [cart, setCart] = useState([]);

    const addToCard = (item, newQuantity) => {
        //creamos para luego guardar productos
        let newCart;
        // creamos una variable que nos retorna si un producto ya existe en el cart y lo guardamos el array en la variable product
        let product = cart.find(product => product.id === item.id);
        // si el producto existe (true) , entonces le sumamos la nueva cantidad y lo agregamos al newCart
        if (product) {
            product.quantity += newQuantity;
            newCart = [...cart];
            // si no existe el producto en cart, entonces en product hacemos un spread operator para guardar el item con su nueva cantidad y luego ese producto agregado, hacemos un spread operator en newCart con el cart y el nuevo producto
        } else {
            product = { ...item, quantity: newQuantity };
            newCart = [...cart , product]
        }
        setCart(newCart);
        
    }
    console.log(cart)
    // funcion para sumar precio total
    const totalPrice = () => cart.reduce((acc, product) => acc + product.quantity * product.price,0) 

    // funcion para limpiar el carrito
    const cleanCart = () => setCart([]);
    // funcion para saber si un item existe en el carrito
    const isInCart = (id) => { cart.find(product => product.id === id) ? true : false };
    // funcion para remover un item
    const removeProduct = (id) => {
        setCart(cart.filter(product => product.id !== id));
    }
    
    return (
        <CartContext.Provider value={{
            cleanCart,
            isInCart,
            removeProduct,
            addToCard,
            totalPrice,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider