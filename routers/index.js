const express = require('express');
const router = express.Router();
const {
    createUser,loginuser,loginadmin,createCourse,updateTopic,del,delcont,deleteCourse,getCourse,getTopic,createTopic,updateCourse,getContent,addContent
} = require('./Handler')
router.post('/loginuser',loginuser)
router.delete('/delete/:cname',deleteCourse)
router.post('/registeruser',createUser)
router.post('/loginadmin',loginadmin)
router.post('/course',createCourse)
router.delete('/del/:tname',del)
router.delete('/delcont/:contname',delcont)
router.put('/course/:id',updateCourse)
router.put('/topic3/:name',updateTopic)
router.post('/topic1/:coname',createTopic)
router.get('/topic/:cname',getTopic)
router.post('/content1/:toname',addContent)
router.get('/content/:tname',getContent)
router.get('/getcourse',getCourse)
module.exports = router;