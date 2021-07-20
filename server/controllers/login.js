const db = require('../db');

const postLogin = async (req, res) => {
  try {
    const connection = await db.getConnection(async (conn) => conn);
    try {
      const sql = `SELECT id from user WHERE id = ?`;
      const [rows] = await connection.query(sql, [req.body.id]);
      if (rows.length === 0)
        res.status(401).send({ msg: '존재하는 아이디가 없습니다.' });
      else {
        res.status(200).send({ id: rows[0].id });
      }
      connection.release();
    } catch (err) {
      console.log('Query Error');
      res.status(400).send('server error');
      connection.release();
    }
  } catch (err) {
    console.log('DB Error');
    res.status(500).send('server error');
  }
};

module.exports = { postLogin };
