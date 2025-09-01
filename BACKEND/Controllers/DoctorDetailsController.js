const Doctor = require("../Model/DoctorDetailsModel");

// Get all doctors
exports.getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create new doctor
exports.createDoctor = async (req, res) => {
  try {
    const data = req.body;
    if (req.file) data.profilePhoto = req.file.filename;

    const newDoctor = new Doctor(data);
    await newDoctor.save();
    res.status(201).json(newDoctor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update doctor
exports.updateDoctor = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    if (req.file) data.profilePhoto = req.file.filename;

    const updated = await Doctor.findByIdAndUpdate(id, data, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete doctor
exports.deleteDoctor = async (req, res) => {
  try {
    const id = req.params.id;
    await Doctor.findByIdAndDelete(id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
