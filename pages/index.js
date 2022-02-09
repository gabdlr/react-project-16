import Link from 'next/link';
import Layout from '../components/Layout';
export default function Home() {
  return (
    <Layout>    
        <h1>
         Hello World  !
        </h1>
        <Link href={'/about-us'}>About Us</Link>
    </Layout>
  )
}
