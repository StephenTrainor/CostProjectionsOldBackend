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
app.use(cors({origin: "https://www.costprojection.me"}));

app.use('/quote', quoteRouter);
app.use('/table', tableRouter);
app.use('/symbol', symbolRouter);

// error handler
// app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  // res.status(err.status || 500);
  // res.render('error');
// });

// module.exports = app;

app.listen(3000);

// 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
