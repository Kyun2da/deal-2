/* eslint-disable no-console */
const express = require('express');
const {
  selectTownsInfo,
  putTownsInfo,
  deleteTownsInfo,
} = require('./town.service');

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

router.put('/', async (req, res, next) => {
  const { id, town2 } = req.body;
  if (town2 === undefined) next();
  else {
    try {
      const { success } = await putTownsInfo(id, town2);
      if (success) res.send({ msg: 'done' });
    } catch (err) {
      console.error(err);
    }
  }
});

router.put('/', async (req, res) => {
  const { id, index } = req.body;
  try {
    const { success } = await deleteTownsInfo(id, index);
    if (success) res.send({ msg: 'done' });
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
