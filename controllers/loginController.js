const User = require('../models/User');

const login = async function (req, res) {
    const { email, password } = req.body;
    try {
        // Find users based on email and password
        const users = await User.find({ email, password });
        res.json(users);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

module.exports = {
    login
};