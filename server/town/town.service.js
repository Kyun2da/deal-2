const db = require('../db');

const selectTownsInfo = async (id) => {
  try {
    const connection = await db.getConnection(async (conn) => conn);
    const sql = `SELECT town1, town2 from user where id = ?`;
    const [towns] = await connection.query(sql, [id]);
    connection.release();
    return { success: true, result: towns[0] };
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { selectTownsInfo };
