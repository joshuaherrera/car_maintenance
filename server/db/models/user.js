const user = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
            unique: true
            // allowNull: false // need to resolve with oauth
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        passHash: {
            type: DataTypes.STRING
        },
        oauthProvider: {
            type: DataTypes.STRING
        },
        oauthToken: {
            type: DataTypes.STRING,
            unique: true
        },
        googleId: {
            type: DataTypes.STRING,
            unique: true
        },
        facebookId: {
            type: DataTypes.STRING,
            unique: true
        }
    });
    return User;
};

export default user;
