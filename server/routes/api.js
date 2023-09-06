const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

router.get("/test", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
