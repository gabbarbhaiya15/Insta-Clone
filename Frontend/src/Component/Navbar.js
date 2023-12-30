import React, { useState } from "react";
import {navigate,Link} from "react-router-dom";
import { Tooltip } from 'react-tippy';

import instalogo from "../Image/instagramLogo.png";
import Home from      "../Image/home.png";
import white_home from "../Image/white_home.png";
import post from"../Image/post.png";
import axios from  'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tippy/dist/tippy.css';
import '../Css/Navbar.css'

export default function Navbar(){

const [home,sethome]= useState("true");
const [search,setsearch]= useState("");
const [userDetail,setuserDetail]= useState([])
function clicked(){
  sethome(prevstate=>!prevstate);
}
const fetchuser= async(query) =>{
  setsearch(query);
await axios.post("http://localhost:5000/search",{query},{withcredentials:true})
.then((res)=>{
  console.log(res.data);
  const dataarray= res.data.map(item=>item) 
  console.log(dataarray);
  setuserDetail(dataarray)
})
.catch((error)=>{
  "error in searching"
})
}

return(
    <>

    <nav  className="d-flex ">
    <img src={instalogo}    alt=""  className="" id="instalogo" />
    <div class="group">
    
 <div className="d-flex">
  <span> <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg></span>
  <input placeholder="Search"
   type="search"
    class="searchinput"
    value={search}
    onChange={(e)=>fetchuser(e.target.value)}
    
    />
   

    </div>
    <ul className="list-group" id="collection">
      {
      userDetail.map((items)=> {
        return(
       <Link to= {`/profile/${items._id}`}>
          <li className="list-item">{items.Email}</li>
       </Link>
        )

        })
      }
    </ul>

<div id="logos">

<Link to="/" className="post-logo"  >
  
  <Tooltip
  title="Home"
  position="bottom"
  trigger="mouseenter"
  >
<img src={Home} alt="" class ="home-icon" />


</Tooltip>

</Link>



<Link to ="/signup" className="post-logo">  <Tooltip title="Signup" position ="bottom" trigger="mouseenter"  > <img  src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/26/external-add-user-tanah-basah-glyph-tanah-basah-2.png" alt="external-add-user-tanah-basah-glyph-tanah-basah-2"/></Tooltip> </Link>
<Link to="/login" className="post-logo"><Tooltip title="Login" position="bottom" trigger="mouseenter" ><img    src="https://img.icons8.com/external-glyph-design-circle/26/external-login-photography-glyph-design-circle.png" alt="external-login-photography-glyph-design-circle"/></Tooltip></Link>
<Link to="/post" className="post-logo"><Tooltip title="Post" position="bottom" trigger="mouseenter"><img  src="https://img.icons8.com/ios/26/plus-2-math.png" alt="plus-2-math"/></Tooltip></Link>
{ //<Link to="/friendspost" className="post-logo">Fpost</Link>
}
<Link to="/" className="post-logo"><Tooltip title="DM" position="bottom" trigger="mouseenter"><img  src="https://img.icons8.com/ios-filled/26/telegram-app.png" alt="telegram-app"/></Tooltip></Link>
<Link to="/" className="post-logo"><Tooltip title="Likes" position="bottom" trigger="mouseenter"><img  src="https://img.icons8.com/ios/26/like--v1.png" alt="like--v1"/></Tooltip></Link>
<Link to="/profile" className="profile-logo">
<img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww'
        alt=''
        id='profile-pics'
       
       />

</Link>
</div>
</div>
    </nav>

    
    </>
)



}
