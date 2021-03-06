import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/details.module.css"

const Details = () => {

    const router = useRouter()

    const [t1, setT1] = useState("");
    const [t2, setT2] = useState("");
    const [l1, setL1] = useState("");

    let [Username, setUsername] = useState(null);
    let [Room, setRoom] = useState(null);

    useEffect(() => {
        Username = setUsername(localStorage.getItem("name"))
        Room = setRoom(localStorage.getItem("room"))

        // console.log(Username, Room)

        if (typeof window !== "undefined") {
            if(Username === null || Room === null){
                router.push("/")
            }
        }

    },[]);


    function handleSubmit(){
        axios.post("/api/insert",{
            name: Username,
            room: Room,
            t1: t1, 
            t2: t2,
            l1: l1,
            p: 0
          })
          .then((response) => {
              console.log(response)
              console.log(response.data.insertedId)
              localStorage.setItem("id", response.data.insertedId)
              router.push("/room")
            })
          .catch((error) => console.log("registration unsuccessful"))
    }

    return ( 
        <div className={styles.detailspage}>
            <div className={styles.logo}>2Truth1Lie</div>
            <div className={styles.caption}>We make rules as we go</div>
            <div className={styles.wrapper}>
                <textarea className={styles.input} type="text" placeholder="truth" value={t1} onChange={(event) => setT1(event.target.value)}></textarea>
                <textarea className={styles.input} type="text" placeholder="truth" value={t2} onChange={(event) => setT2(event.target.value)}></textarea>
                <textarea className={styles.input} type="text" placeholder="lie" value={l1} onChange={(event) => setL1(event.target.value)}></textarea>
                <button className={styles.button} onClick={handleSubmit}>Submit</button>
            </div>
        </div> );
}
 
export default Details;