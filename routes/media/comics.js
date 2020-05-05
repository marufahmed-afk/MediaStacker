const express = require("express");

const router = express.Router();

//@route    GET api/media/:media
//@desc     Get specified media
//@access   Private

router.get("/", (req, res) => {
  res.send("Get specified comic");
});

//@route    POST api/media/:media
//@desc     Add new specified media
//@access   Private

router.post("/", (req, res) => {
  res.send("Add a new comic");
});

//@route    UPDATE api/media/:media
//@desc     Update specified media
//@access   Private

router.put("/:id", (req, res) => {
  res.send("Update comic");
});

//@route    Delete api/media/:media
//@desc     Delete specified media
//@access   Private

router.delete("/:id", (req, res) => {
  res.send("Delete comic");
});

module.exports = router;
