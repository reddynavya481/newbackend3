const Joi = require('joi');

const LoginValidate = async (req, res, next) => {

  try {
    const signupDataSchema = Joi.object({
      username: Joi.string().required(),
      password: Joi.string().alphanum().min(1).max(30).required(),
    })

    await signupDataSchema.validate({ username: req.body.username, password: req.body.password });
    next();

  }
  catch (error) {
    res.status(400).json({
      success: false,
      message: error.details[0].message
    })
  }
}

module.exports = LoginValidate;