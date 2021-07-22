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

const putTownsInfo = async (id, town2) => {
  try {
    const connection = await db.getConnection(async (conn) => conn);
    const sql = `UPDATE user set town2 = ? where id = ?`;
    await connection.query(sql, [town2, id]);
    connection.release();
    return { success: true };
  } catch (err) {
    throw new Error(err);
  }
};

const deleteTownsInfo = async (id, index) => {
  try {
    const connection = await db.getConnection(async (conn) => conn);
    // numberOfTown + 1 - index
    const sql = `UPDATE user set town1 = town${
      3 - index
    }, town2 = null where id = ?`;
    await connection.query(sql, [id]);
    connection.release();
    return { success: true };
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { selectTownsInfo, putTownsInfo, deleteTownsInfo };
