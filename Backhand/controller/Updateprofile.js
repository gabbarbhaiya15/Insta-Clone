// updating profile pic  of user
const mongoose  = require('mongoose');
const express = require('express');
const cors = require('cors');
const router  =  express.Router();
const UserModel = require('../Modules/UserModel');
const PostModel = require('../Modules/Modulepost');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const auth = require('../middleware/Auth')

router.put('/',auth,(req,res)=>{

UserModel.findByIdAndUpdate(req.user._id,{$set:{pic:req.body.pic}},{new:true} )
.then((result)=>{
res.status(200).json({result})
})
.catch((error)=>{
    res.status(400).json("error in updating pic ")
})


})
module.exports = router;