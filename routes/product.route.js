const express=require('express')
const Product=require("../models/product.model" )
const router=express.Router()
const productController=require("../controllers/product.controller")


router.get("/",productController.getProducts)
router.get("/:id",productController.getProductId)
router.put("/:id",productController.getProductUpdate)
router.delete("/:id",productController.deletedProduct)
router.post("/",productController.view)

module.exports=router

