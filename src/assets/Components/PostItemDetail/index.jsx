import React, { useContext, useState }  from 'react'
import style from './postItemDetail.module.css'
import ItemQuantitySelector from '../ItemQuantitySelector';
import AddItemButton from '../AddItemButton';
import Button from '../Button';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PostItemDetail = ({ products }) => {
    const [gotocard, setGotocard] = useState(false);
    const [counter, setCounter] = useState(1);
    const sumarContador = () => { setCounter(counter + 1) };
    const restarContador = () => { setCounter(counter > 1 ? counter - 1 : counter) }
    const { addToCard } = useContext(CartContext);
    const addItem = () => {
        setGotocard(true)
        addToCard(products, counter);
        toast.success('Product Added!', {
            position: "bottom-right",
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    }
    return (
        <div className={style.container}>
            <div className={style.details}>
                <div className='big-img'>
                    <img src={products.images} alt="" />
                </div>
                <div className={style.box}>
                    <div className={style.row}>
                        <h2>{products.title}</h2>
                    </div>
                    <span> $ {products.price} </span>
                    <p>DESCRIPCION :</p>
                    <p>{products.description}</p>
                    <ItemQuantitySelector quantity={counter} sumarContador={sumarContador} restarContador={restarContador} />
                    {gotocard ? <Link to='/'><Button value='KEEP BUYING' /></Link>
                        : <AddItemButton products={products} onClick={addItem} quantity={counter} />}
                    
                    <Link to='/cart'>
                        <Button value="GO TO CART"/>
                    </Link>
                    <ToastContainer
                        position="bottom-right"
                        autoClose={3500}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />

                </div>
            </div>
        </div>
    )
}

export default PostItemDetail