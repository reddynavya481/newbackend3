/**
 * @description Represents deleting a topic
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
const del = async (req, res, next) => {
    try {
        const a = await models.Topic.destroy({
            where: {
                topicname: req.params.tname
            }
        })
        if (!a) {
            res.status(204).json({
                message: "no record found",
            })
        }
        res.status(200).json({
            status: "success",
            message: "topic deletion performed"
        })
        logger.info({ topicname:req.params.tname,action: "delete"})
    }
    catch (error) {
        res.status(400).json({
            status: "fail",
            message: "could not delete topic",
            error
        })
        next(error)
    }
}
module.exports =del