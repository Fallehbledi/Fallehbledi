const express = require("express")
const router = express.Router()
const SignIn = require('../controllers/Auth/FarmerSignIn')
const {Register} = require("../controllers/Auth/FarmerSignUp")
const {GetOneFarmer,updateProfile, activateProfile} = require("../controllers/Farmer.js");

router.get("/:id",GetOneFarmer)
router.put("/:id" , updateProfile)
router.put("/activate/:id",activateProfile)
router.post("/signup" , Register)
// router.get("/getall",getAllfarmer)
// router.get("/getone/:id",getOnefarmer)
router.post("/signin", SignIn)

module.exports = router