var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

mongoose.Promise = require('bluebird');
var connection = mongoose.connect('mongodb://localhost/blog');
autoIncrement.initialize(connection);

// start HTML5 History mode
var history = require('connect-history-api-fallback');

var index = require('./routes/index');
var api = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public/resources/images', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

// session配置
app.use(['/api'], session({
  secret: 'leesirbupt',
  resave: false,
  saveUninitialized: true,
  cookie: {
    // 过期时间7*24个小时
    maxAge: 3600000 * 24 * 7
  },
  store: new MongoStore({
    url: 'mongodb://localhost/blog'
  })
}));

app.use('/api', api);

app.use(history({
    index: '/'
}));

app.use('/', index);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
