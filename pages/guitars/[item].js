import Image from "next/image";
import Layout from "../../components/Layout";
import styles from "../../styles/Guitar.module.css";

const Item = ({guitar}) => {
    const {name, price, image, description} = guitar[0];
    return (
        <Layout> 
            <div className={styles.guitar}>
                <Image
                    layout="responsive"
                    width={180}
                    height={350}
                    src={image.url}
                    alt={name}
                    priority="true"
                />
                <div className={styles.content}>
                    <h3>{name}</h3>
                    <p className={styles.description}>{description}</p>
                    <p className={styles.price}>${price}</p>
                    <form className={styles.form}>
                        <label>Quantity</label>
                        <select name="" id="">
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