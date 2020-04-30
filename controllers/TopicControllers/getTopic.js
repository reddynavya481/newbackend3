const models = require('../../models');
const getTopic = async (req, res, next) => {
  try {
    const user = await models.Course.findOne({
      where: {
        coursename: req.params.cname
      }
    })
    if (!user) {
      res.status(204).json({
        message: "no course found",
      })
    }
    const course = await models.Topic.findAll({
      where: {
        courseId: user.id
      }
    })
    if (!course) {
      res.status(204).json({
        message: "no topics found",
      })
    }

    res.status(200).json({
      status: "success",
      message: "topics retreived",
      course
    })
  }
  catch (error) {
    res.status(404).json({
      status: "fail",
      message: "not found",
      error
    })
  }
}
module.exports =getTopic