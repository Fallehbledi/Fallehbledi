
const express = require('express')
const router = express.Router();


const { CreateFarmtool, GetAllFarmtools, DeleteFarmtool , GetFarmtoolByName,UpdateFarmtool} = require('../controllers/FarmerTools.js')

router.post("/add" ,  CreateFarmtool)
router.get("/all", GetAllFarmtools)
router.delete("/:id", DeleteFarmtool)
router.get("/:name" ,GetFarmtoolByName )
router.put('/:id',UpdateFarmtool)
module.exports = router