const express = require('express');
const bodyParser = require('body-parser');
const keys = require('../config/keys');
const morgan = require('morgan');
const cors = require('cors');
const passport = require('./services/auth/passport');
const AuthRoutes = require('./routes/auth');
const UploadRoutes = require('./routes/api/uploads');
//const BillingRoutes = require('./routes/api/billing');
const UserRoutes = require('./routes/api/user');
const ChefRoutes = require('./routes/api/chef');
require('./db/connection');
const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', AuthRoutes);
app.use('/api/v1/chefs', ChefRoutes);
app.use('/api/v1/users', UserRoutes);
UploadRoutes(app);
//app.use('/api/v1/billing', BillingRoutes);

if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  app.use(express.static(path.resolve(__dirname, '..', '..', 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', '..', 'client', 'build', 'index.html'));
  });
}

module.exports = app;
