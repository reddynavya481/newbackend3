const models = require('../../models')

const createAdmin = async (req, res, next) => {
    try {

        const users = await models.Admin.findOne({
            where: {
                username: req.body.username
            }
        });
        if (users) {
            res.status(400).json({
                message: "Username already exists",
                status: "fail"
            })
        }
        else {
            const user = await models.Admin.create(req.body)
            res.status(201).json({
                user,
                message: "account created",
                status: "success"
            })
        }

    }
    catch (error) {
        res.status(401).json({
            status: "error",
            message: "could not create",
            error
        })
        next(error)
    }
}
module.exports = createAdmin