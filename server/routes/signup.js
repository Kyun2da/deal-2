const express = require('express');
const checkSignup = require('../middlewares/checkSignup');
const { postSignup } = require('../controllers/signup');

const router = express.Router();

router.post('/', checkSignup, postSignup);

module.exports = router;
