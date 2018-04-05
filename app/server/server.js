const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        maxAge: 1000 * 60 * 60,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 5000;

require('./routes/authRoutes')(app);



app.listen(PORT);
