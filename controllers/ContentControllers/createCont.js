const models = require('../../models');
const addContent = async (req, res, next) => {
  try {
    const topic = await models.Topic.findOne({
      where: {
        topicname: req.params.toname
      }
    })
    const content = { ...req.body, TopicId: topic.id }
    const act = await models.Content.create(content)
    res.status(201).json({
      status: "success",
      message: "content added",
      act
    })
  }
  catch (error) {
    res.status(400).json({
      status: "fail",
      message: "could not add content",
      error
    })
  }
}
module.exports = addContent