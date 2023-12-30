const express = require("express");
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors');
const Product = require('./model/product.models.js')
const path = require('path')
require('dotenv').config()
const server = express();
server.use(cors())
server.use(express.json());
// const productRouter = express.Router();
const productRouter = require("./routes/product2.js");
const userRouter = require("./routes/user");
server.use(express.json())
// server.use(morgan('default'));
server.use(express.static(process.env.PUBLIC_DIR));
server.use("/products", productRouter.router);
server.use("/users", userRouter.router);
server.use('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'dist','index.html'))
})

// db connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/eccommerce');
    console.log('database connected')
}
server.listen(process.env.PORT, () => {
  console.log("server started");
});