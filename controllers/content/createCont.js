/**
 * @description Represents retreiving course
 * @param {object} req - Request object containing params,contentname,contenturl
 * @param {object} res - Response object which indicates status like success or error
 * @param {requestCallback} next - The callback used to call the middleware.
 * @returns {Promise}
 * @exports addContent
 */
/**
 * Global Callback
 * @callback requestCallback
 * @param {object} error
 */

const models = require('../../models');
const logger = require('../../logger')
const addContent = async (req, res, next) => {
  try {
    const topic = await models.Topic.findOne({
      where: {
        topicname: req.params.toname
      }
    })
    // const user=await models.User.findOne({
    //   where:{
    //     id:req.body.userId
    //   }
    // })
    // if(!user){
    //   res.status(401).json({
    //     status: "fail",
    //     message: "userNot found",
    //     error
    //   })
    // }
    logger.info({ topic_name: req.params.toname, action: "findOne" })
    const content = { ...req.body, TopicId: topic.id 
      // ,userId:user.id
    }
    console.log(content)
    const act = await models.Content.create(content)
    res.status(201).json({
      status: "success",
      message: "content added",
      act
    })
    logger.info({ ...req.body, action: "create" })
  }
  catch (error) {
    logger.error("could not add content")
    res.status(400).json({
      status: "fail",
      message: "could not add content",
      error
    })
  }
}
module.exports = addContent