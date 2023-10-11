const express=require('express')
const server=express()
const blogController=require('../Controller/blog.controller')
const router=express.Router()

const upload = require('../Multer/multerConfig');

router.post("/create",upload.single('image'),blogController.saveBlog)
router.get("/getten",blogController.getAllBlog)
router.get("/getall",blogController.getAllBlogs)
router.put("/update/:id",blogController.update)
router.post("/delete/:id",blogController.delete)
router.post("/findone/:id",blogController.findone)






module.exports=router