const Users = require('../sequelize').User;

exports.getAllUsers = async (request, response, next) => {
    try {
        const users = await Users.findAll();
        response.send(users)
    } catch (error) {
        response.status(500).json(error);
    };
};