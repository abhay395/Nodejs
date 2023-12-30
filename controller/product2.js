const fs = require("fs");
// const index = fs.readFileSync("index.html", "utf-8");
const model =  require('../model/product.models')
const Product = model.Product
const mongoose = require('mongoose')
exports.createProduct = async(req, res) => {
//   console.log(req.body);
//   product.push(req.body);
//   console.log(product);
const product = new Product(req.body); 
try {
   const data= await product.save()
   res.status(201).json(data);
   console.log(data)
} catch (error) {    
        res.status(400).json(error)
}
  
};
exports.getAllProducts = async(req, res) => {
    
    try {
        const data = await Product.find()
        res.status(201).json(data);
        // console.log(data)
     } catch (error) {    
             res.status(400).json(error)
     }
};
exports.getProduct = async (req, res) => {
  const id = req.params.id;
  // console.log(id)
 try {
   const data = await Product.findById(id);
   // console.log(data)
   res.json(data);
 } catch (error) {
  console.log(error)
  res.json(error)
 }
};

exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  console.log(id)
 try {
   const data = await Product.findOneAndUpdate({_id:id},req.body,{new:'true'})
   res.json(data)
 } catch (error){
  console.log(error)
  res.json(error)
 }
};
exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Product.findOneAndReplace({_id:id},req.body,{ new: true, runValidators: true,returnDocument:"after" })
    // res.json(data)
    res.status(201).json(data);
  } catch (error) {
    res.json(error)
  }
  // product.splice(dataIndex, 1, { ...oldProduct, ...req.body });
  // console.log(oldProduct)
};

exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
 try {
  const data = await Product.findOneAndDelete({_id:id})
  res.status(200).json(data)
 } catch (error) {
  res.status(400).json(error)
 }
 
};
