const express = require('express');
const { selectTownsInfo } = require('./town.service');

const router = express.Router();

router.get('/', async (req, res) => {
  const { id } = req.query;
  try {
    const { success, result } = await selectTownsInfo(id);
    if (success) res.send({ town1: result.town1, town2: result.town2 });
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
