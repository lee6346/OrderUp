const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI).catch(err => {console.log(err);});

const app = express();

app.use(bodyParser.json());

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
require('./routes/billingRoutes')(app);

if(process.env.NODE_ENV === 'production') {
    const path = require('path');
    app.use(express.static(path.resolve(__dirname, '..', 'client', 'build')));

    
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
    });
    
}

app.listen(PORT);
