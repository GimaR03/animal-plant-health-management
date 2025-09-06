const express = require("express");
const path = require("path");
const multer = require("multer");
const controller = require("../Controllers/HealthSpecialistController");

const router = express.Router();

// Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "Health_uploads/"),
  filename: (req, file, cb) =>
    cb(null, "profile-" + Date.now() + path.extname(file.originalname)),
});

const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = /jpeg|jpg|png/;
    if (allowed.test(file.mimetype) && allowed.test(path.extname(file.originalname).toLowerCase())) {
      cb(null, true);
    } else cb(new Error("Only JPG/PNG allowed"));
  },
});

// Routes
router.get("/", controller.getAllSpecialists);
router.get("/:id", controller.getById);
router.post("/", upload.single("profilePhoto"), controller.addSpecialist);
router.put("/:id", upload.single("profilePhoto"), controller.updateSpecialist);
router.delete("/:id", controller.deleteSpecialist);

module.exports = router;
