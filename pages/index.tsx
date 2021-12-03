import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {COMPANY_NAME} from "../Data/ConstData"
import {userLogin} from "../Apicall/User"
import { useState } from 'react'
const Home: NextPage = (props:any) => {
  let [username,setUserName]=useState("");
  let [password,setPassword]=useState("");
  let [authMsg,setAuthMsg]=useState("");
  let [error,setError]=useState({
    username:false,
    password:false
  })
  function loginCall(){
    error.username=false;
    error.password=false;
    if(!username)
       error.username=true;
    if(!password)
       error.password=true;
     setError({...error});
     if(!error.username || !error.password ){
      userLogin(username,password)
      .then((loginData)=>{
          if(props && props.loginSuccess){
            props.loginSuccess(loginData)
          }
          setAuthMsg("Success");
      })
      .catch((err)=>{
          setAuthMsg("authentication failed.")
      })
    }
  }
  return (
    <div  className={styles.flexRowCenter} style={{marginTop:"2rem"}}>
      <div className={styles.flexColCenter}>
    <h1 className={styles.textAlignCenter}> {COMPANY_NAME} </h1>  
    <div className={styles.form}>
      <div className={styles.flexRowCenter} style={{color:"#cf5c0f"}}>{authMsg}</div>  
        <div className="container">   
            <label>Username : </label>   
            <input 
               className={styles.input} 
               type="text" 
               placeholder="Enter Username" 
               name="username"
               onChange={(e)=>{
                 setUserName(e.target.value)
               }} 
            />
            {
               error.username &&
               <div className={styles.error}>*Required</div>
            }  
            <label>Password : </label>   
            <input 
               type="password" 
               className={styles.input} 
               placeholder="Enter Password" 
               name="password"
               onChange={(e)=>{
                setPassword(e.target.value)
              }} 
               />
            {
               error.password &&
               <div className={styles.error}>*Required</div>
            }  
            <button type="submit" className={styles.button} onClick={loginCall}>Login</button>     
        </div>   
    </div>
    </div>     
    </div>
  )
}

export default Home
