var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var config = require('./config');
var mongoose = require('mongoose');

var app = express();
/*
app.urlhelper = {
  baseUrl: function(){
    return "http://localhost:300";
  }
};
*/
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//app.use(express.static('./client-scripts/dist'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/js',express.static(path.join(__dirname, 'public/javascripts')));

//app.use('/apps',appsRouter);
mongoose.connect(config.getDbConnectionString(),{ useNewUrlParser: true });

//one way of calling a router/controller
var setupRouter = require('./routes/setup');
setupRouter(app);

//other way
//api routing 
var apiRouter = require('./routes/apiRouter');
app.use('/api/',apiRouter);
//store (front end) routing
var storeRouter = require('./routes/storeRouter');
app.use('/store/', storeRouter);
//backend routing
var adminRouter = require('./routes/adminRouter');
app.use('/admin/', adminRouter);

//backend routing
var indexRouter = require('./routes/index');
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
