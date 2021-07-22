const db = require('../db');

const checkSignup = (req, res, next) => {
  const idRegex = /[0-9a-zA-Z]{5,20}/;
  const townRegex = /동$/;
  if (idRegex.test(req.body.id) && townRegex.test(req.body.town1)) next();
  else res.status(400).send('유효하지 않은 값입니다.');
};

const checkDuplicatedId = async (req, res, next) => {
  try {
    const { id } = req.body;
    const connection = await db.getConnection(async (conn) => conn);
    const sql = `SELECT * from user WHERE id = ?`;
    const [data] = await connection.query(sql, [id]);
    connection.release();
    if (data.length > 0) {
      res.status(409).redirect(`${process.env.FRONT_URL}/signup`);
    }
    next();
  } catch (err) {
    res.status(500).send('query error');
  }
};

module.exports = { checkSignup, checkDuplicatedId };
