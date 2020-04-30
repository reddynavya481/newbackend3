const models = require('../../models');
const createCourse = async (req, res, next) => {
  try {
      const activity = { ...req.body }
      const act = await models.Course.create(activity)
      if (act)
          var token = jwt.sign({ coursename: req.body.coursename }, 'nodeauthsecret');
      res.status(201).json({
          status: "success",
          message: "course created",
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
module.exports =createCourse