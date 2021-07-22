const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const init = async () => {
  const userTableQuery = `CREATE TABLE IF NOT EXISTS user ( id VARCHAR(21) NOT NULL, town1 TEXT NOT NULL, town2 TEXT, PRIMARY KEY(id)) COMMENT = '유저 테이블', DEFAULT CHARACTER SET = utf8;`;
  const productTableQuery = `CREATE TABLE IF NOT EXISTS product ( idx INT AUTO_INCREMENT NOT NULL, sellerId VARCHAR(21) NOT NULL, title TEXT NOT NULL, price INT, content TEXT NOT NULL, town TEXT NOT NULL, category TEXT NOT NULL, isSelling BOOLEAN DEFAULT TRUE NOT NULL, viewNum INT DEFAULT 0 NOT NULL, chatNum INT DEFAULT 0 NOT NULL, likeNum INT DEFAULT 0 NOT NULL, createdAt DATETIME NOT NULL DEFAULT now(), PRIMARY KEY (idx), FOREIGN KEY (sellerId) REFERENCES user(id) ) COMMENT = '상품 테이블', DEFAULT CHARACTER SET = utf8;`;
  const chatroomTableQuery = `CREATE TABLE IF NOT EXISTS chatroom ( idx INT AUTO_INCREMENT NOT NULL, buyerId VARCHAR(21) NOT NULL, sellerStatus BOOLEAN NOT NULL, buyerStatus BOOLEAN NOT NULL, productIdx INT NOT NULL, PRIMARY KEY (idx), FOREIGN KEY (buyerId) REFERENCES user(id), FOREIGN KEY (productIdx) REFERENCES product(idx) ) COMMENT = '채팅방 테이블', DEFAULT CHARACTER SET = utf8;`;
  const chatTableQuery = `CREATE TABLE IF NOT EXISTS chat ( idx INT AUTO_INCREMENT NOT NULL, roomIdx INT NOT NULL, senderId VARCHAR(21) NOT NULL, message TEXT NOT NULL, createdAt DATETIME NOT NULL DEFAULT now(), PRIMARY KEY (idx), FOREIGN KEY (roomIdx) REFERENCES chatroom(idx), FOREIGN KEY (senderId) REFERENCES user(id) ) COMMENT = '채팅 테이블', DEFAULT CHARACTER SET = utf8;`;
  const imageTableQuery = `CREATE TABLE IF NOT EXISTS image ( idx INT AUTO_INCREMENT NOT NULL, productIdx INT NOT NULL, url TEXT NOT NULL, PRIMARY KEY (idx), FOREIGN KEY (productIdx) REFERENCES product(idx) ) COMMENT = '이미지 테이블', DEFAULT CHARACTER SET = utf8;`;

  try {
    const connection = await pool.getConnection(async (conn) => conn);
    await connection.query(userTableQuery);
    await connection.query(productTableQuery);
    await connection.query(chatroomTableQuery);
    await connection.query(chatTableQuery);
    await connection.query(imageTableQuery);
    connection.release();
  } catch (error) {
    console.error(error);
  }
};

init();

module.exports = pool;
