// BACKEND/Routes/H_mediStoreRoute.js
const express = require("express");
const router = express.Router();
const H_MediStoreController = require("../Controllers/H_MediStoreController");

// Routes
router.post("/", H_MediStoreController.addMedicine);
router.get("/", H_MediStoreController.getMedicines);
router.get("/:id", H_MediStoreController.getMedicineById);
router.put("/:id", H_MediStoreController.updateMedicine);
router.delete("/:id", H_MediStoreController.deleteMedicine);

module.exports = router;
