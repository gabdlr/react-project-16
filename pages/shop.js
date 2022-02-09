import Layout from "../components/Layout";
import Link from "next/link";

export default function Shop()  {
    return(
        <Layout>
            <h1>From Virtual Shop</h1>
            <Link href={'/'}>Go to home</Link>
        </Layout>
    );
};
