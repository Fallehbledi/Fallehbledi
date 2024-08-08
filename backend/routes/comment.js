const express =require('express')
const router=express.Router()
const{addComment,getAllComments,getComment}=require('../controllers/comment')
router.post("/add",addComment)
router.get("/getall",getAllComments)
router.get("/getone/:id",getComment)
module.exports=router