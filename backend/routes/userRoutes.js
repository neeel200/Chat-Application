const express = require("express");
const { registerUser, authUser, allUsers } = require("../controllers/userControllers.js");
const { protect } = require("../middleware/authMiddleware.js");

const router = express.Router();
// /api/user
router.route("/").get(protect, allUsers);
router.route("/").post(registerUser);
router.post("/login", authUser);

module.exports = router;
