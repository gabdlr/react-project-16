import Link from 'next/link';
import Image from 'next/image';
import {formatDate} from '../helpers';
import styles from '../styles/Blogentry.module.css';

const BlogEntry = ({entry}) => {
    const {title, resume, image, published_at, id} = entry;
    return ( 
        <article>
            <Image 
                src={image.url} 
                alt={`blog image ${title}`} 
                width={800} 
                height={600}
                priority="true"
                >
            </Image>
            <div className={styles.content}>
                <h3>{title}</h3>
                <p className={styles.date}>Published at: {formatDate(published_at)}</p>
                <p className={styles.resume}>{resume}</p>
                <Link href={`/blog/${id}`}>
                    <a className={styles.link}>
                        Read more
                    </a>
                </Link>
            </div>

        </article>
    );
}
 
export default BlogEntry;