import React from 'react';
import '../Css/Login.css';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";



 export default function Login(){
  const [LEmail, setLEmail] = useState(" ");
  const  [Lpassword, setLpassword] = useState(" ");
  const navigate = useNavigate() ;

  const Checkdatas = async () => {
    console.log("checking");
   await axios.post('https://insta-clone-6vph.onrender.com/login',{LEmail,Lpassword},{withCredentials:true})
   .then((users) => { 
   console.log("login in")
  
  
  
   
  
  })
   .catch((error) => {console.log("error")});
    
  };



    return(
      <div>








  <Link href="https://fonts.googleapis.com/css?family=Indie+Flower|Overpass+Mono" rel="stylesheet"/>

<div id="wrappers">
  <div class="main-contents">
    <div class="headers">
      <img src="https://i.imgur.com/zqpwkLQ.png"  className='img' alt="" />
    </div>
    <div class="l-part">
      <input type="email" placeholder=" email" class="input-11" value={LEmail}  onChange = {(e)=>  setLEmail(e.target.value) } />
      <div class="overlap-texts">
        <input type="password" placeholder="Password" class="input-22" value={Lpassword}  onChange = {(e)=>  setLpassword(e.target.value) } />
      
      </div>
      <button  class="btn mt-4" id="login" onClick={Checkdatas}>Login</button>
    </div>
  </div>
  <div class="sub-contents">
    <div class="s-parts">
      Don't have an account?<Link to = '/'>Sign up</Link>
    </div>
  </div>
</div>











      </div>
    )
 }
