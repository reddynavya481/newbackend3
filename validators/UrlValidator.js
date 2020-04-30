const Joi = require('joi');

const UrlValidate = async (req, res, next) => {

  try {
    const url = Joi.object({
      contenturl:Joi.string()
    })
    await UrlValidate.validate({ contenturl: req.body.contenturl });
    next();

  }
  catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.details[0].message
    })
  }
}