const Joi = require('joi');

const contentValidator = async (req, res, next) => {
    try {
        const contentSchema = Joi.object({
            contentname: Joi.string().min(2).required(),
            contenturl: Joi.string().regex(/^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+$/).required(),
        })

        const value = await contentSchema.validate({ contentname: req.body.contentname, contenturl: req.body.contenturl });
        next();

    }
    catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.details[0].message
        })
    }
}

module.exports = contentValidator;