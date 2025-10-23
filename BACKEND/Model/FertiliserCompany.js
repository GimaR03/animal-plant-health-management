// BACKEND/HealthManagement/Model/FertiliserCompany.js
import mongoose from "mongoose";  // Import mongoose library for defining schema and interacting with MongoDB

const fertiliserCompanySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    contact: { type: String }, 
    email: { type: String },
    country: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("FertiliserCompany", fertiliserCompanySchema);
