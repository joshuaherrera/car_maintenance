import express from 'express';

require('./services/passport'); //executes passport config
// const { User } = require('./models/index');
import models, { sequelize } from './models';
import authRoutes from './routes/authRoutes';

const app = express();

app.use(express.json()); // no need for body-parser

authRoutes(app);

app.get('/testdb', (req, res) => {
    models.User.create({
        username: 'userFromGET2'
    })
        .then(() => {
            console.log('created new user');
            res.send({ user: 'made' });
        })
        .catch((err) => {
            console.error('Error making user: ', err);
            res.send({ error: err });
        });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
