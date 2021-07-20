const postUpload = async (req, res) => {
  res.status(200).send({
    msg: '성공적으로 파일이 업로드 되었습니다.',
    url: req.files.map((file) => file.location),
  });
};

module.exports = { postUpload };
