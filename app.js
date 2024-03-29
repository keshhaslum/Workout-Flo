var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors'); 

var menstrualRouter = require('./routes/menstrual');
var follicularRouter = require('./routes/follicular');
var ovulationRouter = require('./routes/ovulation');
var lutealRouter = require('./routes/luteal');
var usersRouter = require('./routes/users'); 


var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/menstrual', menstrualRouter);
app.use('/api/follicular', follicularRouter);
app.use('/api/ovulation', ovulationRouter);
app.use('/api/luteal', lutealRouter);
app.use('/api/users', usersRouter); 

module.exports = app;
