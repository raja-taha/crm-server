const express = require("express");
const router = express.Router();
const {
  getCustomers,
  getCustomerById,
  addCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customerController");
const { adminCheck } = require("../middlewares/adminCheck");
const { protect } = require("../middlewares/authMiddleware");

router.get("/", protect, adminCheck, getCustomers);
router.get("/:id", protect, adminCheck, getCustomerById);
router.post("/", protect, adminCheck, addCustomer);
router.put("/:id", protect, adminCheck, updateCustomer);
router.delete("/:id", protect, adminCheck, deleteCustomer);

module.exports = router;
