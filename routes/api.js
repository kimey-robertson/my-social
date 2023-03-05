const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  res.json("This is the back end... Request successful");
});
router.get("/posts", db.getPosts);
router.get("/userAll", db.getAllUserInfo);
router.get("/user", db.getUser)

router.post("/posts", db.postPost);
router.post("/user", db.postUser)

// INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
// VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');

module.exports = router;
