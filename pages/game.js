import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/game.module.css";
import GameRoom from "../components/gameroom"

const Game = () => {

    let [data, setData] = useState([])

    let [Username, setUsername] = useState(null);
    let [Room, setRoom] = useState(null);

    useEffect(() => {

        Username = setUsername(localStorage.getItem("id"))
        Room = setRoom(localStorage.getItem("room"))

        // console.log(Username, Room)

        if (typeof window !== "undefined") {
            if(Username === null || Room === null){
                router.push("/")
            }
        }

        axios.post("/api/getall", {room: localStorage.getItem("room")})
            .then((response) => {
                setData(response.data);
                // console.log(data, localStorage.getItem("room"), response.data);
            })
            .catch((error) => console.log(error))
    }, [])

    let shuffled = data
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)

    return ( <div className={styles.gameroom}>
        <div className={styles.logo}>2Truths1Lie</div>
        <div className={styles.caption}>We make rules as we go</div>
        <GameRoom data={shuffled} room={Room} name={Username}/>
    </div> );
}
 
export default Game;