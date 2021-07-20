const express = require('express');
const { postUpload } = require('../controllers/upload');
const { upload } = require('../middlewares/awsUpload');

const router = express.Router();

router.post('/', upload.array('images', 10), postUpload);

module.exports = router;
