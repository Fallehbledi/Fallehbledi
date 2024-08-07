const express = require("express")
const router = express.Router()
const {addpost,getallpost,  getfarmerposts,getOnePost}=require('../controllers/community')
router.post('/addpost',addpost)
router.get('/getallpost',getallpost)
router.get('/getfarmerpost/:id',  getfarmerposts)
router.get('/getonepost/:id',getOnePost)
module.exports = router