const db = require('../db');

const selectSellList = async (id) => {
  try {
    const selectProductSql = `SELECT * FROM product WHERE sellerId=? ORDER BY createdAt DESC`;
    const connection = await db.getConnection(async (conn) => conn);
    const [products] = await connection.query(selectProductSql, [id]);

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

module.exports = { selectSellList };
