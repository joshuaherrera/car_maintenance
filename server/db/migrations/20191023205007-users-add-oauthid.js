'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction((t) => {
            return Promise.all([
                queryInterface.addColumn(
                    'users',
                    'googleId',
                    {
                        type: Sequelize.STRING,
                        unique: true
                    },
                    { transaction: t }
                ),
                queryInterface.addColumn(
                    'users',
                    'facebookId',
                    {
                        type: Sequelize.STRING,
                        unique: true
                    },
                    { transaction: t }
                )
            ]);
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction((t) => {
            return Promise.all([
                queryInterface.removeColumn('users', 'googleId', {
                    transaction: t
                }),
                queryInterface.removeColumn('users', 'facebookId', {
                    transaction: t
                })
            ]);
        });
    }
};
