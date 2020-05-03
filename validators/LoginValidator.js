const Joi = require('joi');

const LoginValidate = async (req, res, next) => {

  try {
    const signupSchema = Joi.object({
      username: Joi.string().min(1).max(20).required(),
      password: Joi.string().alphanum().min(1).max(30).required(),
    })

    await signupSchema.validate({ username: req.body.username, password: req.body.password });
    next();

  }
  catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.details[0].message
    })
  }
}

module.exports = LoginValidate;