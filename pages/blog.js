
import Layout from "../components/Layout";
import BlogList from "../components/BlogList";

const Blog = ({entries}) => {
    
    return ( 
        <Layout>
            <main className="contenedor">
                <BlogList
                    entries={entries}
                />
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