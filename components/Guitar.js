import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Guitar.module.css";

const Guitar = ({guitar}) => {
    const {name, description, image, price, item} = guitar;
    return ( 
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
                <Link href={`/guitars/${item}`}>
                    <a className={styles.link}>See this product</a>
                </Link>
            </div>
        </div>
    );
}
 
export default Guitar;