import styles from "../styles/logo.module.css"
import { useRouter } from "next/router";

const Logo = () => {

    const router = useRouter();

    return ( 
        <>
            <div className={styles.logo}><h1>2Truths1Lie</h1></div>
            <div className={styles.play} onClick={() => router.push("/game")}>Start</div>
        </>
     );
}
 
export default Logo;