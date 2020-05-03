/**
 * @description Represents creating a topic
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


const models = require('../../models');
const createTopic = async (req, res, next) => {
    try {
        const user = await models.Course.findOne({
            where: {
                coursename: req.params.coname
            }
        })
        const topic = { ...req.body, courseId: user.id }
        const act = await models.Topic.create(topic)
        res.status(201).json({
            status: "success",
            message: "topic created",
            act
        })
        logger.info({ topicname:req.params.coname,action: "create"})
    }
    catch (error) {
        res.status(400).json({
            status: "fail",
            message: "could not create",
            error
        })
        next(error)
    }
}
module.exports =createTopic