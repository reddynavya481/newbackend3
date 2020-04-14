const models = require('../models');
const jwt = require('jsonwebtoken')
const loginuser = async (req, res, next) => {

    const user = await models.User.findOne({
        where: {
            username: req.body.username,
        }
    })
    if (!user) {
        return res.status(401).json({
            message: 'Authentication failed. User not found.',
        });
    }

    user.comparePassword(req.body.password, (err, isMatch) => {
        if (isMatch && !err) {
            var token = jwt.sign({ username: req.body.username }, 'nodeauthsecret');
            res.status(200).json({ success: true, token: token, user: user });
        } else {
            res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
        }
    })
}
const loginadmin = async (req, res, next) => {

    const user = await models.Admin.findOne({
        where: {
            username: req.body.username,
        }
    })
    if (!user) {
        return res.status(401).json({
            message: 'Authentication failed. User not found.',
        });
    }

    user.comparePassword(req.body.password, (err, isMatch) => {
        if (isMatch && !err) {
            var token = jwt.sign({ username: req.body.username }, 'nodeauthsecret');
            res.status(200).json({ success: true, token: token, user: user });
        } else {
            res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
        }
    })
}
// const deleteAdmin=async(req,res,next)=>{
//     try{
//     await models.Admin.destroy({where:{},truncate:true})
//     res.status(201).json({
// })
//     }
//     catch(e){
//         res.status(404).json({
//             success: false,
//             message: "could not signup",
//             error
//         })
//     }
// }
const createUser = async (req, res, next) => {
    try {
        
        const users = await models.User.findOne({
            where: {
                username: req.body.username
            }
        });
        if(users)
        {
            res.status(201).json({
                message:"Username already exists"
            })
        }
        else
        {
            const user = await models.User.create(req.body)
            res.status(201).json({
                user
        })
    }
        
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: "could not signup",
            error
        })
        next(error)
    }
}
const createAdmin = async (req, res, next) => {
    try {
        
        const users = await models.Admin.findOne({
            where: {
                username: req.body.username
            }
        });
        if(users)
        {
            res.status(201).json({
                message:"Username already exists"
            })
        }
        else
        {
            const user = await models.Admin.create(req.body)
            res.status(201).json({
                user
        })
    }
        
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: "could not signup",
            error
        })
        next(error)
    }
}
const createCourse = async (req, res, next) => {
    try {
        // const token = req.headers['access-token']
        // console.log(token)
        // const payload = jwt.decode(token)
        // console.log(payload)
        // const user = await models.Admin.findOne({
        //     where: {
        //         username: payload.username
        //     }
        // })
        const activity = { ...req.body }
        const act = await models.Course.create(activity)
        if(act)
        var token = jwt.sign({ coursename: req.body.coursename }, 'nodeauthsecret');
        res.status(200).json({
            token:token,
            act
        })
    }
    catch (error) {
        res.status(400).json({
            status: false,
            error
        })
    }
}
const updateCourse=async (req,res,next)=>{
    try {
        const user = await models.Course.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({})
    } catch (error) {
        next(error)
    }
}
const createTopic = async (req, res, next) => {
    try {
        // const token = req.headers['access-token']
        // console.log(token)
        // const payload = jwt.decode(token)
        // console.log(payload)
        const user = await models.Course.findOne({
            where: {
                coursename: req.params.coname
            }
        })
        const topic = { ...req.body ,courseId:user.id}
        // console.log(topic)
        const act = await models.Topic.create(topic)
        res.status(200).json({
            act
        })
    }
    catch (error) {
        res.status(400).json({
            status: false,
            error
        })
    }
}
const addContent = async (req, res, next) => {
    try {
        const topic = await models.Topic.findOne({
            where: {
                topicname: req.params.toname
            }
        })
        console.log(topic.id)
        // if(topic){

        const content = { ...req.body ,TopicId:topic.id}
        console.log(content)
        const act = await models.Content.create(content)
    //  }
        res.status(200).json({
            act
        })
    }
    catch (error) {
        res.status(400).json({
            status: false,
            error
        })
    }
}
const getTopic= async (req, res, next) => {
    try {
        const user = await models.Course.findOne({
            where: {
                coursename: req.params.cname
            }
        })
        const course=await models.Topic.findAll({
            where:{
                courseId:user.id
            }
        })
        res.status(200).json({
            course
        })
    }
    catch (error) {
        res.status(400).json({
            status: false,
            error
        })
    }
}
const getContent= async (req, res, next) => {
    try {
        const user = await models.Topic.findOne({
            where: {
                topicname: req.params.tname
            }
        })
        const course=await models.Content.findAll({
            where:{
                TopicId:user.id
            }
        })
        res.status(200).json({
            course
        })
    }
    catch (error) {
        res.status(400).json({
            status: false,
            error
        })
    }
}
const getCourse = async (req, res, next) => {
    try {
        const course=await models.Course.findAll({})
        res.status(200).json({
            course
        })
    }
    catch (error) {
        res.status(400).json({
            status: false,
            error
        })
    }
}
module.exports={loginuser,createTopic,getTopic,createUser,loginadmin,createCourse,getCourse,updateCourse,getContent,addContent}