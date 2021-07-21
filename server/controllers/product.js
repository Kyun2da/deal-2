/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const db = require('../db');

const product = {
  write: async (req, res) => {
    try {
      const connection = await db.getConnection(async (conn) => conn);
      try {
        const insertProductSql = `INSERT INTO product(sellerId, title, price, content, town, category) VALUES(?,?,?,?,?,?)`;
        const { sellerId, title, price, content, town, category, images } =
          req.body;

        const [rows] = await connection.query(insertProductSql, [
          sellerId,
          title || null,
          price,
          content,
          town || '역삼동',
          category,
        ]);

        const productIdx = rows.insertId;
        const insertImagesSql = `INSERT INTO image(productIdx, url) VALUES(?,?)`;
        for (const image of images) {
          const [imageRows] = await connection.query(insertImagesSql, [
            productIdx,
            image,
          ]);
        }

        connection.release();
        res.status(200).send({ msg: '성공적으로 상품을 등록하였습니다.' });
      } catch (err) {
        console.log('Query Error');
        console.error(err);
        res.status(400).send('중복 ID입니다');
      }
    } catch (err) {
      console.log('DB Error');
      res.status(500).send('server error');
    }
  },
  delete: async () => {},
};

module.exports = product;
