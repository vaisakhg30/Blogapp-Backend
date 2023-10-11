const express=require('express')
const mongoose=require('mongoose')
const server=express()
const blogModel=require('../Model/blog.model')


exports.getAllBlog = (req, res) => {
    try {
        blogModel.find().sort({ "createdAt": -1 }).limit(10).then((data) => {
            res.send(data);
        });
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getAllBlogs = (req, res) => {
    try {
        blogModel.find().sort({ "createdAt": -1 }).then((data) => {
            res.send(data);
        });
    } catch (error) {
        res.status(400).send(error);
    }
};



exports.saveBlog = async (req, res) => {
    try {
      const imageBuffer = req.file.buffer; // Get the uploaded image as a Buffer
      const { description, user,title,id } = req.body;
      await blogModel.create({
        description,
        user,
        title,
        id,
        image: imageBuffer,
      }); // Save the blog post to MongoDB
  
      res.status(201).send('Blog saved successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }
  };

exports.update=((req,res)=>{
    try {
        blogModel.updateOne({"id":req.params.id},{$set:req.body}).then((data)=>{
            res.send("Updated")
        })
        
    } catch (error) {
        res.status(400).send(error)
        
    }
})

exports.delete=((req,res)=>{
    try {
        blogModel.deleteOne({"id":req.params.id}).then((data)=>{
            res.send("Deleted")
        })
    } catch (error) {
        res.status(400).send(error)
    }
})

exports.findone=((req,res)=>{
    try {
        blogModel.findOne({"id":req.params.id}).then((data)=>{
            res.send(data)
        })
    } catch (error) {
        res.status(400).send(error)
    }
})