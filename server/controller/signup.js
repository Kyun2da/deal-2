const postSignup = async (req, res) => {
  // 회원가입 처리
  res.redirect(`${process.env.FRONT_URL}/login`);
};

module.exports = { postSignup };
