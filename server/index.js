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
        username: 'userFromGET'
    }).then(() => {
        console.log('created new user');
    });
    res.send({ user: 'made' });
});

const eraseDBOnSync = true;
const PORT = process.env.PORT || 5000;
sequelize.sync({ force: eraseDBOnSync }).then(async () => {
    if (eraseDBOnSync) {
        console.log('Erasing old db and seeding with test data.');
        createUsers();
    }
    app.listen(PORT);
});

const createUsers = async () => {
    await models.User.create({
        username: 'seededuser1'
    });
    await models.User.create({
        username: 'seeded2',
        email: 'sanec@live.com'
    });
};
