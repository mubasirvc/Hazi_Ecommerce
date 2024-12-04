require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const hbs = require('hbs');
const session = require('express-session');
const nocache = require('nocache');

const userRouter = require('./routes/user');
const adminRouter = require('./routes/admin');
const connectDB = require('./config/db');

// Connect to the database
connectDB();

const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, '/views/partials'));

// Handlebars helpers
hbs.registerHelper('ifeq', function (a, b, options) {
  return a == b ? options.fn(this) : options.inverse(this);
});
hbs.registerHelper('ifnoteq', function (a, b, options) {
  return a != b ? options.fn(this) : options.inverse(this);
});
hbs.registerHelper("for", function (from, to, incr, block) {
  let accum = "";
  for (let i = from; i <= to; i += incr) {
    accum += block.fn(i);
  }
  return accum;
});
hbs.registerHelper('ifCond', function (v1, v2, options) {
  return v1 === v2 ? options.fn(this) : options.inverse(this);
});

// Middleware setup
app.use(session({
  secret: process.env.KEY,
  saveUninitialized: true,
  cookie: { maxAge: 600000000 },
  resave: false
}));
app.use(nocache());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// Routes
app.use('/', userRouter);
app.use('/admin', adminRouter);

// 404 handler
app.use((req, res, next) => {
  res.status(404).render('404');
});

// Error handler
app.use((err, req, res, next) => {
  res.status(500);
  res.render('error', { error: err });
});

// Server setup
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
