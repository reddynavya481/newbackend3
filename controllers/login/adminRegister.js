/**
 * @description Represents admin register function 
 * @param {object} req - Request object containing attributes username,password
 * @param {object} res - Response object which indicates status like success or error
 * @param {requestCallback} next - The callback used to call the middleware.
 * @returns {Promise}
 */
/**
 * Global Callback
 * @callback requestCallback
 * @param {object} error
 */





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
            logger.warn({ username:req.body.username,message:"user already exists",action: "findOne"})
        }
        else {
            const user = await models.Admin.create(req.body)
            res.status(201).json({
                user,
                message: "account created",
                status: "success"
            })
            logger.info({ username:req.body.username,action: "create"})
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