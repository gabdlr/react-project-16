import Link from "next/link";
import Layout from "../components/Layout";

const Blog = () => {
    return ( 
        <Layout>
            <h1>From Blog</h1>
            <Link href={'/'}>Go to home</Link>
        </Layout>
     );
}
 
export default Blog;