module.exports = (sequelize, Sequelize) => {
    // class User extends Sequelize.Model {}

    // User.init(
    //     {
    //         username: {
    //             type: Sequelize.STRING
    //             // allowNull: false // need to resolve with oauth
    //         },
    //         email: {
    //             type: Sequelize.STRING
    //         },
    //         passHash: {
    //             type: Sequelize.STRING
    //         },
    //         oauth: {
    //             type: Sequelize.STRING
    //         }
    //     },
    //     {
    //         sequelize,
    //         modelName: 'user'
    //     }
    // );

    // return User;
    return sequelize.define('user', {
        username: {
            type: Sequelize.STRING
            // allowNull: false // need to resolve with oauth
        },
        email: {
            type: Sequelize.STRING
        },
        passHash: {
            type: Sequelize.STRING
        },
        oauth: {
            type: Sequelize.STRING
        }
    });
};
