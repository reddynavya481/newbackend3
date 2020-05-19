// import { loggers } from 'winston';

/**
 * @description Represents updating completion status
 * @param {object} req - Request object containing all attributes of Course model
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
const logger = require('../../logger')
const updateCS = async (req, res, next) => {
    try {
        const user = await models.User.findOne({
            where: {
                username: req.body.username
            }
        })
        const ash1 = await models.Status.findOne({
            attributes:['id','statusValue','contentId','userId','username'],
            where:{
                contentId:req.body.contentId,
                userId:user.id
            }
        })
        console.log(ash1)
        if(ash1){
        const status = await models.Status.update(req.body, {
            where: {
                contentId: req.body.contentId,
                userId: user.id
            }
        })
    }
        else{
            const status = await models.Status.create({...req.body,userId: user.id}) 
        }
        //    logger.info({ contentname: req.params.contname, action: "post status"})
        res.status(200).json({
            status: "success",
            message: "content status updated",
            status
        })
    } catch (error) {
        // logger.error("update not performed")
        res.status(400).json({
            status: "fail",
            message: "could not update content",
            error
        })
    }
}
module.exports = updateCS