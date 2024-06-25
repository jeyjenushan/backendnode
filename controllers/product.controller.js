
const Product=require("../models/product.model" )

const getProducts = async(req,res)=>{
    try{
        const products=await Product.find({});
        res.status(200).json(products)
}
    catch(error){
        res.status(500).json({messgae:error.message})
    }
}

const getProductId=async(req,res)=>{
    try{
        const {id} =req.params
        const product=await Product.findById(id)
        res.status(200).json(product)
 
    }
    catch(error){
     res.status(500).json({message:error.message})
    }
 }

 const getProductUpdate=async(req,res)=>{
   try{
const {id}=req.params
const product= await Product.findByIdAndUpdate(id)
if(!product){
    return res.status(400).json({message:'Product is not update'})
}
updatedproduct=await Product.findById(id)
res.status(200).json(updatedproduct)

   }
    
    catch(error){
        res.status(500).json({message:error.message})
       }
 }

const deletedProduct = async(req,res)=>{
    try{
        const { id }=req.params
        const product=await Product.findByIdAndDelete(id)
      if(!product){
        return res.status(404).json({message:"Product not found"})
      }
      res.status(200).json({message:"Product deleted successfuly"})

    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
const view=async(req,res)=>{
    // console.log(req.body)
     //res.send(req.body)//It cannot come to the respond because the problem is not directly access we use middlewars
    try{
     const product = await Product.create(req.body)
      res.status(200).json(product)
    }catch(error){
     res.status(500).json({message:error.message})
    }
 }
module.exports=
{
    getProducts,
    getProductId,
    getProductUpdate,
    deletedProduct,
    view

}


