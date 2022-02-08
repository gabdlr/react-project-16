import Layout from "../components/Layout";
import Link from "next/link";

export default function AboutUs()  {
    return(
        <Layout>
            <h1>From About Us</h1>
            <Link href={'/'}>Go to home</Link>
        </Layout>
    );
};
