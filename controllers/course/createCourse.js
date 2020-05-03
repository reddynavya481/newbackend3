/**
 * @description Represents creating a new course
 * @param {object} req - Request object containing coursename,authorname,description values.
 * @param {object} res - Response object which indicates status like success or error
 * @param {requestCallback} next - The callback used to call the middleware.
 * @returns {Promise}
 */
/**
 * @callback requestCallback
 * @param {object} error
 */

const logger=require('../../logger')
const models = require('../../models');
const createCourse = async (req, res, next) => {
    try {
        const activity = { ...req.body }
        const act = await models.Course.create(activity)
        
        res.status(201).json({
            status: "success",
            message: "course created",
            act
        })
        logger.info({ ...req.body, action: "create"})
        logger.info("course created")
    }
    catch (error) {
        logger.error("course not created")
        res.status(400).json({
            status: "fail",
            message: "could not create",
            error: error
        })
        next(error)
    }
}
module.exports = createCourse