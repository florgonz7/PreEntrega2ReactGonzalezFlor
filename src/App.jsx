import { Container } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './assets/Components/ItemDetailContainer';
import PostList from './assets/Components/PostList';
import ResponsiveAppBar from './assets/Components/ResponsiveAppBar';
import database from "../database/firebase-config";
import { getDocs, collection } from "firebase/firestore";
import Spinner from './assets/Components/Spinner';
import CartProvider, { CartContext } from './assets/contexts/CartContext';
import CartWiew from './assets/Components/CardWiew';
import Checkout from './assets/Components/Checkout';



function App() {
  const [products, setProducts] = useState(null);
  const { name } = useParams();
  const urlApi = "https://api.escuelajs.co/api/v1/products?offset=0&limit=35";

  // referencia a los productos de nuestra database (firesotre)
  const productsRef = collection(database, "productos");

  // funcion que nos trae la colleccion de firestore
  const getProductsRef = async () => {
    const itemsCollection = await getDocs(productsRef);
    const itemsData = itemsCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setProducts(itemsData);
  }
  useEffect(() => {
    setTimeout(() => {
      
      getProductsRef();
    }, 500);
  }, []);

  if (!products) {
    return <Spinner/>;
  }

  return (
    <div>
      {/* //Componente que provee el valor del context y envuelve los hijos */}
      <CartProvider>
      <ResponsiveAppBar />
        {/* //dentro del CartProvider irian los hijos que consumiran el context */}
        <Routes>
          <Route path='/' element={<PostList products={products} />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/category/:name' element={<PostList products={products} />} />
          <Route path='/cart' element={<CartWiew />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </CartProvider>
      
    </div>
  )
}

export default App

// como usar useEffect con Apis
    // useEffect(() => {
    //   const getProducts = async () => {
    //     const { data } = await axios(urlApi);
    //     setProducts(data);
    //     console.log(data);
    //     console.log("filtrado");
    //   }
  
    //   getProducts();
    // }, [name]);