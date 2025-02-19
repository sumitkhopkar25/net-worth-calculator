const User = require('../models/User');

const register = async function (req, res) {
    const { firstName, lastName, email, password } = req.body;
    try {
        // Create a new user instance with the provided details
        const newUser = new User({
          firstName,
          lastName,
          email,
          password
        });
        // Save the new user in the database
        await newUser.save();
        res.status(201).json({ success: true, data: newUser });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

module.exports = {
    register
};