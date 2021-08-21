import { useState, useEffect } from "react";
import router, { useRouter } from "next/router";
import axios from "axios";
import styles from "../styles/game.module.css"

const GameRoom = (props) => {

    const data = props.data;

    const router = useRouter()

    const [points, increasePoints] = useState(0);
    const [random, setRandom] = useState(Math.floor(Math.random() * 3));


    function onMouseClick( id, color){
        document.getElementById(id).style.backgroundColor=color;
    }

    const [I, increaseI] = useState(0)

    function changeBg(){
        document.getElementById(I + "t1").style.backgroundColor="beige";
        document.getElementById(I + "t2").style.backgroundColor="beige";
        document.getElementById(I + "l1").style.backgroundColor="beige";
    }

    function generateLeaderboard(){
        axios.post("/api/update", {point : points, name: props.name, room: props.room})
            .then((response) => {
                router.push("/leaderboard");
            })
            .catch((error) => console.log(error))
    }

    if(data.length != 0){

        if(random === 0){
            return(
                <div>
                    <div className={styles.points}>Points: {points}</div>
                    <div onClick={() => onMouseClick(I + "t1", "red")} id= {I+"t1"} className={styles.truths} >{data[I].t1}</div>
                    <div onClick={() => onMouseClick(I + "t2", "red")} id= {I+"t2"} className={styles.truths} >{data[I].t2}</div>
                    <div id= {I+"l1"} className={styles.truths} onClick={() => {increasePoints(points+100); onMouseClick(I + "l1", "green")}}>{data[I].l1}</div>
                    <div className={styles.buttonwrapper}>{I!==data.length-1?<button className={styles.button} onClick={() => { changeBg(); increaseI(I+1); setRandom(Math.floor(Math.random() * 3))}}>Next</button>:<button className={styles.button} onClick={generateLeaderboard}>Leaderboard</button>}</div>                </div>
            )
        } else if(random === 1){
            return(
                <div>
                    <div className={styles.points}>Points: {points}</div>
                    <div id={I + "l1"} className={styles.truths} onClick={() => {increasePoints(points+100); onMouseClick(I + "l1", "green")}}>{data[I].l1}</div>
                    <div onClick={() => onMouseClick(I + "t2", "red")} id={I + "t2"} className={styles.truths} >{data[I].t1}</div>
                    <div onClick={() => onMouseClick(I + "t1", "red")} id={I + "t1"} className={styles.truths} >{data[I].t2}</div>
                    <div className={styles.buttonwrapper}>{I!==data.length-1?<button className={styles.button} onClick={() => { changeBg(); increaseI(I+1); setRandom(Math.floor(Math.random() * 3))}}>Next</button>:<button className={styles.button} onClick={generateLeaderboard}>Leaderboard</button>}</div>
                </div>
            )
        } else {
            return(
                <div>
                    <div className={styles.points}>Points: {points}</div>
                    <div onClick={() => onMouseClick(I + "t1", "red")} id={I + "t1"} className={styles.truths} >{data[I].t1}</div>
                    <div id={I + "l1"} className={styles.truths} onClick={() => {increasePoints(points+100); onMouseClick(I + "l1", "green")}}>{data[I].l1}</div>
                    <div onClick={() => onMouseClick(I + "t2", "red")} id={I + "t2"} className={styles.truths} >{data[I].t2}</div>
                    <div className={styles.buttonwrapper}>{I!==data.length-1?<button className={styles.button} onClick={() => { changeBg(); increaseI(I+1); setRandom(Math.floor(Math.random() * 3))}}>Next</button>:<button className={styles.button} onClick={generateLeaderboard}>Leaderboard</button>}</div>                </div>
            )
        }

        
    } else {
        return <></>
    }

}
 
export default GameRoom;