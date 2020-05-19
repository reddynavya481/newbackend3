/**
 * @description Represents retreiving course
 * @param {object} req - Request object 
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
const getstatus = async (req, res, next) => {
  try {
    logger.info({ action: "findAll" })
    const user = await models.User.findOne({
      where: {
        username: req.params.un
      }
    })
    console.log(user)
    const status1 = await models.Status.findAll({
      attributes:['id','statusValue','contentId','userId','username'],
      where: {
        userId: user.id
      }
    })
    res.status(200).json({
      status: "success",
      message: "status retrieved",
      status1
    })
    logger.info("status retrieved")
  }
  catch (error) {
    // logger.error("error occured")
    res.status(400).json({
      status: "fail",
      message: "status not found",
      error
    })
  }
}
module.exports = getstatus