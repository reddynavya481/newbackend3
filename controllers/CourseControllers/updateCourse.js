const models = require('../../models');
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
        res.status(200).json({
            status: "success",
            message: "course updated",
            user
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "could not update course",
            error
        })
        next(error)
    }
}
module.exports =updateCourse