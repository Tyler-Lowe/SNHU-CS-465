var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const hbs = require('hbs');

require('dotenv').config(); // Load environment variables
const passport = require('passport');
require('./app_api/config/passport'); // Load Passport configuration

// Register partials and helpers for Handlebars
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));
hbs.registerHelper('JSONstringify', function (context) {
  return JSON.stringify(context, null, 2);
});

// Import route files for the website
var indexRouter = require('./app_server/routes/index');
var travelRouter = require('./app_server/routes/travel');
var aboutRouter = require('./app_server/routes/about');
var roomsRouter = require('./app_server/routes/rooms');
var mealsRouter = require('./app_server/routes/meals');
var newsRouter = require('./app_server/routes/news');
var contactRouter = require('./app_server/routes/contact');

// Import API routes
var apiRouter = require('./app_api/routes/index');  // API Routes

// Connect to the database
require('./app_server/models/db');

var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Initialize Passport authentication
app.use(passport.initialize());

// Allow CORS (Enable cross-origin requests)
app.use('/api', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200'); // Adjust if using a different frontend URL
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

// Website Routes
app.use('/', indexRouter);
app.use('/travel', travelRouter);
app.use('/about', aboutRouter);
app.use('/rooms', roomsRouter);
app.use('/meals', mealsRouter);
app.use('/news', newsRouter);
app.use('/contact', contactRouter);

// API Routes
app.use('/api', apiRouter);  // API routes

// Catch unauthorized errors and return 401
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ "message": err.name + ": " + err.message });
  }
});

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
