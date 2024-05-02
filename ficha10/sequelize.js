const Sequelize = require('sequelize');
const sequelize = new Sequelize('ficha10', 'root', 'Ff00ba123', { dialect: 'mysql' })

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