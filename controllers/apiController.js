const db = require('../database/db')

const getProfile = async (req, res) => {
    try {
        const data = await db.query('SELECT * FROM sensors');
        res.json(
            { sensors: data }
        );
    } catch (error) {

    }
};

const updateProfile = (req, res) => {
    res.send('Create a new user');
};

module.exports = { getProfile, updateProfile };