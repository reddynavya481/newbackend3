/**
 * @description Represents user login function 
 * @param {object} req - Request object containing attributes username,password
 * @param {object} res - Response object which indicates status like success or error
 * @param {requestCallback} next - The callback used to call the middleware.
 * @returns {Promise}
 */
/**
 * Global Callback
 * @callback requestCallback
 * @param {object} error
 */


const logger = require('../../logger')
const models = require('../../models');
const jwt = require('jsonwebtoken')
const loginuser = async (req, res, next) => {
  const user = await models.User.findOne({
    where: {
      username: req.body.username,
    }
  })
  if (!user) {
    logger.error("User not found")
    return res.status(401).json({
      success: false,
      message: 'Authentication failed. User not found.',
    });
  }
  logger.info({ username: req.body.username, action: "findOne" })
  user.comparePassword(req.body.password, (err, isMatch) => {
    if (isMatch && !err) {
      var token = jwt.sign({ username: req.body.username }, 'nodeauthsecret');
      res.status(200).json({ success: true, token: token, user: user });
    } else {
      logger.error("password didnt match")
      res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
    }
  })
}

module.exports = loginuser