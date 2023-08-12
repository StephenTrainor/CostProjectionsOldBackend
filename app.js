var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var quoteRouter = require('./routes/quote');
var tableRouter = require('./routes/table');
var symbolRouter = require('./routes/symbol');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(cors({origin: "https://www.costprojection.me"}));
app.use(cors());

app.use('/quote', quoteRouter);
app.use('/table', tableRouter);
app.use('/symbol', symbolRouter);

// module.exports = app;

app.listen(process.env.PORT || 9000);
