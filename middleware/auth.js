const jwt = require('jsonwebtoken');
const config = require('config');

// a middleware function has access to the response and request objects
module.exports = function(req, res, next) {
  // get token from header
  const token = req.header('x-auth-token');

  // check if no token

  if (!token) {
    return res.status(401).json({
      msg: 'No token, authorization denied'
    });
  }

  // verify the token if there is one

  try {
    // decode the toke
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
