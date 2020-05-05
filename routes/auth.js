const express = require("express");

const router = express.Router();

//@route    GET api/users
//@desc     Get logged in User
//@access   Public

router.post("/", (req, res) => {
  res.send("Logged in User");
});

//@route    POST api/users
//@desc     Authorize User and get token
//@access   Public

router.post("/", (req, res) => {
  res.send("Token");
});

module.exports = router;
