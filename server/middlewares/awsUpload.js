const aws = require('aws-sdk');
const path = require('path');
const multer = require('multer');
const multerS3 = require('multer-s3');

aws.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: 'ap-northeast-2',
});

const upload = multer({
  storage: multerS3({
    s3: new aws.S3(),
    bucket: process.env.S3_BUCKET,
    key(req, file, cb) {
      cb(null, `images/${Date.now()}${path.basename(file.originalname)}`);
    },
  }),
});

module.exports = { upload };
