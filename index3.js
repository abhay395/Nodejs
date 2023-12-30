const express = require("express");
require('dotenv').config()
const server = express();
server.use(express.json());
// const productRouter = express.Router();
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
server.use("/products", productRouter.router);
server.use("/users", userRouter.router);

server.listen(process.env.PORT, () => {
  console.log("server started");
});
