const express=require('express')
const mongoose=require('mongoose')
const server=express();
const cors=require('cors')


const signupRouter=require('./Router/signup.router')
const loginRouter=require('./Router/login.router')
const blogRouter=require('./Router/blog.router')


server.use(cors({origin:'http://localhost:3000'}))
server.use(express.json())

server.listen(8000,()=>{
    console.log('server running...');
}) 

server.use('/signup',signupRouter)
server.use('/login',loginRouter)
server.use('/blog',blogRouter)


