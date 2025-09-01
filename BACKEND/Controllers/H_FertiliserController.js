const Fertiliser = require("../Model/H_Fertiliser");

// Get all fertilisers
exports.getFertilisers = async (req, res) => {
  try {
    const fertilisers = await Fertiliser.find().sort({ createdAt: -1 });
    res.json(fertilisers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get fertiliser by ID
exports.getFertiliserById = async (req, res) => {
  try {
    const fertiliser = await Fertiliser.findById(req.params.id);
    if (!fertiliser) return res.status(404).json({ message: "Fertiliser not found" });
    res.json(fertiliser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new fertiliser
exports.createFertiliser = async (req, res) => {
  try {
    const fertiliser = new Fertiliser(req.body);
    const savedFertiliser = await fertiliser.save();
    res.status(201).json(savedFertiliser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update fertiliser
exports.updateFertiliser = async (req, res) => {
  try {
    const updatedFertiliser = await Fertiliser.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedFertiliser) return res.status(404).json({ message: "Fertiliser not found" });
    res.json(updatedFertiliser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete fertiliser
exports.deleteFertiliser = async (req, res) => {
  try {
    const deletedFertiliser = await Fertiliser.findByIdAndDelete(req.params.id);
    if (!deletedFertiliser) return res.status(404).json({ message: "Fertiliser not found" });
    res.json({ message: "Fertiliser deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
