const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
} = require("../controllers/user");

router.route("/").get(getUsers).post(createUser);
router.route("/:id").get(getUserById).delete(deleteUser);

module.exports = router;
