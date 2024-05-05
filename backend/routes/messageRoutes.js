const express = require("express");
const { allMessages, sendMessage } = require("../controllers/messageControllers.js");
const { protect } = require("../middleware/authMiddleware.js");

const router = express.Router();
// /api/message
router.route("/:chatId").get(protect, allMessages);
router.route("/").post(protect, sendMessage);

module.exports = router;
