const Books = require('../sequelize').Books;

exports.getAllBooks = function (request, response, next) {
    return Books.findAll()
        .then(books => {
            response.send(books)
        });
};