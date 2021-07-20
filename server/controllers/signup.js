const db = require('../db');

const postSignup = async (req, res) => {
  try {
    const connection = await db.getConnection(async (conn) => conn);
    try {
      const sql = `INSERT INTO user(id,town1) VALUES(?,?)`;
      await connection.query(sql, [req.body.id, req.body.town1]);
      res.redirect(`${process.env.FRONT_URL}/login`);
    } catch (err) {
      console.log('Query Error');
      res.status(400).send('중복 ID입니다');
    }
  } catch (err) {
    console.log('DB Error');
    res.status(500).send('signup error');
  }
};

module.exports = { postSignup };
