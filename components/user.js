import styles from "../styles/user.module.css"
import Image from "next/image"

const User = (props) => {

    const images = [require("../public/cat.png"), require("../public/lion.png"), require("../public/dog.png"), require("../public/elephant.png"), require("../public/hound.png"), require("../public/fox.png")]



    return ( 
        <div className={styles.user}>
            <Image src={images[Math.floor((Math.random() * 6))]} width={150} height={150} className={styles.image}></Image>
            <div className={styles.name}>{props.name}</div>
        </div>
     );
}
 
export default User;
