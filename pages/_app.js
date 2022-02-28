import { useState, useEffect } from "react";
import '../styles/normalize.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([]);

  useEffect(()=> {
    const lsCart = JSON.parse(localStorage.getItem('cart')) ?? [];
    setCart(lsCart);
  }, []);

  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cart));
  },[cart]);

  const addProductToCart = product => {
    if(cart.some( item => item.id === product.id)){
      const updatedCart = cart.map( item => {
        if(item.id === product.id){
          item.qty = product.qty;
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, product])
    }
  }

  const updateProductQuantity = product => {
    const updatedCart = cart.map( item => {
      if(item.id === product.id){
        item.qty = product.qty;
      }
      return item;
    });
    setCart(updatedCart);
  }

  const removeProduct = id => {
    if(confirm("Are you sure you want to remove this item from your shopping cart?")){
      const updatedCart = cart.filter( item => item.id != id);
      setCart(updatedCart);
    }
  }
  return <Component {...pageProps} 
          cart = {cart} 
          addProductToCart = {addProductToCart}
          updateProductQuantity = {updateProductQuantity}
          removeProduct = {removeProduct}
          />
}

export default MyApp
