const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook');
import keys from '../config/keys';

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        },
        (accessToken, refreshToken, profile, done) => {
            console.log(accessToken);
            console.log('refresh token', refreshToken);
            console.log(profile);
        }
    )
); //define which strategy to use for auth

passport.use(
    new FacebookStrategy(
        {
            clientID: keys.facebookClientID,
            clientSecret: keys.facebookClientSecret,
            callbackURL: '/auth/facebook/callback',
            profileFields: ['id', 'displayName', 'name', 'emails']
        },
        (accessToken, refreshToken, profile, done) => {
            console.log(accessToken);
            console.log('refresh token', refreshToken);
            console.log(profile);
        }
    )
);
