const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apiController')

router.get('/dataProfile', apiController.getProfile);

module.exports = router;
