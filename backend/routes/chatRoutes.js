const express = require("express");
const { accessChat, fetchChats, createGroupChat, removeFromGroup, addToGroup, renameGroup } = require("../controllers/chatControllers.js");
const { protect } = require("../middleware/authMiddleware.js");

const router = express.Router();
// /api/chat
router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup);
router.route("/groupremove").put(protect, removeFromGroup);
router.route("/groupadd").put(protect, addToGroup);

module.exports = router;
