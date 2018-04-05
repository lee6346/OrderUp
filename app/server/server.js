const express = require('express');
//const path = require('path');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken) => {
    console.log(accessToken);
}));

const PORT = process.env.PORT || 5000;

//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');

//set static files middleware
//app.use(express.static(__dirname + '/public'));



//configure routes 


app.get(
    '/auth/google', 
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

app.get('/auth/google/callback', passport.authenticate('google'));


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
