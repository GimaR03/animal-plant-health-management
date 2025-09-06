const bcrypt = require("bcrypt");
const HealthSpecialist = require("../Model/HealthSpecialistModel");

// normalize specializations
const normalizeSpecializations = (v) => {
  if (Array.isArray(v)) return v;
  if (typeof v === "string") {
    return v
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  }
  return [];
};

// Create
exports.addSpecialist = async (req, res) => {
  try {
    const body = req.body;
    const profilePhoto = req.file ? req.file.filename : null;
    if (!profilePhoto) return res.status(400).json({ error: "Profile photo is required" });

    const years = Number(body.yearsOfExperience);
    if (Number.isNaN(years) || years < 0)
      return res.status(400).json({ error: "yearsOfExperience must be 0 or greater" });

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(body.password, salt);

    const payload = {
      fullName: body.fullName,
      email: body.email,
      password: hashed,
      phoneNo: body.phoneNo,
      medicalLicenseNumber: body.medicalLicenseNumber,
      address: body.address,
      specializations: normalizeSpecializations(body.specializations),
      qualifications: body.qualifications,
      yearsOfExperience: years,
      dateOfBirth: body.dateOfBirth,
      gender: body.gender,
      profilePhoto,
    };

    const created = await HealthSpecialist.create(payload);
    const { password, ...safe } = created.toObject();
    res.status(201).json({ message: "Specialist added", specialist: safe });
  } catch (err) {
    console.error("addSpecialist error:", err);
    res.status(400).json({ error: err.message });
  }
};

// Read all
exports.getAllSpecialists = async (req, res) => {
  try {
    const list = await HealthSpecialist.find().select("-password");
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Read one
exports.getById = async (req, res) => {
  try {
    const item = await HealthSpecialist.findById(req.params.id).select("-password");
    if (!item) return res.status(404).json({ error: "Not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update
exports.updateSpecialist = async (req, res) => {
  try {
    const body = req.body;
    const update = {};

    ["fullName", "email", "phoneNo", "medicalLicenseNumber", "address", "qualifications", "gender", "dateOfBirth"].forEach(field => {
      if (body[field]) update[field] = body[field];
    });

    if (body.specializations) update.specializations = normalizeSpecializations(body.specializations);
    if (body.yearsOfExperience !== undefined) {
      const years = Number(body.yearsOfExperience);
      if (Number.isNaN(years) || years < 0)
        return res.status(400).json({ error: "yearsOfExperience must be 0 or greater" });
      update.yearsOfExperience = years;
    }
    if (req.file) update.profilePhoto = req.file.filename;
    if (body.password && body.password.trim().length > 0) {
      const salt = await bcrypt.genSalt(10);
      update.password = await bcrypt.hash(body.password, salt);
    }

    const updated = await HealthSpecialist.findByIdAndUpdate(req.params.id, update, { new: true, runValidators: true }).select("-password");
    if (!updated) return res.status(404).json({ error: "Not found" });
    res.json({ message: "Specialist updated", specialist: updated });
  } catch (err) {
    console.error("updateSpecialist error:", err);
    res.status(400).json({ error: err.message });
  }
};

// Delete
exports.deleteSpecialist = async (req, res) => {
  try {
    const deleted = await HealthSpecialist.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Not found" });
    res.json({ message: "Specialist deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
