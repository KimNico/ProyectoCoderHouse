let express = require("express");
let userController = require("../components/users/userMongo");

let router = express.Router()

router.get("/",);
router.post("/", userController.createUser);
router.post("/login", userController.loginUser)
router.delete("/:id", userController.deleteUser);



module.exports = router;