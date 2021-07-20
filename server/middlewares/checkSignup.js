const checkSignup = (req, res, next) => {
  const idRegex = /[0-9a-zA-Z]{5,20}/;
  const townRegex = /동$/;
  if (idRegex.test(req.body.id) && townRegex.test(req.body.town1)) next();
  else res.status(400).send('유효하지 않은 값입니다.');
};

module.exports = checkSignup;
