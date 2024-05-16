import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import style from './main.module.css'
import Button from '../Button';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const CartWiew = () => {
    const { cart } = useContext(CartContext);
    const { totalPrice , removeProduct, cleanCart} = useContext(CartContext);

    if (cart.length == 0) {
        return <div className={style.containerCardEmpty}>
                    <h2>Your cart is empty...</h2>
                    <Link to='/'>
                        <Button value="Keep exploring"/>
                    </Link>
                </div>
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(product => (
                        <tr key={product.id}>
                        <td><img className={style.imgTable} src={product.images} alt="Producto"/></td>
                            <td>{product.title}</td>
                            <td>${product.price}</td>
                            <td>{product.quantity}</td>
                            <td className={style.subtotal}>${product.quantity * product.price}</td>
                        <td className="acciones"><button onClick={()=>removeProduct(product.id)}><DeleteOutlineIcon/></button></td>
                    </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="3"></td>
                        <td><strong>Final Price:</strong></td>
                        <td class={style.subtotal}>${totalPrice()}</td>
                        <td><button onClick={()=>cleanCart()}>Clean Cart</button></td>
                    </tr>
                </tfoot>
            </table>
            <div className={style.containerPurchase}>
                <Link to='/checkout'>
                    <Button value='Generate Purchase'/>
                </Link>
                
            </div>
            
        </div>
    )
}

export default CartWiew