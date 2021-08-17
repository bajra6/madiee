// import Head from 'next/head'
import { useState } from 'react'
import { connectToDatabase } from '../lib/mongodb'
import axios from 'axios';
import { sha256 } from 'js-sha256';
import styles from "../styles/Login.module.css"

export default function Home({ properties }) {
  
  // console.log(properties)

  const [Username, setUsername] = useState("")
  const [Password, setPassword] = useState("")

  function insert(){
    axios.post("/api/insert",{
      name:sha256(Username),
      pass:sha256(Password)
    })
    .then((response) => console.log(response))
    .catch((error) => console.log("registration unsuccessful"))
    setUsername("")
    setPassword("")
  }

  function validate(){
    axios.post("/api/checkuser",{
      name:sha256(Username),
      pass:sha256(Password)
    })
    .then((response) => {
      if (response.data.length === 0){
        console.log("booo try again")
      }
      else{
        console.log("logged in wow");
      }
    })
    .catch((error) => console.log(error))
    setUsername("")
    setPassword("")
  }

  return (
    <div className={styles.loginpage}>
      <div className={styles.logindabba}>
        <div><input type="text" value={Username} onChange={(event) => setUsername(event.target.value)} placeholder="User Name"></input></div>
        <div><input type="text" value={Password} onChange={(event) => setPassword(event.target.value)} placeholder="Password"></input></div>
        <div className={styles.loginbuttons}>
          <button onClick={validate}>Login</button>
          <button onClick={insert}>Register</button>
        </div>
      </div>
      {/* {console.log(properties)} */}
    </div>
  )
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase()

  const data = await db.collection("users").find({}).limit(20).toArray();

  const properties = JSON.parse(JSON.stringify(data));

  return {
    props: { properties: properties },
  }
}
