const express = require("express");
const router = express.Router();
const fertiliserController = require("../Controllers/H_FertiliserController");

// CRUD
router.get("/", fertiliserController.getFertilisers);
router.get("/:id", fertiliserController.getFertiliserById);
router.post("/", fertiliserController.createFertiliser);
router.put("/:id", fertiliserController.updateFertiliser);
router.delete("/:id", fertiliserController.deleteFertiliser);

module.exports = router;
