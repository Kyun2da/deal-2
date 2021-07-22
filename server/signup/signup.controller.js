const express = require('express');
const { checkSignup, checkDuplicatedId } = require('./signup.middleware.check');
const { insertUserInfo } = require('./signup.service');

const router = express.Router();

router.post('/', checkSignup, checkDuplicatedId, async (req, res) => {
  const { id, town1 } = req.body;
  try {
    await insertUserInfo(id, town1);
    res.redirect(`${process.env.FRONT_URL}/login`);
  } catch (err) {
    console.error(err)
  }
});

module.exports = router;
