import GuitarList from "../components/GuitarList";
import Layout from "../components/Layout";


export default function Shop({guitars})  {

    return(
        <Layout>
            <main className="contenedor">
                <h1 className="heading">Our collection</h1>
                <GuitarList
                    guitars={guitars}
                />
            </main>
        </Layout>
    );
};

export async function getServerSideProps() {
    const url = `${process.env.API_URL}/guitars`;
    const guitars = await (await fetch(url)).json();
    return {
        props:{
            guitars
        }
    }
}