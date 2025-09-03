const mongoose = require("mongoose");

const FertiliserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    currentStock: { type: Number, required: true },
    unit: { type: String, required: true },
    supplierName: { type: String, required: true },
    supplierContact: { type: String, required: true },
    email: { type: String, required: true },
    purchasePrice: { type: Number, required: true },
    purchaseDate: { type: Date, required: true },
    storageLocation: { type: String },
    storageConditions: { type: String },
    notes: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Fertiliser", FertiliserSchema);
