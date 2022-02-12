import BlogEntry from "../components/BlogEntry";
import Layout from "../components/Layout";
import styles from "../styles/Blog.module.css";
const Blog = ({entries}) => {
    
    return ( 
        <Layout>
            <main className="contenedor">
                <h2 className="heading">Blog</h2>
                <div className={styles.blog}>
                    {entries.map(entry => (
                        <BlogEntry
                            key={entry.id}
                            entry={entry}
                        />
                    ))}
                </div>
            </main>
            
        </Layout>
    );
}

export async function getStaticProps() {
    
    const url = 'http://localhost:1337/blogs';
    const entries = await (await fetch(url)).json();

    return {
        props:{
            entries
        }
    }
}

export default Blog;