const express=require('express')
const mongoose=require('mongoose')
const Product=require("./models/product.model.js")
const app=express()
const productRoute=require("./routes/product.route")

//connect middlewars
app.use(express.json())
app.use(express.urlencoded({extended : false}))


//router
app.use("/api/products",productRoute)

mongoose.connect("mongodb+srv://root:viber+1234@backenddb.xaps1wx.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDb")
.then(()=>{
    console.log("Connected to database")
    app.listen(3000,()=>{
        console.log("Server is running on port 3000")
    })
})
.catch(()=>{
    console.log('Connection is failed')
})