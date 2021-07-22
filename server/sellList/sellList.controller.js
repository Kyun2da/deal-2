const express = require('express');
const { selectSellList } = require('./sellList.service');

const router = express.Router();

router.get('/:id', async (req, res) => {
  const { success, result } = await selectSellList(req.params.id);
  if (success) {
    res.status(200).send({ result });
  } else res.status(500).send('server error');
});

module.exports = router;
