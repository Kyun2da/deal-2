const db = require('../db');

const insertUserInfo = async (id, town1) => {
  try {
    const connection = await db.getConnection(async (conn) => conn);
    const sql = `INSERT INTO user(id,town1) VALUES(?,?)`;
    await connection.query(sql, [id, town1]);
    connection.release();
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { insertUserInfo };
