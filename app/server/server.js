const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const config = require('./config/config');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

//const path = require('path');
mongoose.connect(config.mongo.localdb);

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



//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');

//set static files middleware
//app.use(express.static(__dirname + '/public'));



//configure routes 




app.get('/', (request, response) => {
    response.render('pages/index');
});

app.get('/home', (request, response) => {
    response.render('pages/index');
});

app.get('/about', (request, response) => {
    response.render('pages/about');
});

app.get('/account/:id', (request, response) => {
    response.send(`Hello ${request.params['id']}`);
});



app.listen(PORT);
