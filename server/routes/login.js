const express = require('express');

const router = express.Router();

/* GET home page. */
router.use('/', (req, res) => {
  console.log(req);
  res.render('index', { title: 'Express' });
});

module.exports = router;
