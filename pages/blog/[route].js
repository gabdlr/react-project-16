import Image from "next/image";
import Layout from "../../components/Layout";
import { formatDate } from "../../helpers";
import styles from "../../styles/Blogentry.module.css";

const BlogEntry = ({entry}) => {
    const {title, image, published_at, content} = entry[0];

    return (
        <Layout> 
            <main className="contenedor">
                <h1 className="heading">{title}</h1>
                <article className={styles.entry}>
                    <Image 
                        layout="responsive" 
                        width={800} 
                        height={600} 
                        src={image.url} 
                        alt={title}
                    />
                    <div className={styles.content}>
                        <p className={styles.date}>{formatDate(published_at)}</p>
                        <p className={styles.text}>{content}</p>
                    </div>
                </article>
            </main>
        </Layout>
    );
}

export async function getStaticPaths() {

    const url = `${process.env.API_URL}/blogs`;
    const entries = await (await fetch(url)).json();
    const paths = entries.map(entry => ({
            params: {
                route: entry.entry
            }
        })
    );

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: { route }}) {

    const url = `${process.env.API_URL}/blogs?entry=${route}`;
    const entry = await (await fetch(url)).json();

    return {
        props: {
            entry
        }
    }
}

export default BlogEntry;