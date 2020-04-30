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
    }
    catch (e) {
        res.status(400).json({
            status: "fail",
            message: "could not delete topic",
            error
        })
    }
}
module.exports =del