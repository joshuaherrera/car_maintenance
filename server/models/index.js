const Sequelize = require('sequelize');
const keys = require('../config/keys');
const UserModel = require('./user');

const sequelize = new Sequelize(keys.postgresURI, {
    dialectOptions: {
        ssl: true //needed for heroku
    }
});
sequelize
    .authenticate()
    .then(() => {
        console.log('success');
    })
    .catch((err) => {
        console.log('error', err);
    });

const User = UserModel(sequelize, Sequelize);

sequelize.sync().then(() => console.log('DB + tables created'));

module.export = { User };
