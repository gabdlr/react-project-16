import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Header.module.css';
export const Header = () => {
    return ( 
        <header className={styles.header}>
            <div className="contenedor">
                <div className={styles.bar}>
                    {/* <Link href="/" passHref> */}
                        <Image src="/img/logo.svg" alt="Logo" width={400} height={100}></Image>
                    {/* </Link> */}
                    <nav className={styles.navigation}>
                        <Link href="/">Home</Link>
                        <Link href="/about-us">About us</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/shop">Store</Link>
                    </nav>
                </div>
            </div>
        </header>
     );
}
 
export default Header;