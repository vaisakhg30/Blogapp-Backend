const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/blog')

const signupModel=new mongoose.Schema({

    id:{
        required:true,
        type:String
    },
    name:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    }
})

module.exports=new mongoose.model("signuptable",signupModel)