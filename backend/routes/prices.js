const express = require('express')
const router = express.Router();
const {Createprice,Deleteprice,GetAllprices,Updateprice}=require('../controllers/price.js')
router.get("/all",GetAllprices)
router.delete("/del/:id",Deleteprice)
router.post("/add",Createprice)
router.put("/update/:id",Updateprice)
module.exports=router