import Sequelize from 'sequelize';
import keys from '../config/keys';
// const UserModel = require('./user');

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

const models = {
    User: sequelize.import('./user')
};

// do associations, user needs associate fcn
Object.keys(models).forEach((key) => {
    if ('associate' in models[key]) {
        models[key].associate(models);
    }
});

export { sequelize };

export default models;
