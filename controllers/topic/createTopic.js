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
    }
    catch (error) {
        res.status(400).json({
            status: "fail",
            message: "could not create",
            error
        })
    }
}
module.exports =createTopic