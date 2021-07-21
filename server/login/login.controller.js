const express = require('express');

const router = express.Router();
const { selectUserInfo } = require('./login.service');

router.post('/', async (req, res) => {
  const { id } = req.body;
  const { success, result } = await selectUserInfo(id);
  if (success && result) res.status(200).send({ id: result });
  else if (success)
    res.status(401).send({ msg: '존재하는 아이디가 없습니다.' });
  else res.status(500).send({ msg: '서버 에러입니다.' });
});

module.exports = router;
