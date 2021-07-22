const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
const session = require('express-session');
const cors = require('cors');

dotenv.config();

const signupRouter = require('./signup/signup.controller');
const loginRouter = require('./login/login.controller');
const imageRouter = require('./image/image.controller');
const productRouter = require('./product/product.controller');
const townRouter = require('./town/town.controller');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: 'deal-2',
    resave: false,
    saveUninitialized: true,
  })
);

app.use('/api/signup', signupRouter);
app.use('/api/login', loginRouter);
app.use('/api/upload', imageRouter);
app.use('/api/product', productRouter);
app.use('/api/town', townRouter);

module.exports = app;
