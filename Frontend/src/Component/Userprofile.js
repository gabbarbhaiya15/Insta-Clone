import react, { useEffect, useState } from 'react';
import '../Css/Userprofile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useParams} from 'react-router-dom'
import  {useUser} from '../UserContext';



export default function Userprofile(){
 const [Fpost,setFpost] = useState([])
 const [profilepic,setProfilepic]= useState('') 
 const {userid} = useParams()
 const {userData}= useUser();
 
const follow = async ()=>{
  console.log(userid)
await axios.put("http://localhost:5000/follow",{followid: userid},{withCredentials: true})
.then((res)=>{
  console.log(res.data)
})
.catch((error)=>{
  console.log("error in  following client side ")
})

}

const unfollow = ()=>{

  axios.put("http://localhost:5000/unfollow",{unfollowid: userid},{withCredentials: true})
  .then((res)=>{
    console.log(res.data)
  })
  .catch((error)=>{
    console.log("error in  unfollowing")
  })
  
  }











 
 useEffect(()=>{
  
axios.get(`http://localhost:5000/friendsid/${userid}`,{withCredentials:true})

.then((result)=>{
  
 const dataarray = result.data.map(item=>item)
 setFpost(dataarray)

})
.catch((err)=>{})
 },[]) 

console.log(Fpost)



    return(
        <div>
        <div className='d-flex' >
        <div >
       <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww'
        alt=''
        id='profile-pic'
       
       />
        <input type="file" id="images" accept="image/*" required    onChange = {(e)=> setProfilepic(e.target.files[0])} />
   
    </div>

    <div className='d-flex' id="follow-box">
        <div className='child-follow-box'>
        <h2 id='username'>{}</h2>
<div className='d-flex' id="box">

<div className='d-flex' id='content'>
    <h5>40</h5>
    <h5>Post</h5>
    </div>
    <div className='d-flex' id='content'>
    <h5>1K</h5>
    <h5>Follower</h5>
    </div>
    <div className='d-flex' id="content">
    <h5>150</h5>
    <h5>Following</h5>
    </div>
    <div className='d-flex'>
    <button class="btn btn-1 btn-sep icon-info" onClick={follow}>Follow</button>

<button class="btn btn-3 btn-sep icon-heart" onClick={unfollow}>Unfollow</button>

    </div>
</div>
</div>
</div>
</div>
<div className='line'></div>

{ /* post started from here   */}


< >
<div classname="d-flex" >
      
         <div class="m-3" id="post-box">
       <div className="d-flex">
       
        <img src="https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" 
         alt="" 
         id="post-profile"
       
         />
         <h5 className="post-username">Alura</h5>
         <img src="https://miro.medium.com/v2/resize:fit:512/1*Js0Y20MwjcTnVAe7KjDXNg.png"
          alt=""
          id="post-dot"
    
         />
       </div>
       <img src="https://miro.medium.com/v2/resize:fit:512/1*Js0Y20MwjcTnVAe7KjDXNg.png"
          alt=""
        
        
       
       />
       <div className="d-flex" >
       <img width="40" height="35" src="https://img.icons8.com/glyph-neue/64/FA5252/like--v1.png" alt="like--v1"/>
       <img width="35" height="35" src="https://img.icons8.com/external-inkubators-detailed-outline-inkubators/25/1A1A1A/external-comment-video-interface-inkubators-detailed-outline-inkubators.png" 
       alt=""/>
       <img width="35" height="35" src="https://img.icons8.com/external-creatype-outline-colourcreatype/64/1A1A1A/external-share-user-interface-creatype-outline-colourcreatype.png" 
       alt=""/>
       <img width="35" height="35" class="save" src="https://img.icons8.com/fluency-systems-filled/48/1A1A1A/bookmark-ribbon.png" 
        alt=""/>
       </div>

       <div class="form">
  <input class="cinput" placeholder="Type your text" required="" type="text"/>
  <span class="cinput-border"></span>
</div>
    
    </div>    



</div>
 
{  

 
 }
       </>
       </div>
    )
}