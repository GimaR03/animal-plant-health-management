// BACKEND/Controllers/H_MediStoreController.js
const H_MediStore = require("../Model/H_mediStoreModel");

// Add a new medicine
exports.addMedicine = async (req, res) => {
  try {
    const newMedicine = new H_MediStore(req.body);
    const savedMedicine = await newMedicine.save();
    res.status(201).json(savedMedicine);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all medicines
exports.getMedicines = async (req, res) => {
  try {
    const medicines = await H_MediStore.find().sort({ updatedAt: -1 });
    res.status(200).json(medicines);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get medicine by ID
exports.getMedicineById = async (req, res) => {
  try {
    const medicine = await H_MediStore.findById(req.params.id);
    if (!medicine) return res.status(404).json({ message: "Medicine not found" });
    res.status(200).json(medicine);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update medicine by ID
exports.updateMedicine = async (req, res) => {
  try {
    const updatedMedicine = await H_MediStore.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedMedicine) return res.status(404).json({ message: "Medicine not found" });
    res.status(200).json(updatedMedicine);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete medicine by ID
exports.deleteMedicine = async (req, res) => {
  try {
    const deletedMedicine = await H_MediStore.findByIdAndDelete(req.params.id);
    if (!deletedMedicine) return res.status(404).json({ message: "Medicine not found" });
    res.status(200).json({ message: "Medicine deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
