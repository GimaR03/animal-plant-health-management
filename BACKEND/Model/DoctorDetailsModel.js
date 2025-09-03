const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNo: { type: String, required: true },
  licenseNumber: { type: String, required: true },
  specializations: { type: [String], required: true },
  qualifications: { type: String, required: true },
  yearsOfExperience: { type: Number, required: true },
  dateOfBirth: { type: Date },
  gender: { type: String },
  profilePhoto: { type: String }, // store filename
}, { timestamps: true });

module.exports = mongoose.model("Doctor", DoctorSchema);
