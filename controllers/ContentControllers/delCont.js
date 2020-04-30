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
      res.status(200).json({
          status: "success",
          message: "content deletion performed"
      })
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
