// import Head from 'next/head'
import { useState } from 'react'
import { connectToDatabase } from '../lib/mongodb'
import axios from 'axios';
import styles from "../styles/Login.module.css"

export default function Home({ properties }) {
  
  // console.log(properties)

  const [Username, setUsername] = useState("")
  const [Room, setRoom] = useState("")

  function insert(){
    axios.post("/api/insert",{
      name:Username
    })
    .then((response) => console.log(response))
    .catch((error) => console.log("registration unsuccessful"))
  }

  return (
    <div className={styles.loginpage}>
      <div className={styles.logindabba}>
        <div><input type="text" value={Username} onChange={(event) => setUsername(event.target.value)} placeholder="User Name"></input></div>
        <div><input type="text" value={Room} onChange={(event) => setRoom(event.target.value)} placeholder="Password"></input></div>
        <div className={styles.loginbuttons}>
          <button onClick={insert}>Enter</button>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase()

  const data = await db.collection("roomX").find({}).limit(20).toArray();

  const properties = JSON.parse(JSON.stringify(data));

  return {
    props: { properties: properties },
  }
}
