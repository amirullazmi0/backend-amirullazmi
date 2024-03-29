const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apiController')

router.get('/profile', apiController.getProfile);
router.get('/add-profile', apiController.addUser);

module.exports = router;
