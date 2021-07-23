const db = require('../db');

const selectDetailProduct = async (id) => {
  try {
    const selectProductSql = `SELECT * FROM product WHERE idx=? ORDER BY createdAt DESC`;
    const connection = await db.getConnection(async (conn) => conn);
    const [product] = await connection.query(selectProductSql, [id]);

    const selectImgSql = `SELECT url FROM image WHERE productIdx=?`;

    const [imageUrl] = await connection.query(selectImgSql, [id]);
    const arr = [];
    if (imageUrl.length > 0) {
      imageUrl.forEach((url) => arr.push(url.url));
      product[0] = { ...product[0], image: [...arr] };
    }
    connection.release();
    return { success: true, result: product };
  } catch (err) {
    return { success: false, error: err };
  }
};

const selectProduct = async ({ category, town }) => {
  try {
    const categoryQuery = category ? decodeURIComponent(category) : category;
    const townQuery = town ? decodeURIComponent(town) : town;
    let selectProductSql;
    if (!(categoryQuery || townQuery))
      selectProductSql = `SELECT * FROM product ORDER BY createdAt DESC`;
    else if (!categoryQuery)
      selectProductSql = `SELECT * FROM product WHERE town=? ORDER BY createdAt DESC`;
    else if (!townQuery)
      selectProductSql = `SELECT * FROM product WHERE category=? ORDER BY createdAt DESC`;
    else
      selectProductSql = `SELECT * FROM product WHERE category=? AND town=? ORDER BY createdAt DESC`;
    const connection = await db.getConnection(async (conn) => conn);
    const [products] = await connection.query(selectProductSql, [
      categoryQuery || townQuery,
      townQuery,
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

const deleteDetailProduct = async (id) => {
  try {
    const deleteProductSql = `DELETE FROM product WHERE idx=?`;
    const connection = await db.getConnection(async (conn) => conn);
    const [product] = await connection.query(deleteProductSql, [id]);
    connection.release();
    return { success: true, result: product };
  } catch (err) {
    console.error(err);
    return { success: false, error: err };
  }
};

module.exports = {
  selectDetailProduct,
  selectProduct,
  insertProduct,
  deleteDetailProduct,
};
