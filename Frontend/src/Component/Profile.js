import react, { useEffect, useState } from 'react';
import  {useUser} from  '../UserContext';
import '../Css/Profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';



export default function Profile(){
 const [Mypic,setMypic] = useState([])
 const [profilepic,setProfilepic]= useState('');
 const {userData} =useUser();
 console.log(userData)




 const Deletepost = async (postId)=>{

await axios.delete(`http://localhost:5000/remove/${postId}`,{withCredentials:true})
 .then((Result)=>{
   console.log(Result)
 })
 .catch((error)=>{
   console.log(error)
 })
 
  }









 
 useEffect(()=>{
  
axios.get("http://localhost:5000/mypost",{withCredentials:true})
.then((res)=>{
  



  const picArray = res.data.map(post => post);

  
  setMypic(picArray);

   

    
})
.catch((err)=>{})
 },[]) 




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
        <h2 id='username'>{userData.input} </h2>
<div className='d-flex' id="box">

<div className='d-flex' id='content'>
    <h5>40</h5>
    <h5>Post</h5>
    </div>
    <div className='d-flex' id='content'>
    <h5>{userData.follower.length}</h5>
    <h5>follower</h5>
    </div>
    <div className='d-flex' id="content">
    <h5>{userData.followings.length}</h5>
    <h5>following</h5>
    </div>
</div>
</div>
</div>
</div>
<div className='line'></div>

{ /* post started from here   */}


< >

    {Mypic.map(item=>{
        return(<div classname="d-flex" key={item._id}>
         <div class="m-3" id="post-box">
       <div className="d-flex">
       
        <img src="https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" 
         alt="" 
         id="post-profile"
       
         />
         <h5 className="post-username">{userData.input}</h5>
        
         <img width="25" height="25" src="https://img.icons8.com/material-rounded/32/menu-2.png" alt="menu-2" id="post-dots"  onClick={ ()=>   Deletepost(item._id)}/>
       </div>
       <img src= {item.pic}
        alt=""
        id="post"
       
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
       <form onSubmit={(e)=>{
                                    e.preventDefault()
                                    
                                }}>
  <input class="inputc" placeholder="Type your text" required="" type="text"  />
         <span class="cinput-border"></span>


                                  
                                </form>
    
    </div>    



</div>)
 })}
 

       </>
       </div>
    )
}