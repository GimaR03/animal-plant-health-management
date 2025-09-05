const express = require("express");
const router = express.Router();
const controller = require("../Controllers/H_MedicineCompanyController");

// CRUD routes
router.get("/", controller.getAllCompanies);
router.get("/:id", controller.getCompanyById);
router.post("/", controller.addCompany);
router.put("/:id", controller.updateCompany);
router.delete("/:id", controller.deleteCompany);

module.exports = router;
