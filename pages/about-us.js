import Layout from "../components/Layout";
import Image from "next/image";
import styles from '../styles/Aboutus.module.css';
export default function AboutUs()  {
    return(
        <Layout>
         <main className="contenedor">
             <h2 className="heading">About Us</h2>
             <div className={styles.contenido}>
                 <Image layout="responsive" width={600} height={450} alt="about us" src={'/img/nosotros.jpg'}/>
                 <div>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Libero ipsum quos dicta illum sint minima quo nesciunt, 
                        accusantium minus nemo eos officiis expedita incidunt similique rem saepe 
                        ad reiciendis eaque tempore facilis dolorum distinctio. 
                        Aliquam quidem fuga eveniet inventore 
                        incidunt non praesentium commodi corporis quia soluta ab dolor quisquam 
                        porro consequatur maxime, rerum esse accusantium quod earum explicabo quis, 
                        laborum culpa et. Totam, quam inventore quidem adipisci doloremque 
                        voluptatem officia at, eaque ad nesciunt eos unde. Nam!
                     </p>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Libero ipsum quos dicta illum sint minima quo nesciunt, 
                        accusantium minus nemo eos officiis expedita incidunt similique rem saepe 
                        ad reiciendis eaque tempore facilis dolorum distinctio. 
                     </p>
                 </div>
             </div>
         </main>
        </Layout>
    );
};
