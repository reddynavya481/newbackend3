const express = require('express');
const router = express.Router();
const {
    createUser,loginuser,loginadmin,createCourse,getCourse,getTopic,createTopic,updateCourse,getContent,addContent
} = require('./Handler')
router.post('/loginuser',loginuser)
// router.delete('/del',deleteAdmin)
router.post('/registeruser',createUser)
router.post('/loginadmin',loginadmin)
// router.post('/registeradmin',createAdmin)
router.post('/course',createCourse)
router.put('/course/:id',updateCourse)
router.post('/topic1/:coname',createTopic)
router.get('/topic/:cname',getTopic)
router.post('/content1/:toname',addContent)
router.get('/content/:tname',getContent)
router.get('/getcourse',getCourse)
module.exports = router;