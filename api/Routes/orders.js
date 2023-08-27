const express = require("express");

const router = express.Router();

// Handle GETrequest for Orders
router.get("/", (req, res) => {
  res.status(200).json({
    msg: "This is Get request for orders",
  });
});

//Handle GET Request for a Single product

router.get("/:productId", (req, res) => {
  res.status(200).json({
    msg: "This is get request for a single order",
  });
});

// Handle POST request for Orders
router.post("/", (req, res) => {
  res.status(200).json({
    msg: "This is Post request for orders",
  });
});

// Handle PUT request for Orders
router.put("/:productId", (req, res) => {
  const id = req.params.productId;

  res.status(200).json({
    msg: "This is Put request for orders",
    id: id,
  });
});

// Handle DELETE request for Orders
router.delete("/:productId", (req, res) => {
  const id = req.params.productId;

  res.status(200).json({
    msg: "This is Delete request for orders",
    id: id,
  });
});
module.exports = router;
