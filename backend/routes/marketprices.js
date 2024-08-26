const express = require('express')
const router = express.Router();
const {GetAllpricebydate,Createprice,Deleteprice,GetAllprices,Updateprice}=require('../controllers/marketprices.js')
router.get("/all",GetAllprices)
router.get("/allday",GetAllpricebydate)
router.delete("/del/:id",Deleteprice)
router.post("/add",Createprice)
router.put("/update/:id",Updateprice)
module.exports=router