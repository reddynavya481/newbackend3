const models = require('../../models');
const getCourse = async (req, res, next) => {
  try {
      const course = await models.Course.findAll({})
      res.status(200).json({
          status: "success",
          message: "courses retrived",
          course
      })
      if (!course) {
          res.status(204).json({
              message: "no record found",
          })
      }
  }
  catch (error) {
      res.status(400).json({
          status: "fail",
          message: "courses not found",
          error
      })
  }
}
module.exports =getCourse