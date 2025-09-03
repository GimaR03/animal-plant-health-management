const mongoose = require("mongoose");

const FertiliserCompanySchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = mongoose.model("FertiliserCompany", FertiliserCompanySchema);
