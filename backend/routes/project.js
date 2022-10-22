const express = require("express");
const router = express.Router();
const {
  getProjects,
  createProject,
  joinProject,
  deleteProject,
} = require("../controllers/project");

router.route("/").get(getProjects);
router.route("/create").post(createProject);
router.route("/join").post(joinProject);
router.route("/:id").delete(deleteProject);

module.exports = router;
