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
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "could not update topic",
            error
        })
        next(error)
    }
}
module.exports =updateTopic