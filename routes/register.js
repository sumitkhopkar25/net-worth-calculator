const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController.js');

// GET register page
router.get('/register', (req, res) => {
  res.render('register');
});

// POST register form
router.post('/register', registerController.register);

module.exports = router;