const Joi = require('joi');

const contentValidator = async (req, res, next) => {

    try {
        const contentSchema = Joi.object({
            coontentname: Joi.string().min(2).required(),
            contenturl: Joi.string().regex(/^(http\:\/\/)?(youtube\.com|youtu\.be)+$/).required(),
        })

        const value = await contentSchema.validate({ contentname: req.body.coursename,  contenturl:req.body.contenturl});
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