import Link from "next/link";
import styles from "../styles/Course.module.css";
const Course = ({course}) => {
    const {title, content, image} = course;
    return (  
        <section>
            <div className={`contenedor ${styles.grid}`}>
                <div className={styles.content}>
                    <h2 className="heading">{title}</h2>
                    <p className={styles.text}>{content}</p>
                    <Link href="/" passHref>
                        <a className={styles.link}>More info</a>
                    </Link>
                </div>
            </div>
            <style jsx>{
                `
                section {
                    padding: 10rem 0;
                    margin-top: 10rem;
                    background-image: linear-gradient(to right, rgb( 0 0 0 / .65), rgb( 0 0 0 / .7)), 
                    url("${image.url}");
                    background-size: cover;
                    background-position: 50%;
                }
                `
            }

            </style>
        </section>
     );
}
 
export default Course;