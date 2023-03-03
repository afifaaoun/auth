const express=require('express');
const { register, getUser, login } = require('../controllers/User');
const { IsAuth } = require('../middleWare/IsAuth');
const { registerValidation, validation } = require('../middleWare/RegisterValidation');
const userRouter=express.Router();



userRouter.post('/register',registerValidation, validation, register) 
userRouter.get('/get',getUser)
//LOGIN
userRouter.post('/signIn',login)

//IsAuth bch tchouf est ce que l user mezel connecté walla lee si connecté t9ollek rak allowed
//si nn ure not allowed bch tod5l ll site hedheka
//owel step t3ml signIn bl post w b3d profile bl get w tod5l ll header tzidou Authorization
//w tekteb ltoken li 3tahoulek wa9t 3malt l sign in

userRouter.get('/profile', IsAuth,(req,res)=>{
    res.send(req.user)
} )
module.exports=userRouter

