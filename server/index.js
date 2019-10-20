const express = require('express');
const Sequelize = require('sequelize');
require('./services/passport'); //executes passport config
const authRoutes = require('./routes/authRoutes');
const keys = require('./config/keys');

const sequelize = new Sequelize(keys.postgresURI, {
    dialectOptions: {
        ssl: true //needed for heroku
    }
});
sequelize
    .authenticate()
    .then((err) => {
        console.log('success');
    })
    .catch((err) => {
        console.log('error', err);
    });
const app = express();

app.use(express.json()); // no need for body-parser

authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
