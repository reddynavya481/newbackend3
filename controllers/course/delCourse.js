/**
 * @description Represents deleting a course
 * @param {object} req - Request object containing coursename value.
 * @param {object} res - Response object which indicates status like success or error
 * @param {requestCallback} next - The callback used to call the middleware.
 * @returns {Promise}
 * @exports deleteCourse
 */
/**
 * @callback requestCallback
 * @param {object} e
 */

const logger =require('../../logger')
const models = require('../../models');
const deleteCourse = async (req, res, next) => {
  try {
      const asd = await models.Course.destroy({
          where: {
              coursename: req.params.cname
          }
      })
      if (!asd) {
          res.status(204).json({
              message: "no record found",
          })
      }
      else{
      res.status(200).json({
          status: "success",
          message: "course deletion performed"
      })
      logger.info({ course_name: req.params.cname, action: "delete"})
      logger.info("course deleted")}
  }
  catch (e) {
      logger.error("deletion not performed")
      res.status(400).json({
          status: "fail",
          message: "could not delete course",
          error
      })
      next(e)
  }
}
module.exports =deleteCourse