const mongoose = require('mongoose');
const express = require('express');
const UserSchema  = new  mongoose.Schema({
    input: { type:String, required:[true,"First name is required"]},
    password: { type:String, required:[true,"Password is required"],
   
    select: true},
    location :{type:String},
    profession : {type:String},
    
    follower:[{type:mongoose.Schema.Types.ObjectId, ref:"user"}],
    followings:[{type:mongoose.Schema.Types.Object, ref:"user"}]

,
Email : { type:String, required:[true,"Email is required"]},
    token: { type:String, default:null}
   
   
     });
     const Usermodel =  mongoose.model('user',UserSchema);
     module.exports = Usermodel;