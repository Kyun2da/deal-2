const db = require('../db');

const insertProduct = async ({
  sellerId,
  title,
  price,
  content,
  town,
  category,
  images,
}) => {
  try {
    const connection = await db.getConnection(async (conn) => conn);
    const insertProductSql = `INSERT INTO product(sellerId, title, price, content, town, category) VALUES(?,?,?,?,?,?)`;
    const [rows] = await connection.query(insertProductSql, [
      sellerId,
      title,
      price,
      content,
      town,
      category,
    ]);

    const productIdx = rows.insertId;
    const insertImagesSql = `INSERT INTO image(productIdx, url) VALUES(?,?)`;
    for (const image of images)
      await connection.query(insertImagesSql, [productIdx, image]);
    connection.release();
    return { success: true };
  } catch (err) {
    return { success: false, error: err };
  }
};

module.exports = insertProduct;
