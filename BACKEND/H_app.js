// H_app.js (Backend entry point)
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

// Routes
const doctorRoutes = require("./Routes/DoctorDetailsRoute");
const specialistRoutes = require("./Routes/HealthSpecialistRoute");
const medicineCompanyRoutes = require("./Routes/H_MedicineCompanyRoute");
const mediStoreRoutes = require("./Routes/H_mediStoreRoute");
const plantPathologistRoutes = require("./Routes/H_PlantPathologistRoute");
const fertiliserRoutes = require("./Routes/H_FertiliserRoute"); 
const fertiliserCompanyRoutes = require("./Routes/fertiliserCompanyRoutes"); 

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Serve uploaded images (e.g., doctor profile pics)
app.use("/Health_uploads", express.static(path.join(__dirname, "Health_uploads")));

// MongoDB Connection
mongoose
  .connect(
    "mongodb+srv://HealthCareAdmin:vNkwsHk4I1IMnf1Q@cluster0.n4q0qqw.mongodb.net/HealthCareDB"
  )
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });

// Health check
app.get("/", (req, res) => res.send("Backend is running!"));

// API Routes
app.use("/api/doctors", doctorRoutes);
app.use("/api/specialists", specialistRoutes);
app.use("/api/medicine-companies", medicineCompanyRoutes);
app.use("/api/medistore", mediStoreRoutes);
app.use("/api/plant-pathologists", plantPathologistRoutes);
app.use("/api/fertilisers", fertiliserRoutes); 
app.use("/api/fertiliser-companies", fertiliserCompanyRoutes); 

// Start server
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
