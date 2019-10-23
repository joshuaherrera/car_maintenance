'use strict';

'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.renameColumn(
            'users',
            'username',
            'usernameChange',
            {
                type: Sequelize.STRING
            }
        );
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.renameColumn(
            'users',
            'usernameChange',
            'username',
            {
                type: Sequelize.STRING
            }
        );
    }
};
