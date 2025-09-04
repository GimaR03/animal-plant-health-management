// BACKEND/Models/H_mediStoreModel.js
const mongoose = require("mongoose");

// Define the schema for MediStore
const H_MediStoreSchema = new mongoose.Schema(
  {
    medicine_name: { type: String, required: true },
    animal_types: { type: String }, // e.g., "Cattle, Poultry"
    disease_treated: { type: String }, // e.g., "Fever, Infection"
    pharmacy_name: { type: String }, // e.g., "Global Pharmacy"
    batch_number: { type: String },
    manufacture_date: { type: Date },
    expiry_date: { type: Date, required: true },
    quantity_available: { type: Number, default: 0 },
    unit: { type: String }, // e.g., "mg", "ml"
    price_per_unit: { type: Number }, // e.g., 25.5
    storage_location: { type: String }, // e.g., "Shelf A1"
    notes: { type: String },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Export the model
module.exports = mongoose.model("H_MediStore", H_MediStoreSchema);
