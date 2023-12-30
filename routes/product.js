const express = require("express");
const ProductController = require("../controller/product");

const router = express.Router();

router
  .post("/", ProductController.createProduct)
  .get("/", ProductController.getAllProducts)
  .get("/:id", ProductController.getProduct)
  .put("/:id", ProductController.updateProduct)
  .patch("/:id", ProductController.replaceProduct)
  .delete("/:id", ProductController.deleteProduct)

  exports.router = router