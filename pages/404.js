import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Notfound.module.css";

const NotFound = () => {
    return ( 
        <Layout>
            <div className={styles.not_found}>
                <h1 className="heading">Page not found</h1>
                <Link href={'/'}>Go back to start</Link>
            </div>
        </Layout>
     );
}
 
export default NotFound;