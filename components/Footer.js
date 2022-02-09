import Link from "next/link";
import styles from '../styles/Footer.module.css';
const Footer = () => {
    return ( 
        <footer className={styles.footer}>
            <div className={`contenedor ${styles.contenido}`}>
                <nav className={styles.navegacion}>
                    <Link href="/">Home</Link>
                    <Link href="/about-us">About us</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/shop">Store</Link>
                </nav>
                <p className={styles.copyright}>Todos los derechos reservados</p>
            </div>
        </footer>
     );
}
 
export default Footer;