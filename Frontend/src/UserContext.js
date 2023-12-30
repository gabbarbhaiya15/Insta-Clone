import React,{createContext,useContext,useEffect,useState} from "react";
import axios from 'axios';


const UserContext = createContext();
export  const UserProvider =({ children})=>{
    const [User,setUser]= useState();
    const [userData,setuserData]= useState([]);
    useEffect(()=>{
        const contex = async ()=>{

        await  axios.get("http://localhost:5000/protected",{withCredentials:true})
        .then((res)=>{
            
            setuserData(res.data);
        })
        .catch((error)=>{
            console.log("error while context api ")
        })

        }
        contex();


    },[])
 


    
      return (
        <UserContext.Provider value={{ userData }}>
          {children}
        </UserContext.Provider>
      );
}

export const useUser = () => {
  return useContext(UserContext);
};
