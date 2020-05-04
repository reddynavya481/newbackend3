/**
 * @description Represents deleting a content
 * @param {object} req - Request object containing params
 * @param {object} res - Response object which indicates status like success or error
 * @param {requestCallback} next - The callback used to call the middleware.
 * @returns {Promise}
 * @exports delcont
 */
/**
 * Global Callback
 * @callback requestCallback
 * @param {object} error
 */
const logger=require('../../logger')
const models = require('../../models');
const delcont = async (req, res, next) => {
  try {
      const as = await models.Content.destroy({
          where: {
              contentname: req.params.contname
          }
      })
      if (!as) {
          res.status(204).json({
              message: "no record found",
          })
      }
      else{
      res.status(200).json({
          status: "success",
          message: "content deletion performed"
      })
      logger.info({ content_name:req.params.toname,action: "delete"})
  }
  
}
  catch (e) {
      res.status(400).json({
          status: "fail",
          message: "could not delete content",
          error
      })
  }
}
module.exports =delcont
