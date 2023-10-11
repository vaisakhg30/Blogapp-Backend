const express=require('express')
const server=express()
const signupcontroller=require('../Controller/signup.controller')
const router=express.Router()

router.post("/create",signupcontroller.signupuser)

module.exports=router