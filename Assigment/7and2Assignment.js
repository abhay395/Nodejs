const mongoose = require("mongoose");
const express = require("express");
const { Schema } = mongoose;
const server = express();
server.use(express.json())
const userShcema = new Schema({
  firstName: { type: String, required: true, maxlength:16 },
  lastName: { type: String, required: false, maxlength: 16 },
  age: { type: Number, required: true, max: 100, min: 12 },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [
      /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      "Please enter a valid email address",
    ],
  },
  address: {
    pincode: { type: Number, required: true },
    street: { type: String, required: true },
    phone: { type: String, minlength: 10,maxlength:10 },
  }
});

const User = mongoose.model("User",userShcema);

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/User");
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
}
main()

server.post('/user',async(req,res)=>{
    try {
        const user = new User(req.body)
        const data= await user.save({timestamps:true})
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json(error)
    }

})
server.get('/users',async (req,res)=>{
    try {
        const data = await User.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
})
server.get('/user/:name',async (req,res)=>{
   const name = req.params.name 
    try {
        const data = await User.findOne({firstName:name})
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
})
server.put('/user/:name',async (req,res)=>{
   const name = req.params.name 
    try {
        const data = await User.findOneAndUpdate({firstName:name},req.body,{new:true})
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
})

server.listen(8000, () => {
  console.log("Server running in Port of  8000 ");
});
