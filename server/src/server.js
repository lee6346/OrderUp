const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const morgan = require('morgan');
const cors = require('cors');
const passport = require('./services/auth/passport');
const AuthRoutes = require('./routes/auth');
const UploadRoutes = require('./routes/uploads');
//const BillingRoutes = require('./routes/api/billing');
const UserRoutes = require('./routes/api/user');
const ChefRoutes = require('./routes/api/chef');
require('./db/connection');
const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use('/auth', AuthRoutes);
app.use('/uploads', UploadRoutes);
app.use('/api/v1/chefs', ChefRoutes);
app.use('/api/v1/users', UserRoutes);
//app.use('/api/v1/billing', BillingRoutes);
if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  app.use(express.static(path.resolve(__dirname, '..', '..', 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', '..', 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
