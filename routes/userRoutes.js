const express = require("express");
const router = express.Router();
const { loginUser, registerUser } = require("../controllers/userController");
const { adminCheck } = require("../middlewares/adminCheck");
const { protect } = require("../middlewares/authMiddleware");

router.post("/login", loginUser);
router.post("/register", protect, adminCheck, registerUser);

module.exports = router;
