import React, { useEffect, useState } from "react";
import '../Css/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useUser } from "../UserContext";

export  default function Home(){

const [Post,setPost]= useState([])
const [Like,setLike] = useState(false)
const [Count, setCount] = useState(0);
const [data,setData] = useState([])
const {userData} = useUser();



const makeComment = (text,postId)=>{
  axios.put("https://insta-clone-6vph.onrender.com/comment",{postId :postId,text:text},{withCredentials:true})
  .then((res)=>{
    console.log(res)

  })
  .catch((error)=>{
console.log("error in client side while making commnent ")
  })
}

const likepost=(id)=>{

  axios.put("https://insta-clone-6vph.onrender.com/like",{postId:id},{withCredentials:true})
  .then((res)=>{
console.log(res.data)
setLike(prevstate=>!prevstate)

  })
  .then(result=>{
    //   console.log(result)
const newData = data.map(item=>{
 if(item._id === result._id){
     return result
 }else{
     return item
 }
})
setData(newData)
}).catch(err=>{
console.log(err)
})


  .catch(()=>{

  })



}

const unlikepost=(id)=>{

  axios.put("https://insta-clone-6vph.onrender.com/unlike",{postId:id},{withCredentials:true})
  .then((res)=>{
    console.log(res.data)
    setLike(prevstate=>!prevstate)
  }) 
  .then(result=>{
    //   console.log(result)
const newData = data.map(item=>{
 if(item._id=== result._id){
     return result
 }else{
     return item
 }
})
setData(newData)
}).catch(err=>{
console.log(err)
})
  
  .catch(()=>{

  })
 


}


      
useEffect(()=>{
axios.get("https://insta-clone-6vph.onrender.com/allpost",{withCredentials:true})
.then((res)=>{
  console.log(res.data);
  const postarray = res.data.map(items=> items);
  setPost(postarray)

})
.catch(()=>{

})


},[])



    return(
        <>
          {
            Post.map(item =>{
              return(
                <div classname="d-flex" key={item._id} >
                <div class="m-3" id="post-box">
              <div className="d-flex">
              
               <img src="https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" 
                alt="" 
                id="post-profile"
                />
                <h5 className="post-username">Alura</h5>
                <img width="25" height="25" src="https://img.icons8.com/material-rounded/32/menu-2.png" alt="menu-2" id="post-dots"/>
              </div>
              <img src= {item.pic}
               alt=""
               id="post"
              
              />
              <div className="d-flex" >


     { item.likes.includes(userData._id)? 
     
      <img width="40" height="35" src="https://img.icons8.com/glyph-neue/64/FA5252/like--v1.png" alt="like--v1" onClick={()=>unlikepost(item._id)} />
   : 
     <img width="40" height="35" src="https://img.icons8.com/ios/50/1A1A1A/like--v1.png" alt="like--v1" onClick={()=>likepost(item._id)} /> 
     

     }





              <img width="35" height="35" src="https://img.icons8.com/external-inkubators-detailed-outline-inkubators/25/1A1A1A/external-comment-video-interface-inkubators-detailed-outline-inkubators.png" 
              alt=""/>
              <img width="35" height="35" src="https://img.icons8.com/external-creatype-outline-colourcreatype/64/1A1A1A/external-share-user-interface-creatype-outline-colourcreatype.png" 
              alt=""/>
              <img width="35" height="35" class="save" src="https://img.icons8.com/fluency-systems-filled/48/1A1A1A/bookmark-ribbon.png" 
               alt=""/>
              </div>

              
<h6>{item.likes.length}</h6>       
<div className="d-flex">
  
<div class="form">


  <form onSubmit={(e)=>{
                                    e.preventDefault()
                                    makeComment(e.target[0].value,item._id)
                                }}>
  <input class="inputc" placeholder="Type your text" required="" type="text"  />
         <span class="cinput-border"></span>


                                  
                                </form>








       



     { /*    <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/1A1A1A/sent.png" alt="sent" id="sent" onClick={(e)=> makeComment(e.target[0],item._id)
} /> */}
       </div>
       </div>
     {
      item.comments.map(record=>{
        return(
          <h6>{record.postBy.input}***{record.text}</h6> 
        )
      })
     }
           
           </div>    
       
       
       
       </div>
              )
            })
          }
        </>
    )
}
