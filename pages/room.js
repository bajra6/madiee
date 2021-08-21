import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import User from "../components/user";
import styles from "../styles/room.module.css"
import Logo from "../components/logo";

const Room = () => {

    const router = useRouter()

    let [people, setPeople] = useState([])

    useEffect(() => {

        const interval = setInterval(() => {
            axios.post("/api/getall", {room: localStorage.getItem("room")})
            .then((response) => {
                setPeople(response.data);
            })
            .catch((error) => console.log(error))
          }, 1000);

          return () => clearInterval(interval);
    }, [])

    return ( 
        <div className={styles.room}>
            <Logo />
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    People in the room
                </div>
                <div className={styles.people}>
                    {people.map((dood) => (
                        <User key={dood._id} name={dood.name} />
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default Room;