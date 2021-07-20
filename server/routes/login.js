const express = require('express');

const router = express.Router();
const { postLogin } = require('../controllers/login');

router.post('/', postLogin);

module.exports = router;
