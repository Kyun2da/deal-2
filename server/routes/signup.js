const express = require('express');
const { postSignup } = require('../controller/signup');

const router = express.Router();

router.post('/', postSignup);

module.exports = router;
