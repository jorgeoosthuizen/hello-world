const { Sequelize, DataTypes } = require('sequelize');
const UserDataModel = require('./models/Users');
const BookDataModel = require('./models/Books');
const LoanDataModel = require('./models/Loans');

const sequelize = new Sequelize('ficha10', 'root', 'Ff00ba123', { dialect: 'mysql' })

const User = UserDataModel(sequelize, DataTypes);
const Book = BookDataModel(sequelize, DataTypes);
const Loan = LoanDataModel(sequelize, DataTypes);

sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established");
    })
    .catch(error => {
        console.error("Unable to connect", error)
    });


sequelize.sync({ force: false })
    .then(() => {
        console.log("Database and tables created!");
    });


module.exports = {
    User, Book, Loan
};