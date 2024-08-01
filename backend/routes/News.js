const express = require('express')
const router = express.Router();

const { AddNew , getAllNews} = require ('../controllers/News')


router.post("/addNew" ,  AddNew)
router.get("/getAllNews", getAllNews)

module.exports = router