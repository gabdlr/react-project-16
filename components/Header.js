import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from '../styles/Header.module.css';
export const Header = ({guitar}) => {

    const router = useRouter();

    return ( 
        <header className={styles.header}>
            <div className="contenedor">
                <div className={styles.bar}>
                    <Link href="/" passHref>
                        <a>
                            <Image src="/img/logo.svg" alt="Logo" width={400} height={100}></Image>
                        </a>
                    </Link>
                    <nav className={styles.navigation}>
                        <Link href="/">Home</Link>
                        <Link href="/about-us">About us</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/shop">Store</Link>
                        <Link href="/cart">
                            <a>
                                <Image layout="fixed" width={30} height={25} src="/img/carrito.png" alt="shopping cart"/>
                            </a>
                        </Link>
                    </nav>
                </div>
                {guitar && (
                    <div className={styles.guitar_model}>    
                        <h2>Model {guitar.name}</h2>
                        <p>{guitar.description}</p>
                        <p className={styles.price}>$ {guitar.price}</p>
                        <Link href={`/shop/guitars/${guitar.item}`}>
                            <a className={styles.link}>See this product</a>
                        </Link>
                    </div>
                )}
            </div>
            {router.pathname === "/" && (
                <div className={styles.guitar_banner}>
                    <Image layout="fixed" width={500} height={1200}  src="/img/header_guitarra.png" alt="imagen header guitarra"/>
                </div>
            )}
        </header>
     );
}

export default Header;