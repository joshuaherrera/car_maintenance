import express from 'express';
import passport from 'passport';
import cookieSession from 'cookie-session';
require('./services/passport'); //executes passport config
import models, { sequelize } from './db/models';
import authRoutes from './routes/authRoutes';
import keys from './config/keys';

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize()); //need these two lines for session with cookies
app.use(passport.session());

app.use(express.json()); // no need for body-parser

authRoutes(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
