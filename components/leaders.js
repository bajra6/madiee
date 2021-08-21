import styles from "../styles/leaders.module.css"
import Image from "next/image";

const images = [require("../public/cat.png"), require("../public/lion.png"), require("../public/dog.png"), require("../public/elephant.png"), require("../public/hound.png"), require("../public/fox.png")]


const Leaders = (props) => {
    return ( <div className={styles.leaders}>
        <div className={styles.rank}>{props.rank}</div>
        <div className={styles.image}><Image src={images[Math.floor(Math.random() * 6)]} width={75} height={75}/></div>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.point}>{props.point}</div>
    </div> );
}
 
export default Leaders;