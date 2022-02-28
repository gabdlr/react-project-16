import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Shoppingcart.module.css";
import { useState, useEffect } from "react";
const ShoppingCart = ({cart, updateProductQuantity, removeProduct}) => {
    const [total, setTotal] = useState(0);
    useEffect(()=>{
        const cartTotal = cart.reduce((total, product) => total + (product.price * product.qty),0);
        console.log(cartTotal);
        setTotal(cartTotal);
    },[cart]);
    return (
        <Layout>
            <h1 className="heading">Shopping cart</h1>
            <main className={`${styles.content} contenedor`}>
                <div className={styles.cart}>
                    <h3>Products:</h3>
                    {cart.length === 0 ? <h1>You haven&apos;t add any product to your shopping cart yet!</h1> 
                    : 
                    
                    (cart.map( product => (
                       <div key={product.id} className={styles.product}>
                           <div>
                               <Image
                                layout="responsive" 
                                width={250} 
                                height={480}
                                src={product.image}
                                alt={product.name}
                                />
                           </div>
                           <div>
                               <p className={styles.name}>{product.name}</p>
                               <div className={styles.quantity}>
                               <p>Quantity: </p>
                               <select 
                                name="" 
                                id="" 
                                value={product.qty} 
                                className={styles.select} 
                                onChange={ e => updateProductQuantity({
                                    id: product.id,
                                    qty: e.target.value 
                                })}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                               </div>
                               <p className={styles.price}>$ 
                               <span>{product.price}</span></p>
                               <p className={styles.subtotal}>Subtotal: {" "} 
                               <span>${product.price * product.qty}</span>
                               </p>
                               <button 
                                type="button"
                                className={styles.remove}
                                onClick={() => removeProduct(product.id)}
                                >
                                    X
                                </button>
                           </div>
                       </div>
                    )))}
                </div>
                <div className={styles.summary}>
                    { total > 0 ? 
                    (
                        <>
                        <h3>Order summary:</h3>
                        <p>Order total: {total}</p>
                        </>
                    )
                    : <p>No products added to shopping cart</p>
                    }
                </div>
            </main>
        </Layout> 
    );
}
 
export default ShoppingCart;