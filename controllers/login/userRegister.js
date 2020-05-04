
/**
 * @description Represents user register function 
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





const models = require('../../models');
const logger=require('../../logger')
const createUser = async (req, res, next) => {
  try {
    const users = await models.User.findOne({
      where: {
        username: req.body.username
      }
    });
    if (users) {
      res.status(400).json({
        message: "Username already exists",
        status: "fail"
      })
      logger.warn({ username:req.body.username,message:"user already exists",action: "findOne"})
    }
    else {
      const user = await models.User.create(req.body)
      res.status(201).json({
        user,
        message: "account created",
        status: "success"
      })
      logger.info({ username:req.body.username,action: "create"})
    }

  }
  catch (error) {
    res.status(401).json({
      status: "error",
      message: "could not create",
      error
    })
    next(error)
  }
}
module.exports = createUser