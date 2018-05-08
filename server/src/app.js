const express = require('express');
const bodyParser = require('body-parser');
const keys = require('../config/keys');
const morgan = require('morgan');
const passport = require('passport');
const cors = require('cors');
require('./services/auth/passport');
const AuthRoutes = require('./routes/auth');
const ChefRoutes = require('./routes/chef');
const MenuRoutes = require('./routes/menu');
const UploadRoutes = require('./routes/uploads');
require('./db/connection');

const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

AuthRoutes(app);
ChefRoutes(app);
MenuRoutes(app);
UploadRoutes(app);

if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  app.use(express.static(path.resolve(__dirname, '..', '..', 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', '..', 'client', 'build', 'index.html'));
  });
}

module.exports = app;
