const express = require("express")
const router = express.Router()
const {AddProdToCard,getAddedProducts,DeleteAddedProd} = require("../controllers/AddProduct");
router.post("/addedProd" , AddProdToCard)
router.get("/farmerCard/:id",getAddedProducts)
router.delete("/:id",DeleteAddedProd)


module.exports = router