import React from 'react';
import './App.css';
import  { BrowserRouter as Router,Switch,Route, BrowserRouter, Routes} from "react-router-dom";

import Signup from './Component/Signup';
import Login from './Component/Login';
import Home from './Component/Home';
import Profile from './Component/Profile';
import Navbar from './Component/Navbar';
import Post from './Component/Post';
import Userprofile from './Component/Userprofile';
import Friendspost from './Component/Friendspost';
import { UserProvider } from './UserContext';











function App() {

  
 
  return ( 
  <UserProvider>
   <BrowserRouter>
<Navbar/>
<Routes>
   < Route path='/signup' element={<Signup/>} />
   <Route path ='/login' element ={<Login/>} />
  <Route path ='/' element ={<Home/>} />
   <Route exact path ='/profile' element ={<Profile/>} /> 
   <Route path='/post' element={<Post/>} />
   <Route path='/friendspost' element={<Friendspost/>} />
   <Route path='/profile/:userid' element={<Userprofile/>} />
  </Routes>
   </BrowserRouter>
   </UserProvider>
  );
}

export default App;
