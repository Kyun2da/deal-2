const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
const session = require('express-session');
const cors = require('cors');

dotenv.config();

const signupRouter = require('./routes/signup');
const loginRouter = require('./routes/login');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: 'deal-2',
    resave: false,
    saveUninitialized: true,
  })
);

app.use('/api/signup', signupRouter);
app.use('/api/login', loginRouter);

module.exports = app;
