/**
 * @description Represents retrieving a topic
 * @param {object} req - Request object containing attributes params,topicname
 * @param {object} res - Response object which indicates status like success or error
 * @param {requestCallback} next - The callback used to call the middleware.
 * @returns {Promise}
 */
/**
 * Global Callback
 * @callback requestCallback
 * @param {object} error
 */
const logger=require('../../logger')
const models = require('../../models');
const getTopic = async (req, res, next) => {
  try {
    const user = await models.Course.findOne({
      where: {
        coursename: req.params.cname
      }
    })
    if (!user) {
      res.status(204).json({
        message: "no course found",
      })
    }
    const course = await models.Topic.findAll({
      where: {
        courseId: user.id
      }
    })
    if (!course) {
      res.status(204).json({
        message: "no topics found",
      })
    }

    res.status(200).json({
      status: "success",
      message: "topics retreived",
      course
    })
    logger.info({ course_name: req.params.cname, action: "findall" })
  }
  catch (error) {
    res.status(404).json({
      status: "fail",
      message: "not found",
      error
    })
    next(error)
  }
}
module.exports = getTopic