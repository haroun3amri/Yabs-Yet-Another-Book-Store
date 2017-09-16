var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var users = require('./DAL/users');

var index = require('./DAL/index');
var books  =require('./DAL/books');
var carts  =require('./DAL/Order');
var History  =require('./DAL/History');
var passport = require('passport');
var config = require('./config/database');
var cors = require('cors');
const mongoose = require('mongoose');
var logger = require('morgan');

var port = 3000;

var app = express();

// Connect To Database
mongoose.connect(config.database);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);
app.use('/users', users);

// On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database '+config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
    console.log('Database error: '+err);
});


//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));


// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/',index);
app.use('/',books);
app.use('/',carts);
app.use('/',History);

app.listen(port, function(){
    console.log('Server started on port '+port);
});