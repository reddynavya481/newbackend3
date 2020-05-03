const Joi = require('joi');

const courseValidator = async (req, res, next) => {

    try {
        const courseSchema = Joi.object({
            coursename: Joi.string().min(2).max(50).required(),
            authorname:Joi.string().min(2).max(40).required(),
            description: Joi.string().min(2).max(120).required(),
        })

        const value = await courseSchema.validate({ coursename: req.body.coursename, authorname: req.body.authorname , description:req.body.description});
        next();

    }
    catch (error) {
        res.status(400).json({
            status: "fail",
            message:  error.details[0].message
        })
    }
}

module.exports = courseValidator;