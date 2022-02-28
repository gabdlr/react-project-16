import { useState } from "react";
import Image from "next/image";
import Layout from "../../../components/Layout";
import styles from "../../../styles/Guitar.module.css";

const Item = ({guitar, addProductToCart}) => {
    const [qty, setQty] = useState(1);
    const {id, name, price, image, description} = guitar[0];

    const handleSubmit = e => {
        e.preventDefault();
        if (qty < 1) return;
        
        //Add to cart
        const selectedGuitar = {
            id,
            image: image.url,
            name,
            price,
            qty
        };

        addProductToCart(selectedGuitar);
    }
    return (
        <Layout> 
            <div className={styles.guitar}>
                <Image
                    layout="responsive"
                    width={180}
                    height={500}
                    src={image.url}
                    alt={name}
                    priority="true"
                />
                <div className={styles.content}>
                    <h3>{name}</h3>
                    <p className={styles.description}>{description}</p>
                    <p className={styles.price}>${price}</p>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <label>Quantity</label>
                        <select name="" id="" value={qty} onChange={e => setQty(+e.target.value)}>
                            <option value="" disabled>--Choose an option--</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <input type="submit" value="Add to cart" />
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export async function getServerSideProps({query: {item}}) {
    const url = `${process.env.API_URL}/guitars?item=${item}`;
    const guitar = await(await fetch(url)).json();
    return {
        props: {
            guitar
        }
    }
}
export default Item;