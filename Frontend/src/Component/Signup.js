import React ,{useContext,useReducer} from "react";
import '../Css/Signup.css';
import { useState } from "react";
import { Link, useNavigate,useHistory } from "react-router-dom";
import { Usercontext } from "../App";
import axios from "axios";
 
export default function Signup(){

  const [input, setinput] = useState(" ");
    const  [password, setpassword] = useState(" ");
    const [Email, setEmail] = useState(" ");
    const collectdata =async (e) => { 
      console.log("registration started")
      await axios.post('https://insta-clone-6vph.onrender.com/register',{input,password, Email},{withCredentials:true})
      .then((res)=>{console.log("collected")
    
 
    })
      .catch((err)=>{console.log("GADBAD HO GYA BHAIII ")})
  }


    return(
<>







<Link href="https://fonts.googleapis.com/css?family=Indie+Flower|Overpass+Mono" rel="stylesheet"/>

<div id="wrapper">
  <div class="main-content">
    <div class="header">
      <img src="https://i.imgur.com/zqpwkLQ.png"  className='img' alt="" />
      <span class="subtitle">Sign up to see photos and videos from your friends..</span>
    </div>
    <div class="l-part">
    <input type="text" class="input" placeholder="Full Name" value={input} onChange = {(e)=>  setinput(e.target.value) }/>
			<input type="email" class="input" placeholder="Email" value={Email} onChange = {(e)=>  setEmail(e.target.value) }/>
			<input type="password" class="input" placeholder="Password" value={password} onChange = {(e)=>  setpassword(e.target.value) }/>
      
      </div>
      <button  class="btn mt-4" id="login" onClick={collectdata}>Signup</button>
    </div>

    <div class="sub-content">
    <div class="s-part">
      Do you have an account?<Link to = '/'>Login</Link>
    </div>
  </div>
  </div>



</>


    )
}
