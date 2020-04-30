const Joi = require('joi');

const courseValidator = async (req, res, next) => {

    try {
        const courseSchema = Joi.object({
            coursename: Joi.string().min(2).required(),
            author:Joi.string().min(2).required(),
            description: Joi.string().min(2).required(),
        })

        const value = await course.validate({ coursename: req.body.coursename, author: req.body.author , description:req.body.description});
        next();

    }
    catch (error) {
        res.status(400).json({
            success: false,
            message:  error.details[0].message
        })
    }
}

module.exports = courseValidator;