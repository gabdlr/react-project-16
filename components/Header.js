import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Header.module.css';
export const Header = () => {
    return ( 
        <header className={styles.header}>
            <div className="contenedor">
                <Link href="/" passHref>
                    <Image src="/img/logo.svg" alt="Logo" width={400} height={100}></Image>
                </Link>
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/aboutUs">About us</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/store">Store</Link>
                </nav>
            </div>
        </header>
     );
}
 
export default Header;