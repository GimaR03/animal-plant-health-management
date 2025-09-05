const express = require("express");
const router = express.Router();
const controller = require("../Controllers/H_PlantPathologistController");
const multer = require("multer");
const path = require("path");

// File upload setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "Health_uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

// Routes
router.get("/", controller.getAll);
router.post("/", upload.single("profilePhoto"), controller.create);
router.put("/:id", upload.single("profilePhoto"), controller.update);
router.delete("/:id", controller.delete);

module.exports = router;
