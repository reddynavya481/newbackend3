const Joi = require('joi');

const topicValidate = async (req, res, next) => {

  try {
    const schema = Joi.object({
      topicname: Joi.string().min(2).required(),
    })
    await schema.validate({ topicname: req.body.topicname });
    next();

  }
  catch (error) {
    res.status(400).json({
      success: false,
      message: error.details[0].message
    })
  }
}
