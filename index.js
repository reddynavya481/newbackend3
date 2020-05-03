const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors=require('cors')
const routers = require('./routers');
app.use(bodyParser.json()); 
const port = 8000;
app.use(cors())
app.use('/', routers);
app.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Server started on port " + port);
    }
})
app.use((error, req, res, next) => {
    res.status(500).json({
        success: false,
        error,
    })
});