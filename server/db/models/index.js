import Sequelize from 'sequelize';
import keys from '../../config/keys';

// const sequelize = new Sequelize(keys.postgresURI, {
//     dialectOptions: {
//         ssl: true //needed for heroku
//     }
// });
const sequelize = new Sequelize(keys.devDB, keys.devDBUser, keys.devDBPass, {
    dialect: 'postgres'
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
