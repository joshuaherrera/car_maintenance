const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook');
import keys from '../config/keys';
import models from '../db/models';

const User = models.User;

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        },
        (accessToken, refreshToken, profile, done) => {
            User.findOne({ where: { googleId: profile.id } }).then(
                (existingUser) => {
                    if (existingUser) {
                        //user acct is present
                        console.log('user record already exists');
                    } else {
                        User.create({
                            googleId: profile.id,
                            oauthProvider: profile.provider
                        });
                    }
                }
            );
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
            User.findOne({ where: { facebookId: profile.id } }).then(
                (existingUser) => {
                    if (existingUser) {
                        console.log('user record already exists:');
                        done(null, existingUser);
                    } else {
                        User.create({
                            facebookId: profile.id,
                            oauthProvider: profile.provider
                        }).then((user) => {
                            done(null, user);
                        });
                    }
                }
            );
        }
    )
);
