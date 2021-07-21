const db = require('../db');

const selectUserInfo = async (id) => {
  try {
    const connection = await db.getConnection(async (conn) => conn);
    const sql = `SELECT id from user WHERE id = ?`;
    const [rows] = await connection.query(sql, [id]);
    connection.release();
    if (rows.length === 0) return { success: true, result: null };
    return { success: true, result: rows[0].id };
  } catch (err) {
    return { success: false, error: err };
  }
};

module.exports = { selectUserInfo };
