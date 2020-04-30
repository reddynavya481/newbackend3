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
              message: "no yopic found",
          })
      }
      const course = await models.Content.findAll({
          where: {
              TopicId: user.id
          }
      })
      if (!course) {
          res.status(204).json({
              message: "no content found",
          })
      }
      res.status(200).json({
          status: "success",
          message: "contents retreived",
          course
      })
  }
  catch (error) {
      res.status(404).json({
          status: "fail",
          message: "topic not found",
          error
      })
  }
}
module.exports =getContent