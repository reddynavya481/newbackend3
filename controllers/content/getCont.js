/**
 * @description Represents retreiving course
 * @param {object} req - Request object containing all attributes of content
 * @param {object} res - Response object which indicates status like success or error
 * @param {requestCallback} next - The callback used to call the middleware.
 * @returns {Promise}
 * @exports getContent
 */
/**
 * Global Callback
 * @callback requestCallback
 * @param {object} error
 */

const logger = require('../../logger')
const models = require('../../models');
const getContent = async (req, res, next) => {
    try {
        const user = await models.Topic.findOne({
            where: {
                topicname: req.params.tname
            }
        })
        if (!user) {
            res.status(204).json({
                message: "Invalid",
            })
        }
        else {
            logger.info({ topic_name: req.params.tname, action: "findOne" })
            const course = await models.Content.findAll({
                where: {
                    TopicId: user.id,
                    // userId: req.body.userId
                }
            })

            if (!course) {
                res.status(204).json({
                    message: "no content found",
                })
            }
            else {
                res.status(200).json({
                    status: "success",
                    message: "contents retreived",
                    course

                })
                logger.info({ action: "findAll" })
            }
        }
    }
    catch (error) {
        res.status(404).json({
            status: "fail",
            message: "topic not found",
            error
        })
    }
}
module.exports = getContent