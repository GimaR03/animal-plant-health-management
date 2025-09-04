const mongoose = require("mongoose");

const generateSpecialistId = () => {
  const prefix = "SPC";
  const randomNum = Math.floor(10000 + Math.random() * 90000); // 5-digit
  return `${prefix}${randomNum}`;
};

const HealthSpecialistSchema = new mongoose.Schema(
  {
    specialistId: {
      type: String,
      unique: true,
      default: generateSpecialistId,
    },
    fullName: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },
    password: { type: String, required: true },
    phoneNo: { type: String, required: true },
    medicalLicenseNumber: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    specializations: { type: [String], required: true },
    qualifications: { type: String, required: true },
    yearsOfExperience: { type: Number, required: true, min: 0 },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
    profilePhoto: { type: String, required: true }, // filename only
  },
  { timestamps: true }
);

module.exports = mongoose.model("HealthSpecialist", HealthSpecialistSchema);
