const mongoose = require("mongoose");

const H_MedicineCompanySchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true },
    registrationNumber: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    contactNo: { type: String, required: true },
    emergencyContacts: { type: [String], default: [] },
    email: { type: String, required: true, match: [/^\S+@\S+\.\S+$/, "Invalid email"] },
    website: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("H_MedicineCompany", H_MedicineCompanySchema);
