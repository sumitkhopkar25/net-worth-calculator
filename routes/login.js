const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController.js');

// GET login page
router.get('/login', (req, res) => {
  res.render('login');
});

// POST login form
router.post('/login', loginController.login);

module.exports = router;