const express = require("express");
const userController = require("../controller/user");

const router = express.Router();

router
  .post("/", userController.createusers)
  .get("/", userController.getAlluserss)
  .get("/:id", userController.getusers)
  .put("/:id", userController.updateusers)
  .patch("/:id", userController.replaceusers)
  .delete("/:id", userController.deleteusers)

  exports.router = router