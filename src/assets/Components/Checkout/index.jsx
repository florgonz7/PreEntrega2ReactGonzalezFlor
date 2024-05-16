import React, { useContext, useState } from 'react';
import style from './checkout.module.css';
import Button from '../Button';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { CartContext } from '../../contexts/CartContext';

const Checkout = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [orderconfirm, setOrderconfirm] = useState(false);
    const [orderid, setOrderid] = useState('');
    const { cart, totalPrice, cleanCart } = useContext(CartContext);
    
    const order = {
        buyer: {
            fullName: fullname,
            email: email,
            address: address,
            phone: phone
        },
        products: cart.map(product => ({ id: product.id, title: product.title, quantity: product.quantity, price: product.price })),
        totalPrice: totalPrice()
    }

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const database = getFirestore();
            const ordersCollection = collection(database, "orders");
            const docRef = await addDoc(ordersCollection, order);
            setOrderid(docRef.id);
            alert('Order generated successfully');
            setOrderconfirm(true);
            cleanCart();
        } catch (error) {
            console.error("Error adding document: ", error);
            alert('Error generating order. Please try again later.');
        }
    }

    if (orderconfirm) {
        return <div>
            <p>Thank you for shopping at Market Day. Your order number is: {orderid}</p>
        </div>
    }
    
    return (
        <div className={style.card}>
            <div className={style.cardHeader}>
                <div className={style.textHeader}>CHECK OUT</div>
            </div>
            <div className={style.cardBody}>
                <form onSubmit={handleClick}>
                    <div className={style.formGroup}>
                        <label htmlFor="fullname">Full Name:</label>
                        <input required className={style.formControl} name="fullname" id="fullname" type="text" onChange={e => setFullname(e.target.value)} />
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor="email">Email:</label>
                        <input required className={style.formControl} name="email" id="email" type="email" onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor="confirm-mail">Confirm Email:</label>
                        <input required className={style.formControl} name="confirm-mail" id="confirm-mail" type="email" />
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor="address">Address:</label>
                        <input required className={style.formControl} name="address" id="address" type="text" onChange={e => setAddress(e.target.value)} />
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor="phone">Phone:</label>
                        <input required className={style.formControl} name="phone" id="phone" type="text" onChange={e => setPhone(e.target.value)} />
                    </div>
                    <Button type='submit' value='Generate Order'/>
                </form>
            </div>
        </div>
    );
}

export default Checkout;
