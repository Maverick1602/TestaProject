var express = require('express');
var create = require('./model/dbsetup')
var bodyParser = require('body-parser');
var router = require('./routes/routing');
var myErrorLogger = require('./utilities/errorlogger');
var myRequestLogger = require('./utilities/requestlogger');
var tester = require('./utilities/parser').reportGenerator;

var cors = require('cors');
var app = express();
var allow = true;
app.use(cors());

app.use(bodyParser.json());
app.use(myRequestLogger);

app.use('/', router);
app.use(myErrorLogger);


app.get('/test', (req, res, next) => {
    if (allow) {
        allow = false;
        tester()
            .then((data) => {
                console.log("--- Verification Completed ---",data)
                allow = true;
                res.send(data)
            }).catch((err) => {
                allow = true;
                console.log(err.message);
            })
    }
})




app.get('/setupDb', (req, res, next) => {
    create.setupDb().then((data) => {
        res.send(data)
    }).catch((err) => {
        next(err)
    })
})

app.listen(3080);
console.log("Server listening in port 3080");

module.exports = app