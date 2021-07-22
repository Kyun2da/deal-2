const db = require('../db');

const selectProduct = async ({ category, town }) => {
  try {
    const connection = await db.getConnection(async (conn) => conn);
    const selectProductSql = `SELECT * FROM product WHERE category=? ORDER BY createdAt DESC`;
    const [products] = await connection.query(selectProductSql, [
      decodeURIComponent(category),
      decodeURIComponent(town),
    ]);
    const selectImgSql = `SELECT url FROM image WHERE productIdx=?`;
    for (const [idx, product] of products.entries()) {
      const [imageUrl] = await connection.query(selectImgSql, [product.idx]);
      if (imageUrl.length > 0) {
        products[idx] = { ...product, image: imageUrl[0].url };
      }
    }
    connection.release();
    return { success: true, result: products };
  } catch (err) {
    return { success: false, error: err };
  }
};

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

module.exports = { selectProduct, insertProduct };
