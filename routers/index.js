const express = require('express');
const app = express();

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
const updateCS = require('../controllers/content/updateCS')
const getstatus= require('../controllers/content/getstatus')

app.post('/loginuser', loginuser)
app.post('/loginadmin', loginadmin)
app.post('/registeruser', loginV, createUser)

app.delete('/delete/:cname', deleteCourse)
app.post('/course', courseV, createCourse)
app.put('/course/:id', updateCourse)
app.get('/getcourse', getCourse)

app.delete('/del/:tname', delTopic)
app.patch('/topic3/:name', updateTopic)
app.post('/topic1/:coname', topicV, createTopic)
app.get('/topic/:cname', getTopic)

app.post('/content1/:toname', contV, addContent)
app.delete('/delcont/:contname', delcont)
app.get('/content/:tname', getContent)
// app.put('/status/:toname', updateCS)
app.get('/status/:un',getstatus)
app.put('/updatestatus',updateCS)


module.exports = app;