
const mongoose  = require('mongoose');
const express = require('express');
const cors = require('cors');
const router  =  express.Router();
const Usermodel = require('../Modules/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
router.use(cookieParser());
router.post( '/',async (req,res)=>{
    try{
      const {LEmail, Lpassword} = req.body;
    
      const user = await Usermodel.findOne({Email: LEmail})
    
      
      
      if(user){
      
        if( bcrypt.compare(Lpassword, user.password)){
         // sendverficationEmail(user,res)
         console.log(user.input)
          const token = jwt.sign({_id: user._id, input: user.input,Email: LEmail,follower:user.follower,followings:user.followings},'kkkjh',{expiresIn: "2 days"});
          
      
         
      //user.token =  accessToken;
          
          
          res.status(200)
          .cookie('token', token, {httpOnly:true})
          .send({
           success : true,
           token: token,
         
           user
      
          }) 
          
      
        }
      }
      
      
    
    }
    catch(e){console.log(e)}
    
    })
    module.exports = router;