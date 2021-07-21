const express = require('express');
const product = require('../controllers/product');

const router = express.Router();

router.post('/', product.write);

module.exports = router;
