// import { loggers } from 'winston';

/**
 * @description Represents retreiving course
 * @param {object} req - Request object containing all attributes of Course model
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
 const logger =require('../../logger')
const updateCourse = async (req, res, next) => {
    try {
        
        const user = await models.Course.update(req.body, {
            where: {
                id: req.params.id 
            }
        })
        
        if (!user) {
            res.status(204).json({
                message: "no record found",
            })
        }
        else{
        logger.info({ course_id: req.params.id, action: "update"})
        res.status(200).json({
            status: "success",
            message: "course updated",
            user
        })
        logger.info("course updated")}
    } catch (error) {
        logger.error("update not performed")
        res.status(400).json({
            status: "fail",
            message: "could not update course",
            error
        })
        next(error)
    }
}
module.exports =updateCourse