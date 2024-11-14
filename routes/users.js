var express = require('express');
var router = express.Router();
const User = require('../models/User');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
