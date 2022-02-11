import { useEffect } from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const Blog = () => {
    
    useEffect(() => {
        const callAPI = async () => {
            const url = 'http://localhost:1337/blogs';
            const response = await (await fetch(url)).json();
            console.log(response);
        }
        callAPI();
    },[]);

    return ( 
        <Layout>
            <h1>From Blog</h1>
        </Layout>
     );
}
 
export default Blog;