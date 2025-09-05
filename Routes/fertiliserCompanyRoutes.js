// routes/fertiliserCompanyRoutes.js
const express = require("express");
const router = express.Router();
const {
  getAllCompanies,
  addCompany,
} = require("../Controllers/FertiliserCompanyController");

// GET all companies
router.get("/", getAllCompanies);

// POST new company
router.post("/", addCompany);

module.exports = router;
