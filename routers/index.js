const express = require('express');
const router = express.Router();
const createUser = require('../controllers/login/userRegister')
const loginuser = require('../controllers/login/userLogin')
const loginadmin = require('../controllers/login/adminLogin')
const createAdmin = require('../controllers/login/adminRegister')
const loginV = require('../validators/loginValidator')

const updateTopic = require('../controllers/topic/updateTopic')
const delTopic = require('../controllers/topic/delTopic')
const getTopic = require('../controllers/topic/getTopic')
const createTopic = require('../controllers/topic/createTopic')
const topicV = require('../validators/topicValidator')

const createCourse = require('../controllers/course/createCourse')
const updateCourse = require('../controllers/course/updateCourse')
const deleteCourse = require('../controllers/course/delCourse')
const getCourse = require('../controllers/course/getCourse')
const courseV = require('../validators/courseValidator')

const getContent = require('../controllers/content/getCont')
const addContent = require('../controllers/content/createCont')
const delcont = require('../controllers/content/delCont')
const contV = require('../validators/contentValidator')

router.post('/loginuser', loginuser)
router.post('/loginadmin', loginadmin)
router.post('/registeruser', createUser)

router.delete('/delete/:cname', deleteCourse)
router.post('/course', courseV, createCourse)
router.put('/course/:id', updateCourse)
router.get('/getcourse', getCourse)

router.delete('/del/:tname', delTopic)
router.patch('/topic3/:name', updateTopic)
router.post('/topic1/:coname', topicV, createTopic)
router.get('/topic/:cname', getTopic)

router.post('/content1/:toname', contV, addContent)
router.delete('/delcont/:contname', delcont)
router.get('/content/:tname', getContent)

module.exports = router;