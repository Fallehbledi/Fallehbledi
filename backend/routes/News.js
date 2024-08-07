const express = require('express')
const router = express.Router();

const { AddNew , getAllNews, DeleteNews, UpdateNews} = require ('../controllers/News');


router.post("/addNew" ,  AddNew)
router.get("/getAllNews", getAllNews)
router.delete("/delete/:id", DeleteNews)
router.put('/updateNew/:id', UpdateNews)
module.exports = router