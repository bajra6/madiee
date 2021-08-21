import { useEffect, useState } from "react";
import axios from "axios";
import Leaders from "../components/leaders";
import styles from "../styles/leaders.module.css"
import { useRouter } from "next/router";

const Leaderboard = () => {

    const [data, setData] = useState([]);
    const router = useRouter()

    useEffect(() => {
        axios.post("/api/getall", {room: localStorage.getItem("room")})
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => console.log(error))
    }, [])
    
    function handleClick(){
        axios.post("/api/drop", {room: localStorage.getItem("room")})
        .then((response) => {
            router.push("/details")
        })
        .catch((err) => console.log(err))
    }

    function handleClickquit(){
        axios.post("/api/drop", {room: localStorage.getItem("room")})
        .then((response) => {
            router.push("/")
        })
        .catch((err) => console.log(err))
    }

    data.sort((a,b) => (a.p < b.p) ? 1 : ((b.p < a.p) ? -1 : 0))

    return ( <div className={styles.leaderswrapper}>
        <div className={styles.logo}>2Truths1Lie</div>
        <div className={styles.caption}>We make rules as we go</div>
        <div className={styles.leaderssubwrapper}>
        {data.map((person, index) => (<Leaders key={person._id} rank={index+1} name={person.name} point={person.p} />))}
        <div className={styles.quit} onClick={handleClickquit}>Quit</div>
        <div className={styles.playagain} onClick={handleClick}>PlayAgain</div>
        </div>
    </div> );
}
 
export default Leaderboard;