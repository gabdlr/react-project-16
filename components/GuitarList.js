import Guitar from "./Guitar";
import styles from "../styles/Guitarlist.module.css";

const GuitarList = ({guitars}) => {

    return (
        <div className={styles.list}> 
            {guitars.map( guitar => (
                <Guitar
                    key={guitar.id}
                    guitar={guitar}
                />
                )
            )}
        </div>
    );
}
 
export default GuitarList;