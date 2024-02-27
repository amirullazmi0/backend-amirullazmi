const { User } = require('../models/')

const getProfile = async (req, res) => {
    try {
        return res.status(200).json({
            status: true,
            data: "users"
        });
    } catch (error) {

    }
};

const addUser = async (req, res) => {
    try {
        let data = {
            firstName: 'amirull',
            lastName: 'azmi'
        }

        await User.create(data);

        return res.status(200).json({
            status: true,
            data: {
                message: 'create success',
                data: data
            }
        });
    } catch (error) {
        return res.status(200).json({
            status: false,
            data: error
        });
    }
}

const updateProfile = (req, res) => {
    res.send('Create a new user');
};

module.exports = { getProfile, updateProfile, addUser }; 