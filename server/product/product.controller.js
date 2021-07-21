const express = require('express');
const insertProduct = require('./product.service');

const router = express.Router();

router.post('/', async (req, res) => {
  const { success } = await insertProduct(req.body);
  if (success)
    res.status(200).send({ msg: '성공적으로 상품을 등록하였습니다.' });
  else res.status(500).send('server error');
});

module.exports = router;
