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

const models = require('../../models');
const getCourse = async (req, res, next) => {
  try {
      logger.info({ action: "findAll"})
      const course = await models.Course.findAll({})
      res.status(200).json({
          status: "success",
          message: "courses retrieved",
          course
      })
      if (!course) {
          res.status(204).json({
              message: "no record found",
          })
      }
      logger.info("course retrieved")
  }
  catch (error) {
      logger.error("error occured")
      res.status(400).json({
          status: "fail",
          message: "courses not found",
          error
      })
      next(error)
  }
}
module.exports =getCourse