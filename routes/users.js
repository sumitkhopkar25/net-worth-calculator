var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
//const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Secret key for JWT
//const jwtSecret = process.env.JWT_SECRET_KEY;

/* POST add a new user. */
router.post('/', async function(req, res, next) {
  const { firstName, lastName, email, password } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Create a new user instance
    user = new User({
      firstName,
      lastName,
      email,
      password
    });

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Save the user to the database
    await user.save();
    res.json(user);

    // Create and sign a JWT token
    /*const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      jwtSecret,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );*/

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;