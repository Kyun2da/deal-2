const express = require('express');

const router = express.Router();

/* GET home page. */
router.post('/', (req, res) => {
  res.send('회원가입 라우터 입니다.');
});

module.exports = router;
