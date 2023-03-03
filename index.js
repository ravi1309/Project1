const express=require("express");
const engine = require('ejs-mate');
const path=require("path")
const PORT=3000;
const app=express();
const mongoose=require("mongoose")
// mongoose.connect("mongodb://127.0.0:27017/shopping-app")
// .then(()=>console.log("DB Connected"))
// .catch
app.engine("ejs",engine)
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))
app.get("/",(req,res)=>
{
    res.render("index")
})
app.get("/products",(req,res)=>
{
    res.render("./products/products")
})
app.listen(PORT,()=>
{
    console.log(`server running at ${PORT}`)
})