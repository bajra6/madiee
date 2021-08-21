// import Head from 'next/head'
import { useState } from 'react'
import axios from 'axios';
import styles from "../styles/Login.module.css"
import { useRouter } from 'next/router'

export default function Home() {
  
  const router = useRouter()

  const [Room, setRoom] = useState("")
  const [Username, setUsername] = useState("")

  function insert(){
    localStorage.setItem("name", Username)
    localStorage.setItem("room", Room)
    router.push("/details")
  }

  return (
    <div className={styles.loginpage}>
      <div className={styles.logo}>2Truths1Lie</div>
      <div className={styles.caption}>We make rules as we go</div>
      <div className={styles.logindabba}>
        <div><input className={styles.input} type="text" value={Username} onChange={(event) => setUsername(event.target.value)} placeholder="User Name"></input></div>
        <div><input className={styles.input} type="text" value={Room} onChange={(event) => setRoom(event.target.value)} placeholder="Room"></input></div>
        <div className={styles.loginbuttons}>
          <button onClick={insert} className={styles.button}>Enter</button>
        </div>
      </div>
    </div>
  )
}
