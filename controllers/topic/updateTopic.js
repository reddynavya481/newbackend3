/**
 * @description Represents updating a topic
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
const updateTopic = async (req, res, next) => {
    try {
        const user = await models.Topic.update({ topicname: req.body.topicname }, {
            where: {
                topicname: req.params.name
            }
        })
        if (!user) {
            res.status(204).json({
                message: "no record found",
            })
        }
        res.status(200).json({
            status: "success",
            message: "topic updated",
            user
        })
        logger.info({ topicname: req.params.name, action: "update" })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "could not update topic",
            error
        })
        next(error)
    }
}
module.exports = updateTopic