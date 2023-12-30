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
const Router = require("./routes/.js");
server.use(express.json())
// server.use(morgan('default'));
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)));
server.use("/products", productRouter.router);
// server.use("/s", Router.router);
server.use('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'dist','index.html'))
})

// db connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
    console.log('database connected')
}
server.listen(process.env.PORT, () => {
  console.log("server started");
});
