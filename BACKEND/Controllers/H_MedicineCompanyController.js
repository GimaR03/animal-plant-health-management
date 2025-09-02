const H_MedicineCompany = require("../Model/H_MedicineCompanyModel");

// Create
exports.addCompany = async (req, res) => {
  try {
    const data = req.body;
    const company = await H_MedicineCompany.create(data);
    res.status(201).json({ message: "Company added", company });
  } catch (err) {
    console.error("addCompany error:", err);
    res.status(400).json({ error: err.message });
  }
};

// Get All
exports.getAllCompanies = async (req, res) => {
  try {
    const companies = await H_MedicineCompany.find();
    res.json(companies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get by ID
exports.getCompanyById = async (req, res) => {
  try {
    const company = await H_MedicineCompany.findById(req.params.id);
    if (!company) return res.status(404).json({ error: "Company not found" });
    res.json(company);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update
exports.updateCompany = async (req, res) => {
  try {
    const updated = await H_MedicineCompany.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ error: "Company not found" });
    res.json({ message: "Company updated", company: updated });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete
exports.deleteCompany = async (req, res) => {
  try {
    const deleted = await H_MedicineCompany.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Company not found" });
    res.json({ message: "Company deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
