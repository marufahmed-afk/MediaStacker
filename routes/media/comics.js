const express = require('express');
const { comicValidation } = require('../../validation');
const auth = require('../../models/middleware/auth');

const User = require('../../models/User');
const Comic = require('../../models/Comic');

const router = express.Router();

//@route    GET api/media/comics
//@desc     Get specified comic
//@access   Private

router.get('/', auth, async (req, res) => {
  try {
    //we use user.id because JWT token object has id not _id like mongo which we do in the middleware "auth.js"
    const comics = await Comic.find({ user: req.user.id }).sort({ date: -1 });
    res.json(comics);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route    POST api/media/comics
//@desc     Add new specified comic
//@access   Private

router.post('/', auth, async (req, res) => {
  const { error } = comicValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { name, url, read } = req.body;

  try {
    const newComic = new Comic({
      name,
      url,
      read,
      user: req.user.id,
    });

    const comic = await newComic.save();
    res.json(comic);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route    UPDATE api/media/comics
//@desc     Update specified comic
//@access   Private

router.put('/:id', (req, res) => {
  res.send('Update comic');
});

//@route    Delete api/media/comics
//@desc     Delete specified comic
//@access   Private

router.delete('/:id', (req, res) => {
  try {
    let comic = await Comic.findById(req.params.id);

    if (!comic) return res.status(404).json({msg: 'Comic not found'});

    // Make sure user owns comic
    if (comic.user.toString() !== req.user.id) {
      return res.status(401).json({msg: 'Not authorized'});
    }

    await Comic.findByIdAndRemove(req.params.id);

    res.json({msg: 'Comic removed'});
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }

});

module.exports = router;
