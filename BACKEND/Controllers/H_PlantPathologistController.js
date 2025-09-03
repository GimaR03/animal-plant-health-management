const PlantPathologist = require("../Model/H_PlantPathologistModel");

// Get all Plant Pathologists
exports.getAll = async (req, res) => {
  try {
    const data = await PlantPathologist.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create new Plant Pathologist
exports.create = async (req, res) => {
  try {
    const data = req.body;
    if (req.file) data.profilePhoto = req.file.filename;

    const newEntry = new PlantPathologist(data);
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Plant Pathologist
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    if (req.file) data.profilePhoto = req.file.filename;

    const updated = await PlantPathologist.findByIdAndUpdate(id, data, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete Plant Pathologist
exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    await PlantPathologist.findByIdAndDelete(id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
