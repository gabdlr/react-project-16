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
                            entryInformation={entry}
                        />
                    ))}
                </div>
            </main>
            
        </Layout>
    );
}

export async function getStaticProps() {
    
    const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`;
    const entries = await (await fetch(url)).json();

    return {
        props:{
            entries
        }
    }
}

export default Blog;