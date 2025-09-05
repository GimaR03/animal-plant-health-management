const express = require("express");
const router = express.Router();
const doctorController = require("../Controllers/DoctorDetailsController");
const multer = require("multer");
const path = require("path");

// File upload setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "Health_uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Routes
router.get("/", doctorController.getAllDoctors);
router.post("/", upload.single("profilePhoto"), doctorController.createDoctor);
router.put("/:id", upload.single("profilePhoto"), doctorController.updateDoctor);
router.delete("/:id", doctorController.deleteDoctor);

module.exports = router;
