const models = require('../../models');
const deleteCourse = async (req, res, next) => {
  try {
      const asd = await models.Course.destroy({
          where: {
              coursename: req.params.cname
          }
      })
      if (!asd) {
          res.status(204).json({
              message: "no record found",
          })
      }
      res.status(200).json({
          status: "success",
          message: "course deletion performed"
      })
  }
  catch (e) {
      res.status(400).json({
          status: "fail",
          message: "could not delete course",
          error
      })
  }
}
module.exports =deleteCourse